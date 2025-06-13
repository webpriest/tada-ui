"use client"

import { getRecentVehicles } from "@/server/vehicle/recentVehicles"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface Vehicle {
    slug: string;
    name: string;
    photo: string;
    brand: {
        name: string;
    };
}

const RecentEvs = () => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([])
    const imgPath = process.env.NEXT_PUBLIC_STORAGE_URL

    useEffect(() => {
        const fetchVehicles = async () => {
            const evs = await getRecentVehicles()

            setVehicles(evs)
        }
        fetchVehicles()
    }, [])

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
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={2}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop={true}
                        className="ed-category__slider"
                    >
                        {vehicles && vehicles.map((vehicle) => (
                            <SwiperSlide key={vehicle.slug}>
                                <div className="ed-category__card ed-category__card--style2">
                                    <div className="ed-category__img">
                                        <Link href={`/evs/${vehicle.slug}`}>
                                            <Image 
                                                src={`${imgPath}/${vehicle.photo}`} 
                                                alt={vehicle.name}
                                                width={370}
                                                height={200}
                                            />
                                        </Link>
                                    </div>
                                    <Link href={`/evs/${vehicle.slug}`} className="ed-category__content">
                                        <div className="ed-category__info">
                                            <h4>{vehicle.name}</h4>
                                            <p>{vehicle.brand.name}</p>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default RecentEvs