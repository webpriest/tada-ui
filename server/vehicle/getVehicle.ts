import api from "@/utils/axios";

interface VehicleProperty {
    label: {
        name: string
        icon: string
    }
    value: string
}

interface Vehicle {
    id: string
    name: string
    slug: string
    category: string
    brand: string
    basePrice: number
    discount: number
    photo: string
    vehiclePhotos: string[]
    vehicleProperties: VehicleProperty[]
    description: string
}

export const getVehicle = async ({slug}: {slug: string}): Promise<Vehicle> => {
    const response = await api.get(`/v1/vehicle/${slug}?includePhotos=true&includeProperties=true`)

    return response.data.data
}