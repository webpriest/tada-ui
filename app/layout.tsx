import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Script from "next/script";
import Nav from "@/components/Layouts/Nav";
import MobileNav from "@/components/Layouts/MobileNav";
import Footer from "@/components/Layouts/Footer";
import ShoppingCart from "@/components/Layouts/ShoppingCart";

export const metadata: Metadata = {
  title: "TADA Autos",
  description: "TADA Autos is an Electric Vehicle (EV) sales company dedicated to accelerating the adoption of sustainable transportation across Africa and beyond.",
};

const poppinsFont = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="no-js" lang="en">
        <head>
        <title>TADA</title>
        
        <link rel="shortcut icon" href="/assets/images/favicon.svg" />

        <link rel="stylesheet" href="/assets/plugins/css/bootstrap.min.css" />

        <link rel="stylesheet" href="/assets/plugins/css/animate.min.css" />

        <link rel="stylesheet" href="/assets/plugins/css/owl.carousel.min.css" />

        <link rel="stylesheet" href="/assets/plugins/css/swiper-bundle.min.css" />

        <link rel="stylesheet" href="/assets/plugins/css/maginific-popup.min.css" />

        <link rel="stylesheet" href="/assets/plugins/css/nice-select.min.css" />

        <link rel="stylesheet" href="/assets/plugins/css/icofont.css" />

        <link rel="stylesheet" href="/assets/plugins/css/uicons.css" />
    </head>

        <body className={`${poppinsFont.variable} element-wrapper`}>
            {/* <div id="preloader">
                <div id="ed-preloader" className="ed-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                    </div>
                </div>
            </div> */}
 
            <div id="ed-mouse">
                <div id="cursor-ball"></div>
            </div>

            <div className="modal mobile-menu-modal offcanvas-modal fade" id="offcanvas-modal">
                <div className="modal-dialog offcanvas-dialog">
                    <div className="modal-content">
                        <div className="modal-header offcanvas-header">
                            <div className="offcanvas-logo">
                                <a href="home">
                                    <Image 
                                        src="/assets/images/logo.svg" 
                                        alt="TADA"
                                        width={122} 
                                        height={70}
                                        style={{ width: "auto", height: "auto" }}
                                        priority
                                        /></a>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="fi fi-ss-cross"></i>
                            </button>
                        </div>
                        <MobileNav />
                    </div>
                </div>
            </div>

            <header className="ed-header ed-header--style4 ed-header--style5">
                <div className="container ed-container-expand">
                    <div className="ed-header__inner">

                        <div className="ed-header__left--style2">
                            <div className="ed-header__left-widget--style2">

                                <div className="ed-topbar__logo">
                                    <a href="home">
                                        <Image 
                                            src="/assets/images/logo.svg" 
                                            alt="TADA"
                                            width={122} 
                                            height={70}
                                            style={{ width: "auto", height: "auto" }}
                                            priority
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <Nav />
                    </div>
                </div>
            </header>

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {children}
                    </main>

                    <Footer />
                </div>
            </div>

            <ShoppingCart />

            <div className="offcanvas offcanvas-end ed-sidebar" id="edSidebar" aria-labelledby="offcanvasRightLabel">
                <div className="ed-sidebar-header">
                    <a href="#" className="ed-sidebar-logo">
                        <Image 
                            src="/assets/images/logo.svg"
                            alt="TADA"
                            width={122} 
                            height={70}
                            style={{ width: "auto", height: "auto" }}
                            priority
                        />
                    </a>
                    <button type="button" className="text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="fi fi-rr-cross"></i>
                    </button>
                </div>
                <div className="ed-sidebar-body m-0">
                    <div className="ed-sidebar-widget">
                        <h3 className="ed-sidebar-widget-title">Contact Us:</h3>
 
                        <div className="ed-contact__info-item">
                            <div className="ed-contact__info-icon">
                                <Image src="/assets/images/icons/icon-phone-blue.svg" alt="icon-phone-blue" width={100} 
                                        height={100} />
                            </div>
                            <div className="ed-contact__info-content">
                                <span>Tech. Support</span>
                                <a href="tel:+234 801 2345 678">+234 801 2345 678</a>
                            </div>
                        </div>

                        <div className="ed-contact__info-item">
                            <div className="ed-contact__info-icon">
                                <Image 
                                src="/assets/images/icons/icon-envelope-blue.svg" 
                                alt="icon-envelope-blue"
                                width={100} 
                                height={100} />
                            </div>
                            <div className="ed-contact__info-content">
                                <span>Send Message</span>
                                <a href="mailto:help@tadaautos.com">help@tadaautos.com</a>
                            </div>
                        </div>

                        <div className="ed-contact__info-item">
                            <div className="ed-contact__info-icon">
                                <Image 
                                    src="/assets/images/icons/icon-location-blue.svg" 
                                    alt="icon-location-blue"
                                    width={100} 
                                    height={100}
                                />
                            </div>
                            <div className="ed-contact__info-content">
                                <span>Where We Are</span>
                                <a href="#">Abuja, Nigeria</a>
                            </div>
                        </div>
                    </div>

                    <div className="ed-sidebar-widget">
                        <h3 className="ed-sidebar-widget-title">Follow Us:</h3>
                        <ul className="ed-sidebar-social">
                            <li>
                                <a href="https://www.facebook.com/" target="_blank"><Image src="/assets/images/icons/icon-dark-facebook.svg" alt="icon-dark-facebook" width={100} 
                                        height={100} /></a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/" target="_blank"><Image src="/assets/images/icons/icon-dark-twitter.svg" alt="icon-dark-twitter" width={100} 
                                        height={100} /></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank"><Image src="/assets/images/icons/icon-dark-instagram.svg" alt="icon-dark-instagram" width={100} 
                                        height={100} /></a>
                            </li>
                        </ul>
                    </div>

                    <div className="ed-sidebar-widget">
                        <h3 className="ed-sidebar-widget-title">Subscribe</h3>
                        <form action="#" method="post" className="ed-sidebar-subscribe">
                            <input type="email" name="email-address" placeholder="Enter email" required />
                            <button type="submit" className="ed-btn">Subscribe<i className="fi fi-rr-arrow-small-right"></i></button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
            
        </body>
        <Script src="/assets/plugins/js/jquery.min.js"></Script>
        <Script src="/assets/plugins/js/jquery-migrate.js"></Script>

        <Script src="/assets/plugins/js/bootstrap.min.js"></Script>

        <Script src="/assets/plugins/js/gsap/gsap.js"></Script>
        <Script src="/assets/plugins/js/gsap/gsap-scroll-to-plugin.js"></Script>
        <Script src="/assets/plugins/js/gsap/gsap-scroll-smoother.js"></Script>
        <Script src="/assets/plugins/js/gsap/gsap-scroll-trigger.js"></Script>
        <Script src="/assets/plugins/js/gsap/gsap-split-text.js"></Script>

        <Script src="/assets/plugins/js/wow.min.js"></Script>

        <Script src="/assets/plugins/js/owl.carousel.min.js"></Script>

        <Script src="/assets/plugins/js/swiper-bundle.min.js"></Script>

        <Script src="/assets/plugins/js/magnific-popup.min.js"></Script>

        <Script src="/assets/plugins/js/jquery.counterup.min.js"></Script>
        <Script src="/assets/plugins/js/waypoints.min.js"></Script>

        <Script src="/assets/plugins/js/nice-select.min.js"></Script>
        <Script src="/assets/plugins/js/backToTop.js"></Script>

        <Script src="/assets/plugins/js/active.js"></Script>
    </html>
 );
}