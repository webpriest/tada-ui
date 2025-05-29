interface User {
    id: number
    name: string,
    email: string,
    created_at: string
}

export const getUsers = async (): Promise<User[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
    return response.json()
}