import type { User } from '../types'

export interface CreateUserResponse extends User {
  createdAt: string
}

export type CreateUserPayload = Omit<User, 'id' | 'email'>

export async function postUser(payload: CreateUserPayload) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }

  return response.json() as Promise<CreateUserResponse>
}
