import type { ReqResSupport, User } from '../types'

export interface UserResponse extends ReqResSupport {
  data: User
}

export async function getUser(id: number) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${id}`, {
    cache: 'force-cache',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }

  return response.json() as Promise<UserResponse>
}
