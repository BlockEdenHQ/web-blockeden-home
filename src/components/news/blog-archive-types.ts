export interface BlogArchive {
  archive: Archive
}

interface Archive {
  blogPosts: BlogPost[]
}

interface BlogPost {
  id: string
  metadata: Metadata
  content: string
}

interface Metadata {
  permalink: string
  source: string
  title: string
  description: string
  date: string
  tags: Tag[]
  readingTime: number
  hasTruncateMarker: boolean
  authors: any[]
  frontMatter: FrontMatter
  unlisted: boolean
  nextItem: NextItem
}

interface Tag {
  inline: boolean
  label: string
  permalink: string
}

interface FrontMatter {
  title: string
  tags: string[]
  keywords: string[]
  description: string
  image: string
}

interface NextItem {
  title: string
  permalink: string
}
