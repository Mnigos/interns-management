import type { Paginated, User } from '../types'

export type ListUsersResponse = Paginated<User>

export async function getListUsers(page = 1) {
  const queryParams = new URLSearchParams({
    page: page + '',
  })

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users?${queryParams.toString()}`,
    {
      cache: 'force-cache',
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }

  return response.json() as Promise<ListUsersResponse>
}
