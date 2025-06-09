import api from "@/utils/axios";

interface Vehicle {
    id: number
    name: string
    slug: string
    category: string
    brand: string
    basePrice: number
    discount: number
    photo: string
}

export const getRecentVehicles = async (): Promise<Vehicle[]> => {
    const response = await api.get('/v1/vehicle')

    return Array.isArray(response.data) ? response.data : response.data.data
}