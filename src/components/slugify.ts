export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[\s\W-]+/g, "-") // Replace spaces, non-word characters and dashes with a single dash.
    .replace(/^-|-$/g, ''); // Remove leading and trailing dashes
}
