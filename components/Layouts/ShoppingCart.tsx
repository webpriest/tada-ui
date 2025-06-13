"use client"

import { useCartStore } from "@/store/cartStore";
import { formatNumber } from "@/utils/fomatter";
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

const ShoppingCart = () => {
    const { items, removeWholeItem } = useCartStore()
    const total = items.reduce((accumulated, item) => accumulated + item.price * item.quantity, 0)
    const imgPath = process.env.NEXT_PUBLIC_STORAGE_URL
    const router = useRouter()

    const handleConfirmPick = () => {
        const offcanvas = document.getElementById('edSidebarCart')
        if (offcanvas) {
            const bsOffcanvas = (window as any).bootstrap?.Offcanvas.getInstance(offcanvas)
            if (bsOffcanvas) {
                bsOffcanvas.hide()
                // Wait for the modal to close before navigating
                setTimeout(() => {
                    router.push('/cart')
                }, 300)
            }
        }
    }

    return (
        <div className="offcanvas offcanvas-end ed-sidebar ed-sidebar-cart" id="edSidebarCart" aria-labelledby="offcanvasRightLabel">
            <div className="ed-sidebar-header">
                <h3 className="ed-sidebar-header-title">Vehicles in cart</h3>
                <button type="button" className="text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                    <i className="fi fi-rr-cross"></i>
                </button>
            </div>

            <div className="ed-sidebar-body">
                {items.map((item, index) => (
                    <div className="ed-sidebar-cart-item" key={index}>
                        <div className="ed-sidebar-cart-main">
                            <div className="ed-sidebar-cart-img">
                                <Image 
                                    src={`${imgPath}/${item.photo}`} 
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="ed-sidebar-cart-info">
                                <span>{item.quantity} x <strong>₦{ formatNumber(item.quantity * item.price) }</strong></span>
                                <Link href={`/evs/${item.slug}`}>{item.name}</Link>
                            </div>
                        </div>
                        <div className="ed-sidebar-cart-remove">
                            <button type="button" onClick={() => removeWholeItem(item.id)}><i className="fi-rr-cross"></i></button>
                        </div>
                    </div>
                ))}                
            </div>

            <div className="ed-sidebar-footer">
                <div className="ed-sidebar-cart-subtotal">
                    <p>Sub Total: <span>₦{ formatNumber(total) }</span></p>
                    <button onClick={handleConfirmPick} className="ed-sidebar-cart-btn">Confirm Your Pick</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart