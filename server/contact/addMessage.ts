import api from "@/utils/axios";

interface Contact {
    id: string
    name: string
    email: string
    phone: string
    company: string
    city: string
    message: string
}

export const addContact = async ({formData}: {formData: FormData}): Promise<Contact> => {
    const response = await api.get("/v1/vehicle/contact/message", {data: formData})

    return response.data.data
}