"use server"

import api from "@/utils/axios"
import { redirect } from "next/navigation"

export type FormState = {
    type: 'success' | 'error' | 'idle';
    message: string;
};

const createOrder = async (formData: FormData) => {
    const firstname = formData.get("firstname") as string
    const lastname = formData.get("lastname") as string
    const company = formData.get("company") as string
    const address = formData.get("address") as string
    const countryId = formData.get("countryId") as string
    const stateId = formData.get("stateId") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const password = formData.get("password") as string
    const passwordConfirmation = formData.get("passwordConfirmation") as string
    const city = formData.get("city") as string
    const orderNote = formData.get("orderNote") as string

    try {
        const response = await api.post("/api/v1/contact/message", {
            method: "POST",
            body: JSON.stringify({ 
                firstname, 
                lastname, 
                company, 
                address, 
                countryId, 
                stateId, 
                email, 
                phone, 
                password, 
                passwordConfirmation, 
                city, 
                orderNote 
            })
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
export default createOrder