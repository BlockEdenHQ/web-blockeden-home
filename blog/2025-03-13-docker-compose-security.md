---
title: "Secure Deployment with Docker Compose + Ubuntu"
tags: [Docker, Ubuntu, Security, Containerization, DevOps]
keywords: [Docker Compose, Ubuntu Security, Container Security, DevOps Best Practices]
description: Explore the best security practices for deploying containerized applications using Docker Compose on Ubuntu systems to ensure system security and avoid potential vulnerabilities.
image: "https://opengraph-image.blockeden.xyz/api/og-blockeden-xyz?title=Secure%20Deployment%20with%20Docker%20Compose%20%2B%20Ubuntu"
---

# Secure Deployment with Docker Compose + Ubuntu

In Silicon Valley startups, Docker Compose is one of the preferred tools for quickly deploying and managing containerized applications. However, convenience often comes with security risks. As a Site Reliability Engineer (SRE), I am well aware that security vulnerabilities can lead to catastrophic consequences. This article will share the best security practices I have summarized in my actual work combining Docker Compose with Ubuntu systems, helping you enjoy the convenience of Docker Compose while ensuring system security.

![Secure Deployment with Docker Compose + Ubuntu](https://opengraph-image.blockeden.xyz/api/og-blockeden-xyz?title=Secure%20Deployment%20with%20Docker%20Compose%20%2B%20Ubuntu)

## I. Hardening Ubuntu System Security

Before deploying containers, it is crucial to ensure the security of the Ubuntu host itself. Here are some key steps:

### 1. Regularly Update Ubuntu and Docker

Ensure that both the system and Docker are kept up-to-date to fix known vulnerabilities:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install docker-ce docker-compose-plugin
```

### 2. Restrict Docker Management Permissions

Strictly control Docker management permissions to prevent privilege escalation attacks:

```bash
sudo usermod -aG docker deployuser
# Prevent regular users from easily obtaining docker management permissions
```

### 3. Configure Ubuntu Firewall (UFW)

Reasonably restrict network access to prevent unauthorized access:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
sudo ufw status verbose
```

### 4. Properly Configure Docker and UFW Interaction

By default, Docker bypasses UFW to configure iptables, so manual control is recommended:

Modify the Docker configuration file:

```bash
sudo nano /etc/docker/daemon.json
```

Add the following content:

```json
{
  "iptables": false,
  "ip-forward": true,
  "userland-proxy": false
}
```

Restart the Docker service:

```bash
sudo systemctl restart docker
```

Explicitly bind addresses in Docker Compose:

```yaml
services:
  webapp:
    ports:
      - "127.0.0.1:8080:8080"
```

## II. Docker Compose Security Best Practices

The following configurations apply to Docker Compose v2.4 and above. Note the differences between non-Swarm and Swarm modes.

### 1. Restrict Container Permissions

Containers running as root by default pose high risks; change to non-root users:

```yaml
services:
  app:
    image: your-app:v1.2.3
    user: "1000:1000"  # Non-root user
    read_only: true    # Read-only filesystem
    volumes:
      - /tmp/app:/tmp  # Mount specific directories if write access is needed
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
```

**Explanation**:
- A read-only filesystem prevents tampering within the container.
- Ensure mounted volumes are limited to necessary directories.

### 2. Network Isolation and Port Management

Precisely divide internal and external networks to avoid exposing sensitive services to the public:

```yaml
networks:
  frontend:
    internal: false
  backend:
    internal: true

services:
  nginx:
    networks: [frontend, backend]
  database:
    networks:
      - backend
```

- Frontend network: Can be open to the public.
- Backend network: Strictly restricted, internal communication only.

### 3. Secure Secrets Management

Sensitive data should never be placed directly in Compose files:

**In single-machine mode**:

```yaml
services:
  webapp:
    environment:
      - DB_PASSWORD_FILE=/run/secrets/db_password
    volumes:
      - ./secrets/db_password.txt:/run/secrets/db_password:ro
```

**In Swarm mode**:

```yaml
services:
  webapp:
    secrets:
      - db_password
    environment:
      DB_PASSWORD_FILE: /run/secrets/db_password

secrets:
  db_password:
    external: true  # Managed through Swarm's built-in management
```

**Note**:
- Docker's native Swarm Secrets cannot directly use external tools like Vault or AWS Secrets Manager.
- If external secret storage is needed, integrate the reading process yourself.

### 4. Resource Limiting (Adapt to Docker Compose Version)

Container resource limits prevent a single container from exhausting host resources.

**Docker Compose Single-Machine Mode (v2.4 recommended)**:

```yaml
version: '2.4'

services:
  api:
    image: your-image:1.4.0
    mem_limit: 512m
    cpus: 0.5
```

**Docker Compose Swarm Mode (v3 and above)**:

```yaml
services:
  api:
    deploy:
      resources:
        limits:
          cpus: "0.5"
          memory: 512M
        reservations:
          cpus: "0.25"
          memory: 256M
```

> **Note**: In non-Swarm environments, the `deploy` section's resource limits **do not take effect**, be sure to pay attention to the Compose file version.

### 5. Container Health Checks

Set up health checks to proactively detect issues and reduce service downtime:

```yaml
services:
  webapp:
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 20s
```

### 6. Avoid Using the Latest Tag

Avoid the uncertainty brought by the `latest` tag in production environments, enforce specific image versions:

```yaml
services:
  api:
    image: your-image:1.4.0
```

### 7. Proper Log Management

Prevent container logs from exhausting disk space:

```yaml
services:
  web:
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "5"
```

### 8. Ubuntu AppArmor Configuration

By default, Ubuntu enables AppArmor, and it is recommended to check the Docker profile status:

```bash
sudo systemctl enable --now apparmor
sudo aa-status
```

Docker on Ubuntu defaults to enabling AppArmor without additional configuration. It is generally not recommended to enable SELinux on Ubuntu simultaneously to avoid conflicts.

### 9. Continuous Updates and Security Scans

- **Image Vulnerability Scanning**: It is recommended to integrate tools like Trivy, Clair, or Snyk in the CI/CD process:

```bash
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
  aquasec/trivy image your-image:v1.2.3
```

- **Automated Security Update Process**: Rebuild images at least weekly to fix known vulnerabilities.

## III. Case Study: Lessons from Docker Compose Configuration Mistakes

In July 2019, Capital One suffered a major data breach affecting the personal information of over 100 million customers [1](https://developer.aliyun.com/article/1220984)[2](https://blog.csdn.net/2301_79318382/article/details/136046139). Although the main cause of this attack was AWS configuration errors, it also involved container security issues similar to your described situation:

1. **Container Permission Issues**: The attacker exploited a vulnerability in a Web Application Firewall (WAF) running in a container but with excessive permissions.
2. **Insufficient Network Isolation**: The attacker could access other AWS resources from the compromised container, indicating insufficient network isolation measures.
3. **Sensitive Data Exposure**: Due to configuration errors, the attacker could access and steal a large amount of sensitive customer data.
4. **Security Configuration Mistakes**: The root cause of the entire incident was the accumulation of multiple security configuration errors, including container and cloud service configuration issues.

This incident resulted in significant financial losses and reputational damage for Capital One. It is reported that the company faced fines of up to $150 million due to this incident, along with a long-term trust crisis. This case highlights the importance of security configuration in container and cloud environments, especially in permission management, network isolation, and sensitive data protection. It reminds us that even seemingly minor configuration errors can be exploited by attackers, leading to disastrous consequences.

## IV. Conclusion and Recommendations

Docker Compose combined with Ubuntu is a convenient way to quickly deploy container applications, but security must be integrated throughout the entire process:

- Strictly control container permissions and network isolation.
- Avoid sensitive data leaks.
- Regular security scanning and updates.
- It is recommended to migrate to advanced orchestration systems like Kubernetes for stronger security assurance as the enterprise scales.

Security is a continuous practice with no endpoint. I hope this article helps you better protect your Docker Compose + Ubuntu deployment environment.
