import type { User } from '../types'

export interface PatchUserResponse extends User {
  updatedAt: string
}

export type UpdateUserPayload = Partial<Omit<User, 'email'>>

export async function patchUser({
  id,
  ...payload
}: Partial<UpdateUserPayload>) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }

  return response.json() as Promise<PatchUserResponse>
}
