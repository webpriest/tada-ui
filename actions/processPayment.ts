"use server"

import api from "@/utils/axios"
import { redirect } from "next/navigation"

export type FormState = {
    type: 'success' | 'error' | 'idle';
    message: string;
};

const processPayment = async (formData: FormData) => {
    const firstname = formData.get("firstname") as string
    const lastname = formData.get("lastname") as string
    const email = formData.get("email") as string

    try {
        const response = await api.post("/api/v1/make/payment", {
            method: "POST",
            body: JSON.stringify({ 
                firstname, 
                lastname,  
                email
            })
        })
        if(response.data.success) {

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

    // redirect("/evs")
}
export default processPayment