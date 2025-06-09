"use client"

import { useCartStore } from '@/store/cartStore'
import { formatNumber } from '@/utils/fomatter'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const AddToCart = ({ev}: {ev: any}) => {
    const router = useRouter()

    const { items, addItem, removeItem, clearCart } = useCartStore()
    const cartItem = items.find((item) => item.id === ev.id)
    const quantity = cartItem ? cartItem.quantity : 0

    const [qty, setQty] = useState(1);

    const handleIncrease = () => {
        setQty(qty + 1)
    }
    const handleDecrease = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    const onAddItem = () => {
        addItem({
            id: ev.id,
            name: ev.name,
            slug: ev.slug,
            category: ev.category.name,
            brand: ev.brand.name,
            price: ev.basePrice,
            photo: ev.photo,
            quantity: qty
        })

        router.push('/cart')
    }

    return (
        <>
            <div className="ed-product__details-meta">
                <div className="ed-product__d-meta-single">
                    <p>Price:</p>
                    <span className="bold-price">₦{ formatNumber(ev.basePrice) }</span>
                </div>
                
                <div className="ed-product__d-meta-single">
                    <p>Brand:</p>
                    <span>{ev.brand.name}</span>
                </div>
                
                <div className="ed-product__d-meta-single">
                    <p>Category:</p>
                    <span><a href="#">{ev.category.name}</a></span>
                </div>
            </div>
            <div className="ed-shop-single__purchase">
                <form action="#">
                    <div className="ed-cart__quantity-selector mb-2">
                        <button type="button" className="ed-cart__quantity-decrease" onClick={() => handleDecrease()}>
                            <i className="fi-rr-minus"></i>
                        </button>
                        <span className="ed-cart__quantity-input">{qty}</span>
                        <button type="button" className="ed-cart__quantity-increase" onClick={() => handleIncrease()}>
                            <i className="fi-rr-plus"></i>
                        </button>
                    </div>
                    <button type="button" className="ed-btn" onClick={onAddItem}>Proceed to Payment <i className="fi fi-rr-shopping-cart"></i></button>
                </form>
            </div>
        </>
    )
}

export default AddToCart