import React from "react";
import projects from "../../projects-data.json";
import { DappGallery } from "@site/src/components/dapp-gallery";

export default function DistributedVpn() {
  return <DappGallery projects={projects.data.projects} />;
}
