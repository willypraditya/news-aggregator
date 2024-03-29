export interface ApiRequest {
  q?: string
  category?: string
  page: number
}

export interface Source {
  id: string
  name: string
}

export interface Article {
  source: Source
  author: string
  title: string
  description: string | null
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string | null
}

export interface ApiResponse {
  status: string
  totalResults: number
  articles: Article[]
}
