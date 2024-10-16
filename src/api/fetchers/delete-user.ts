export async function deleteUser(userId: number) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${userId}`,
    {
      method: 'DELETE',
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }

  return {
    success: true,
  }
}
