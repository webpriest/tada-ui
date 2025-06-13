import api from "@/utils/axios";

interface VehicleProperty {
    label: {
        name: string
        icon: string
    }
    value: string
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
    id: string
    name: string
    slug: string
    category: Category
    brand: Brand
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