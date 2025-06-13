import api from "@/utils/axios";

interface VehicleProperty {
    label: {
        name: string
        icon: string
    }
    value: string
}

interface VehiclePhoto {
    id: number
    filename: string
    caption: string
}

interface Brand {
    id: number
    name: string
    slug: string
    logo: string
}

interface Category {
    id: number
    name: string
    slug: string
}

interface Vehicle {
    id: number
    name: string
    slug: string
    category: Category
    brand: Brand
    basePrice: number
    discount: number
    photo: string
    vehiclePhotos: VehiclePhoto[]
    vehicleProperties: VehicleProperty[]
    description: string
}

export const getVehicles = async (): Promise<Vehicle[]> => {
    const response = await api.get('/v1/vehicle?includeProperties=true')

    return Array.isArray(response.data) ? response.data : response.data.data
}