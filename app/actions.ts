"use client"

import api from "@/utils/axios"

export async function createContactMessage(formData: FormData) {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const city = formData.get("city") as string
    const company = formData.get("company") as string
    const message = formData.get("message") as string

    const getCsrfToken = async () => {
        await api.get("http://localhost:8000/sanctum/csrf-cookie", {
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    try {
        // await getCsrfToken()
        const response = await api.post("/v1/contact/message", 
            { name, email, phone, city, company, message },
            {
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRF-TOKEN': document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN'))?.split('=')[1], // Optional: Manually set token
                }
            }
        )
        
        if(response.data.data) {
            // show success message
            // toastified("Message sent successfully")
        }
    } catch (error: any) {
        if (error.response) {
            // Server responded with a status outside 2xx
            console.error('Error:', error.response.status, error.response.data)
        } else if (error.request) {
            // No response received
            console.error('No response:', error.request)
        } else {
            // Other errors
            console.error('Request error:', error.message)
        }
    }
}