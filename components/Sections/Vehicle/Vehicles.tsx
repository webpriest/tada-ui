import { getVehicles } from "@/server/vehicle/vehicles";
import { formatNumber } from "@/utils/fomatter";
import Image from "next/image"
import Link from 'next/link';

const Vehicles = async () => {   
  const evs = await getVehicles()

  return (
    <section className="ed-course section-gap position-relative background-image" style={{ backgroundImage: "url(/assets/images/section-bg-9.png)" }}>
        <div className="container ed-container">
            <div className="row">
                <div className="col-12">
                    <div className="ed-section-head d-flex-between">
                        <div className="ed-section-head__info">
                            <span className="ed-section-head__sm-title">Electric Vehicles</span>
                            <h3 className="ed-section-head__title m-0 ed-split-text left" suppressHydrationWarning>
                                Explore All Vehicles
                            </h3>
                        </div>
                        <div className="ed-section-head__btn">
                            <a href="/evs" className="ed-btn">View All<i className="fi fi-rr-arrow-small-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {evs && evs.map((vehicle: any) => (
                <div className="col-lg-4 col-xxl-4 col-md-6 col-12" key={vehicle.id}>
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
                            
                                <div className="ed-course__lesson m-0">
                                    {vehicle.vehicleProperties.map((property: any) => (
                                        <div className="ed-course__part" key={property.id}>
                                            <i className={property.label.icon}></i>
                                            <p>{property.value}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="ed-course__bottom">
                                    <div className="ed-course__teacher">
                                        <Image 
                                            src={`/assets/${vehicle.brand.logo}`} 
                                            alt={vehicle.brand.name}
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    {/* <span className="ed-course__price">₦{vehicle.basePrice}</span> */}
                                    <span className="ed-course__price">₦{ formatNumber(vehicle.basePrice) }</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Vehicles