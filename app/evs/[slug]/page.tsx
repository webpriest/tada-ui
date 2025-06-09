import PageHeader from '@/components/Layouts/PageHeader'
import Vehicle from '@/components/Sections/Vehicle/Vehicle'
import { getVehicle } from '@/server/vehicle/getVehicle'

const Ev = async ({params}: {params: Promise<{slug: string}>}) => {
    const slug = (await params).slug
    const ev = await getVehicle({slug})

    return (
        <>
            <PageHeader title={ev.name} />

            <Vehicle slug={slug} />
        </>
    )
}

export default Ev