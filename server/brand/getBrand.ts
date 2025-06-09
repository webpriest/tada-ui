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
    basePrice: number
    discount: number
    photo: string
    vehiclePhotos: string[]
    vehicleProperties: VehicleProperty[]
    description: string
}

interface Brand {
    id: number
    name: string
    slug: string
    logo: string
    vehicles: Vehicle[]
}

export const getBrand = async ({slug}: {slug: string}): Promise<Brand> => {
    const response = await api.get(`/v1/brands/${slug}?includeVehicles=true&includeVehicleProperties=true`)

    return response.data.data
}