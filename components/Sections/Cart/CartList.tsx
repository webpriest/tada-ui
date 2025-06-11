"use client"

import { useCartStore } from "@/store/cartStore"
import { formatNumber } from "@/utils/fomatter"
import Image from "next/image"
import Link from "next/link"

const CartList = () => {
    const { items, addItem, removeItem, removeWholeItem, clearCart } = useCartStore()
    const total = items.reduce((accumulated, item) => accumulated + item.price * item.quantity, 0)

    if(total === 0 || items.length === 0) {
        return (
            <div className="container ed-container">
                <div className="row">
                    <div className="col-12">
                        <div className="ed-section-head d-flex justify-content-center align-items-center">
                            <div className="ed-section-head__info text-center">
                                <span className="ed-section-head__sm-title">Cart</span>
                                <h3 className="ed-section-head__title m-0 ed-split-text left">
                                    Your cart is empty
                                </h3>
                                <div className="ed-cart__checkout-button">
                                    <Link href="/evs" className="ed-btn"> Add Vehicle(s)<i className="fi fi-rr-arrow-small-right"></i> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="ed-cart section-gap">
            <div className="container ed-container">
                <div className="row">
                    <div className="col-12">
                        <div className="ed-cart__table-wrapper table-responsive">
                            <table className="ed-cart__table">
                                <thead className="ed-cart__header">
                                    <tr className="ed-cart__header-row">
                                        <th className="ed-cart__header-item">Product</th>
                                        <th className="ed-cart__header-item">Price</th>
                                        <th className="ed-cart__header-item">Quantity</th>
                                        <th className="ed-cart__header-item">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody className="ed-cart__body">
                                    {items && items.map((item, key) => (
                                        <tr className="ed-cart__item" key={key}>
                                            <td className="ed-cart__product">
                                                <button className="ed-cart__remove-button" onClick={() => removeWholeItem(item.id)}>
                                                    <i className="fi-rr-cross"></i>
                                                </button>
                                                <Image className="ed-cart__product-image" src={`/assets/${item.photo}`} alt={item.name} width={100} height={84} />
                                                <Link href={`/evs/${item.slug}`} className="ed-cart__product-name" style={{minWidth: "250px"}}>{item.name}</Link>
                                            </td>
                                            <td className="ed-cart__price">₦{ formatNumber(item.price) }</td>
                                            <td className="ed-cart__quantity">
                                                <div className="ed-cart__quantity-selector">
                                                    <button className="ed-cart__quantity-decrease" onClick={() => removeItem(item.id)}>
                                                        <i className="fi-rr-minus"></i>
                                                    </button>
                                                    <span className="ed-cart__quantity-input">{item.quantity}</span>
                                                    <button className="ed-cart__quantity-increase" onClick={() => addItem({...item, quantity: 1})}>
                                                        <i className="fi-rr-plus"></i>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="ed-cart__subtotal">₦{ formatNumber(item.quantity * item.price) }</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Clear Cart  */}
                        <div className="ed-cart__bottom">
                            <div className="ed-cart__actions">
                                <button type="button" className="ed-cart__update-button ed-btn" onClick={() => clearCart()}>Clear List<i className="fi fi-rr-list-timeline"></i></button>
                                <Link href="/evs" className="ed-btn">Add More Vehicles<i className="fi fi-rr-add"></i></Link>
                            </div>
                        </div>

                        {/* Cart Summary */}
                        <div className="ed-cart__summary">
                            <div className="ed-cart__summary-inside">
                                <div className="ed-cart__summary-body">
                                    <div className="ed-cart__heading">
                                        <h4 className="ed-cart__heading-title">Totals for Payment</h4>
                                    </div>
                                    <div className="ed-cart__totals">
                                        <div className="ed-cart__totals-row">
                                            <span className="ed-cart__totals-label">Subtotal</span>
                                            <span className="ed-cart__totals-value subtotal">₦{ formatNumber(total) }</span>
                                        </div>
                                        <div className="ed-cart__totals-row">
                                            <span className="ed-cart__totals-label">Tax <em>(7.5%)</em></span>
                                            <span className="ed-cart__totals-value">₦{ formatNumber(total * 0.075) }</span>
                                        </div>
                                        <div className="ed-cart__totals-row">
                                            <span className="ed-cart__totals-label total-amount-label">Total</span>
                                            <span className="ed-cart__totals-value total-amount-price">₦{ formatNumber(total + (total * 0.075)) }</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="ed-cart__checkout-button">
                                    <Link href="/checkout" className="ed-btn"> Proceed to Payment <i className="fi fi-rr-money-bills"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartList