"use server"

import Image from 'next/image'

const Slider = () => {
  return (
    <section className="ed-hero ed-hero--style3">
        {/* @if($sliders->isNotEmpty()) */}
        <div className="owl-carousel ed-hero__slider">
            {/* @foreach($sliders as $slider) */}
            <div className="ed-hero__slider-item">
                <Image 
                  src="/assets/images/slider/UffmK20kfXZqSCt7Motj9z2gjDvQVXJmXmChVKW0.webp" alt="EV" 
                  width={1366} 
                  height={768}
                  priority
                />
            </div>
            {/* @endforeach */}
        </div>
        {/* @endif */}

        <div className="container ed-container-expand">
            <div className="row justify-content-left">
                <div className="col-lg-7 col-12">
                     {/* Hero Content  */}
                    <div className="ed-hero__content text-left">
                        <h1 className="ed-hero__content-title ed-split-text left">
                            Built for Tomorrow.<br />
                            Ready Today
                        </h1>
                        <div className="ed-hero__search p-0">
                            <a href="#" className="ed-btn">Explore Now<i className="fi fi-rr-arrow-small-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Slider