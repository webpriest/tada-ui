"use client"

import processPayment from "@/actions/processPayment"
import PageHeader from "@/components/Layouts/PageHeader"
import { useCartStore } from "@/store/cartStore"
import { formatNumber } from "@/utils/fomatter"
import Form from "next/form"
import Image from "next/image"
import Link from "next/link"

const Pay = () => {
    const { items } = useCartStore()
    const total = items.reduce((accumulated, item) => accumulated + item.price * item.quantity, 0)

    return (
        <>
            <PageHeader title="Make Payment" />

            <section className="ed-checkout section-gap">
                <div className="container ed-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="ed-checkout__form-wrapper">
                                <Form action={processPayment} className="ed-checkout__form">
                                    <div className="row">
                                        <div className="col-lg-6 offset-lg-3 col-12 mg-top-40">
                                            <div className="ed-checkout__section ed-checkout__section--order">
                                                <h2 className="ed-checkout__section-title">My Vehicle(s)</h2>
                                                <div className="ed-checkout__summary">
                                                    {items && items.map((item, key) => (
                                                        <div className="ed-checkout__summary-item" key={key}>
                                                            <div className="ed-checkout__summary-item-name">
                                                                <Image src={`/assets/${item.photo}`} alt={item.name} width={50} height={30} />
                                                                <Link href={`/evs/${item.slug}`}>{item.name} <small className="bold text-primary">x</small> {item.quantity}</Link>
                                                            </div>
                                                            <span className="ed-checkout__summary-item-price">₦{formatNumber(item.price * item.quantity)}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="ed-cart__totals">
                                                    <div className="ed-cart__totals-row">
                                                        <span className="ed-cart__totals-label">Sub total</span>
                                                        <span className="ed-cart__totals-value subtotal-amount">₦{formatNumber(total)}</span>
                                                    </div>
                                                    <div className="ed-cart__totals-row">
                                                        <span className="ed-cart__totals-label">Tax</span>
                                                        <span className="ed-cart__totals-value">₦{ formatNumber(total * 0.075) }</span>
                                                    </div>
                                                    <div className="ed-cart__totals-row">
                                                        <span className="ed-cart__totals-label">Total</span>
                                                        <span className="ed-cart__totals-value total-amount">₦{ formatNumber(total + (total * 0.075)) }</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ed-payment-infos">
                                                <button type="submit" className="ed-btn">Continue to Payment<i className="fi fi-rr-money-bills"></i></button>
                                                <div className="mt-2">
                                                    <small className="text-mute">You will be redirected to <strong>Paystack</strong> payment gateway</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pay