import { getBrands } from "@/server/brand/getBrands"
import Image from "next/image"
import Link from "next/link"

const VehicleBrands = async() => {
    const brands = await getBrands()
  return (
    <section className="ed-course ed-course--style-5 section-gap position-relative">
        <div className="container ed-container">
            
            <div className="row">
                <div className="col-12">
                    <div className="ed-course__tab">

                        <div className="ed-course__tab-details tab-details wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                            <div className="tab-content" id="nav-tabContent">

                                <div className="tab-pane fade show active" id="courseTab1" role="tabpanel">
                                    <div className="row">
                                      {brands && brands.map((brand: any) => (
                                        <div className="col-lg-4 col-12">
                                            <div className="ed-course__content">
                                                <Link href={`/brands/${brand.slug}`}>
                                                  <Image 
                                                      src={`/assets/${brand.logo}`} 
                                                      alt={brand.name}
                                                      width={256}
                                                      height={256}
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                      ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default VehicleBrands