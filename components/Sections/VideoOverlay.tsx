import Image from "next/image"
import Link from "next/link"

const VideoOverlay = () => {
  return (
    <section className="ed-video">
        <div className="container ed-container">
            <div className="ed-video__bg background-image ed-hobble position-relative" style={{ backgroundImage: "url(/assets/images/video/bg-img.webp)" }}>
                <div className="ed-video__shapes">
                    
                </div>
                <Link href="https://www.youtube.com/watch?v=h5ysddrlXLw" className="ed-video__btn popup-video ed-hover-layer-2">
                    <Image 
                        src="/assets/images/icons/icon-play-yellow.svg" 
                        alt="play-icon"
                        width={120}
                        height={120}
                    />
                </Link>
            </div>
        </div>
    </section>
  )
}

export default VideoOverlay