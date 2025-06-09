"use server"

import api from "@/utils/axios"
import { redirect } from "next/navigation"

const createContact = async (formData: FormData) => {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const city = formData.get("city") as string
    const company = formData.get("company") as string
    const message = formData.get("message") as string

    try {
        const response = await api.post("/api/v1/contact/message", {
            method: "POST",
            body: JSON.stringify({ name, email, phone, city, company, message })
        })
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

    redirect("/evs")
}
export default createContact