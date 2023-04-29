# Creating a Move.toml File for Your Move Package

In this tutorial, we'll discuss how to create a Move.toml file to serve as the package manifest for your Move package. The Move.toml file is placed at the root of your package, and it contains various sections with essential information about your package.

1. Structure of a Move.toml file:

The Move.toml file contains several sections:

- [package]: This section contains metadata about the package, such as the name and author.
- [dependencies]: This section specifies the dependencies of your project.
- [addresses]: This section lists address aliases (e.g., @me will be treated as a 0x0 address).

2. Creating a Move.toml file:

Create a new file in the root directory of your package and name it "Move.toml". Open the file with your preferred text editor and begin by adding the [package] section.

Example:

```toml
[package]
name = "sui-by-example"
version = "0.1.0"
```

3. Adding dependencies:

In the [dependencies] section, list the required dependencies for your project. For example, if your project depends on the Sui package, you would add the following:

```toml
[dependencies]
Sui = { git = "https://github.com/MystenLabs/sui.git", subdir = "crates/sui-framework/packages/sui-framework", rev = "main" }
```

4. Address aliases:

The [addresses] section allows you to define address aliases to be used in your code. For instance, you can define an alias "examples" that corresponds to the address "0x0":

```toml
[addresses]
examples = "0x0"
```

5. Final Move.toml file:

Once you've filled in all the sections, your Move.toml file should look like this:

```toml
[package]
name = "sui-by-example"
version = "0.1.0"

[dependencies]
Sui = { git = "https://github.com/MystenLabs/sui.git", subdir = "crates/sui-framework/packages/sui-framework", rev = "main" }

[addresses]
examples = "0x0"
```

Save the file, and you've successfully created a Move.toml package manifest for your Move package.
