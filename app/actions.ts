"use server"

import api from "@/utils/axios"
import { toast } from "react-hot-toast"

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
        await getCsrfToken()
        const response = await api.post("/v1/contact/message", 
            { name, email, phone, city, company, message },
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
        
        if(response.data.success) {
            return { 
                success: true, 
                message: response.data.message || 'Message sent successfully!' 
            }
        }
        return { 
            success: false, 
            message: response.data.message || 'Failed to send message' 
        }
    } catch (error: any) {
        if (error.response) {
            return { 
                success: false, 
                message: error.response.data?.message || 'Failed to send message' 
            }
        } else if (error.request) {
            return { 
                success: false, 
                message: 'Network error. Please try again.' 
            }
        } else {
            return { 
                success: false, 
                message: 'Something went wrong. Please try again.' 
            }
        }
    }
}

export async function subscribeToNewsletter(formData: FormData) {
    const email = formData.get("email") as string
    console.log('Server action called with email:', email)

    const getCsrfToken = async () => {
        await api.get("http://localhost:8000/sanctum/csrf-cookie", {
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    try {
        await getCsrfToken()
        const response = await api.post("/v1/subscribe/newsletter", 
            { email },
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
        
        console.log('API Response:', response.data)
        // Check if the response indicates success
        if(response.data.success || response.data.data) {
            return { success: true, message: 'Successfully subscribed to newsletter!' }
        }
        // If we get here, the API didn't return a success response
        return { 
            success: false, 
            message: response.data.message || 'Failed to subscribe to newsletter' 
        }
    } catch (error: any) {
        console.error('Server action error:', error)
        if (error.response) {
            // Get the error message from the API response if available
            const errorMessage = error.response.data?.message || 'Failed to subscribe to newsletter'
            return { success: false, message: errorMessage }
        } else if (error.request) {
            return { success: false, message: 'Network error. Please try again.' }
        } else {
            return { success: false, message: 'Something went wrong. Please try again.' }
        }
    }
}