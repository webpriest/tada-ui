import api from "@/utils/axios";

interface NgState {
    id: number
    statename: string
}

export const getStates = async (): Promise<NgState[]> => {
    const response = await api.get('/v1/states')

    return Array.isArray(response.data) ? response.data : response.data.data
}