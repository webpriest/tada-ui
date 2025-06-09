import PageHeader from "@/components/Layouts/PageHeader"
import { VehicleBrand } from "@/components/Sections/Brand/VehicleBrand"
import { getBrand } from "@/server/brand/getBrand"

const Brand = async ({ params }: {params: Promise<{slug: string}>}) => {
    const slug = (await params).slug
    const brand = await getBrand({slug})
    
    return (
      <>
          <PageHeader title={brand.name} />

          <VehicleBrand slug={slug} />
      </>
    )
}

export default Brand