import api from "@/utils/axios";

interface VehicleProperty {
    label: {
        name: string
        icon: string
    }
    value: string
}

interface Vehicle {
    id: number
    name: string
    slug: string
    category: string
    brand: string
    basePrice: number
    discount: number
    photo: string
    vehiclePhotos: Array<string>
    vehicleProperties: VehicleProperty[]
    description: string
}

export const getVehicles = async (): Promise<Vehicle[]> => {
    const response = await api.get('/v1/vehicle?includeProperties=true')

    return Array.isArray(response.data) ? response.data : response.data.data
}