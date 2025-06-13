import { getBrand } from "@/server/brand/getBrand"
import Link from "next/link"
import Image from "next/image"
import { formatNumber } from "@/utils/fomatter"

export const VehicleBrand = async ({slug}: {slug: string}) => {
    const brand = await getBrand({slug})
    const imgPath = process.env.NEXT_PUBLIC_STORAGE_URL

  return (
    <section className="ed-course__details">
        <div className="container ed-container">
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="ed-course__sidebar">
                        <div className="ed-course__sidebar-widget">
                            <div className="ed-course__sidebar-img text-center">
                                <Image
                                    src={`${imgPath}/${brand.logo}`} 
                                    alt={brand.name}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-12">
                    <section className="ed-course section-gap position-relative background-image" style={{ backgroundImage: "url(/assets/images/section-bg-9.png)" }}>
                        <div className="container ed-container">
                            <div className="row">
                                {brand.vehicles && brand.vehicles.map((vehicle: any) => (
                                <div className="col-lg-6 col-xxl-4 col-md-6 col-12" key={vehicle.id}>
                                    <div className="ed-course__card ed-course__card--style3 ed-course__card--style4 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                                        <div className="ed-course__cover">
                                            <Link href={`/evs/${vehicle.slug}`} className="ed-course__img">
                                                <Image 
                                                    src={`/assets/${vehicle.photo}`} 
                                                    alt={vehicle.name}
                                                    width={1366}
                                                    height={768}
                                                />
                                            </Link>
                                        </div>
                                        <div className="ed-course__body">
                                            <Link href={`/evs/${vehicle.slug}`} className="ed-course__title">
                                                <h5>
                                                    {vehicle.name}
                                                </h5>
                                            </Link>
                                            <div className="from-brand ed-course__lesson m-0">
                                                {vehicle.vehicleProperties.slice(0, 6).map((property: any) => (
                                                    <div className="ed-course__part" key={property.id}>
                                                        <i className={property.label.icon}></i>
                                                        <p>{property.value}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="ed-course__bottom">
                                                <div className="ed-course__teacher">
                                                    <Image 
                                                        src="/assets/images/favicon.svg" 
                                                        alt="logo"
                                                        width={28}
                                                        height={28}
                                                    />
                                                    <a href="#">TADA Autos</a>
                                                </div>
                                                <span className="ed-course__price">₦{ formatNumber(vehicle.basePrice) }</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </section>               
                </div>

            </div>
        </div>
    </section>
  )
}
