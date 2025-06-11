import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import SiteHeader from "@/components/Layouts/SiteHeader";
import Footer from "@/components/Layouts/Footer";
import ShoppingCart from "@/components/Layouts/ShoppingCart";
import ContactUs from "@/components/Layouts/ContactUs";

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
        <link rel="shortcut icon" href="/assets/images/favicon.svg" />

        {/* <link rel="stylesheet" href="/assets/plugins/css/bootstrap.min.css" /> */}

        <link rel="stylesheet" href="/assets/plugins/css/animate.min.css" />

        {/* <link rel="stylesheet" href="/assets/plugins/css/owl.carousel.min.css" /> */}

        {/* <link rel="stylesheet" href="/assets/plugins/css/swiper-bundle.min.css" /> */}

        <link rel="stylesheet" href="/assets/plugins/css/maginific-popup.min.css" />

        <link rel="stylesheet" href="/assets/plugins/css/nice-select.min.css" />

        <link rel="stylesheet" href="/assets/plugins/css/icofont.css" />

        <link rel="stylesheet" href="/assets/plugins/css/uicons.css" />
    </head>

        <body className={`${poppinsFont.variable} element-wrapper`}>
            <div id="ed-mouse">
                <div id="cursor-ball"></div>
            </div>

            <SiteHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {children}
                    </main>

                    <Footer />
                </div>
            </div>

            <ShoppingCart />

            <ContactUs />

            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
            
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

            {/* <Script src="/assets/plugins/js/swiper-bundle.min.js"></Script> */}

            <Script src="/assets/plugins/js/magnific-popup.min.js"></Script>

            <Script src="/assets/plugins/js/jquery.counterup.min.js"></Script>
            <Script src="/assets/plugins/js/waypoints.min.js"></Script>

            <Script src="/assets/plugins/js/nice-select.min.js"></Script>
            <Script src="/assets/plugins/js/backToTop.js"></Script>

            <Script src="/assets/plugins/js/active.js"></Script>
        </body>
    </html>
 );
}