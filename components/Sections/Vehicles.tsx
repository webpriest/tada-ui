import Image from "next/image"

const Vehicles = () => {
  return (
    <section className="ed-course section-gap position-relative background-image" style={{ backgroundImage: "url(/assets/images/section-bg-9.png)" }}>
        <div className="container ed-container">
            <div className="row">
                <div className="col-12">
                    <div className="ed-section-head d-flex-between">
                        <div className="ed-section-head__info">
                            <span className="ed-section-head__sm-title">Electric Vehicles</span>
                            <h3 className="ed-section-head__title m-0 ed-split-text left">
                                Explore All Vehicles
                            </h3>
                        </div>
                        <div className="ed-section-head__btn">
                            <a href="{{ route('vehicle.index" className="ed-btn">View All<i className="fi fi-rr-arrow-small-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* @if($vehicles->isNotEmpty()) */}
            <div className="row">
                {/* @foreach($vehicles as $vehicle) */}
                <div className="col-lg-6 col-xxl-4 col-md-6 col-12">
                    <div className="ed-course__card ed-course__card--style3 ed-course__card--style4 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                        <div className="ed-course__cover">
                            <a href="#" className="ed-course__img">
                                <Image 
                                    src="/assets/images/vehicles/yC9dZZEA0rtxEbdsUXTPh7OotamJrapT1vPJEW2i.webp" alt="Geely"
                                    width={1366}
                                    height={768}
                                />
                            </a>
                        </div>
                        <div className="ed-course__body">
                            <a href="#" className="ed-course__title">
                                <h5>
                                    Toyota BZ3X
                                </h5>
                            </a>
                            <div className="ed-course__lesson m-0">
                                {/* @foreach($vehicle->vehicle_properties->take(3) as $property) */}
                                <div className="ed-course__part">
                                    <i className="fi-rr-road"></i>
                                    <p>Range</p>
                                </div>
                                {/* @endforeach */}
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
                                <span className="ed-course__price">₦60,000,000.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* @endforeach */}
            </div>
            {/* @endif */}
        </div>
    </section>
  )
}

export default Vehicles