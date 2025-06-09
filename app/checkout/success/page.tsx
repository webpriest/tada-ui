"use client"

import PageHeader from "@/components/Layouts/PageHeader"
import { useCartStore } from "@/store/cartStore"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

const paymentSuccess = () => {
    const { clearCart } = useCartStore()
    
    useEffect(() => {
        clearCart()
    }, [clearCart])

    return (
        <>
            <PageHeader title="Payment Successful" />

            <section className="ed-course__details">
                <div className="container ed-container">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="ed-course__sidebar">
                                <div className="ed-course__sidebar-widget">
                                    <div className="ed-course__sidebar-img text-center">
                                        <Image
                                            src="/assets/images/icons/check.png" 
                                            alt="success"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-12 text-center">
                            <h5>Thank you for your order.</h5>
                            <Link href="/evs" className="ed-btn mt-8"> Buy Another Vehicle<i className="fi fi-rr-arrow-small-right"></i> </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default paymentSuccess