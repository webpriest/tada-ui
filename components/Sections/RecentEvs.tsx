const RecentEvs = () => {
  return (
    <section className="ed-category ed-category--style2 section-gap overflow-hidden">
        <div className="container ed-container">
            <div className="row">
                <div className="col-12">
                    <div className="ed-section-head text-center">
                        <span className="ed-section-head__sm-title">New Arrivals</span>
                        <h3 className="ed-section-head__title m-0 ed-split-text left">
                            Recent EVs
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                {/* @if($recent_vehicles->isNotEmpty()) */}
                <div className="swiper ed-category__slider">
                    <div className="swiper-wrapper">
                        {/* @foreach($recent_vehicles as $recent) */}
                        <div className="swiper-slide">
                            <div className="ed-category__card ed-category__card--style2">
                                <div className="ed-category__img">
                                    <img src="/assets/images/vehicles/iJyd5d0GEMxcNMo9xYeSBQdm0PinEF1CMAZKcO3c.webp" alt="Tesla" />
                                </div>
                                <a href="course-1.php" className="ed-category__content">
                                    <div className="ed-category__icon">
                                        <img src="/assets/images/vehicles/iJyd5d0GEMxcNMo9xYeSBQdm0PinEF1CMAZKcO3c.webp" alt="icon" />
                                    </div>
                                    <div className="ed-category__info">
                                        <h4>Tesla Model 3</h4>
                                        <p>Tesla</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* @endforeach */}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                {/* @endif */}
            </div>
        </div>
    </section>
  )
}

export default RecentEvs