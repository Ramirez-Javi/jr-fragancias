import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
};

export function createPageMetadata({ title, description }: PageMetadataInput): Metadata {
  return {
    title,
    description,
  };
}