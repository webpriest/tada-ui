"use client"

import { createOrder } from "@/app/checkout/actions"
import { getStates } from "@/server/states/getStates"
import { useCartStore } from "@/store/cartStore"
import { formatNumber } from "@/utils/fomatter"
import Form from "next/form"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface NgState {
    id: number
    statename: string
}

const CartCheckout = () => {
    const [states, setStates] = useState<NgState[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const { items } = useCartStore()
    const total = items.reduce((accumulated, item) => accumulated + item.price * item.quantity, 0)
    
    useEffect(() => {
        setLoading(true)
        const allStates = async () => {
            const states = await getStates()
            setStates(states)
            setLoading(false)
        }

        allStates()
    }, [])

    if(total === 0 || items.length === 0) {
        return (
            <div className="container ed-container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-12">
                        <p className="alert alert-warning">Loading, please wait</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="ed-checkout section-gap">
            <div className="container ed-container">
                <div className="row">
                    <div className="col-12">
                        <div className="ed-checkout__form-wrapper">
                            <Form action={createOrder} className="ed-checkout__form">
                                <div className="row">
                                    <div className="col-lg-8 col-12 mg-top-40">
                                        <div className="ed-checkout__section">
                                            <h2 className="ed-checkout__section-title">
                                                Billing Information
                                            </h2>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="ed-checkout__form-group">
                                                        <label className="ed-checkout__label">First name *</label>
                                                        <input className="ed-checkout__input" type="text" name="firstname" placeholder="First name" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="ed-checkout__form-group">
                                                        <label className="ed-checkout__label">Last name *</label>
                                                        <input className="ed-checkout__input" type="text" name="lastname" placeholder="Last name" required />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="ed-checkout__form-group">
                                                        <label className="ed-checkout__label">Company name (optional)</label>
                                                        <input className="ed-checkout__input" type="text" name="company" placeholder="Company name" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="ed-checkout__form-group">
                                                        <label className="ed-checkout__label">Country *</label>
                                                        <select name="countryId" className="ed-checkout__select">
                                                            <option value="162">Nigeria</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="ed-checkout__form-group">
                                                        <label className="ed-checkout__label">State *</label>
                                                        <select name="stateId" className="ed-checkout__select">
                                                            <option data-display="Select Country">
                                                                Select State
                                                            </option>
                                                            {states && states.map((state: any) => <option value={state.id} key={state.id}>{state.statename}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="ed-checkout__form-group">
                                                        <label className="ed-checkout__label">Address *</label>
                                                        <input className="ed-checkout__input" type="text" name="address" placeholder="Home/office address" required />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="ed-checkout__form-group">
                                                        <label className="ed-checkout__label"> City</label>
                                                        <input className="ed-checkout__input" type="text" name="city" placeholder="Town / City" required />
                                                    </div>
                                                </div>
                                                
                                                <div className="col-12">
                                                    <div className="ed-checkout__form-group">
                                                        <label className="ed-checkout__label">Phone *</label>
                                                        <input className="ed-checkout__input" type="text" name="phone" placeholder="Phone" maxLength={11} required />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="ed-checkout__form-group">
                                                        <label className="ed-checkout__label">Email address *</label>
                                                        <input className="ed-checkout__input" type="email" name="email" placeholder="Email Address" required />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="ed-checkout__form-group">
                                                        <label className="ed-checkout__label">Password *</label>
                                                        <input className="ed-checkout__input" type="password" name="password" placeholder="Create a password" required />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="ed-checkout__form-group">
                                                        <label className="ed-checkout__label">Confirm Password *</label>
                                                        <input className="ed-checkout__input" type="password" name="passwordConfirmation" placeholder="Repeat password" required />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="ed-checkout__form-group">
                                                        <label className="ed-checkout__label">Order notes (optional)</label>
                                                        <textarea className="ed-checkout__input" name="orderNote" placeholder="Notes about your order, e.g. special notes for delivery." required></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12 mg-top-40">
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
    )
}

export default CartCheckout