export interface ReqResSupport {
  support: {
    url: string
    text: string
  }
}

export interface Paginated<TData> extends ReqResSupport {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: TData[]
}

export interface User {
  id: number
  first_name: string
  last_name: string
  avatar?: string
  email: string
}
