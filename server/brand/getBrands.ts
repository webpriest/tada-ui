import api from "@/utils/axios";

interface Vehicle {
    id: number
    name: string
    slug: string
    category: string
    basePrice: number
    photo: string
}

interface Brand {
    id: number
    name: string
    slug: string
    logo: string
    vehicles: Vehicle[]
}

export const getBrands = async (): Promise<Brand[]> => {
    const response = await api.get('/v1/brands?includeVehicles=true')

    return Array.isArray(response.data) ? response.data : response.data.data
}