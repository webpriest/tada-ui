import { getRecentVehicles } from "@/server/vehicle/recentVehicles"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const RecentEvs = async () => {
    const vehicles = await getRecentVehicles()

    return (
        <section className="ed-category ed-category--style2 section-gap overflow-hidden">
            <div className="container ed-container">
                <div className="row">
                    <div className="col-12">
                        <div className="ed-section-head text-center">
                            <span className="ed-section-head__sm-title">New Arrivals</span>
                            <h3 className="ed-section-head__title m-0 ed-split-text left">
                                Recent Vehicles
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {/* <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                    >
                        <div className="swiper ed-category__slider">
                            <div className="swiper-wrapper">
                                {vehicles && vehicles.map((vehicle: any) => (
                                <div className="swiper-slide">
                                    <SwiperSlide key={vehicle.slug}>
                                        <div className="ed-category__card ed-category__card--style2">
                                                <div className="ed-category__img">
                                                    <img src={`/assets/${vehicle.photo}`} alt={vehicle.name} />
                                                </div>
                                                <a href="course-1.php" className="ed-category__content">
                                                    <div className="ed-category__icon">
                                                        <img src={`/assets/${vehicle.photo}`} alt={vehicle.name} />
                                                    </div>
                                                    <div className="ed-category__info">
                                                        <h4>{vehicle.name}</h4>
                                                        <p>{vehicle.brand.name}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                    </div> 
                                ))}
                            </div>

                        </div>
                    </Swiper> */}
                </div>
            </div>
        </section>
    )
}

export default RecentEvs