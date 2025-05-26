import Image from "next/image"

const ShoppingCart = () => {
  return (
    <div className="offcanvas offcanvas-end ed-sidebar ed-sidebar-cart" id="edSidebarCart" aria-labelledby="offcanvasRightLabel">
        <div className="ed-sidebar-header">
            <h3 className="ed-sidebar-header-title">Vehicles in cart</h3>
            <button type="button" className="text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="fi fi-rr-cross"></i>
            </button>
        </div>

        {/* @if($cart_items->count() > 0) */}
        <div className="ed-sidebar-body">
            {/* @foreach($cart_items as $cart_item) */}
            <div className="ed-sidebar-cart-item">
                <div className="ed-sidebar-cart-main">
                    <div className="ed-sidebar-cart-img">
                        <Image 
                            src="/assets/images/vehicles/yC9dZZEA0rtxEbdsUXTPh7OotamJrapT1vPJEW2i.webp" 
                            alt="cart-1"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="ed-sidebar-cart-info">
                        <span>1 x <strong>₦0</strong></span>
                        <a href="#">Product name</a>
                    </div>
                </div>
                <div className="ed-sidebar-cart-remove">
                    <button type="button"><i className="fi-rr-cross"></i></button>
                </div>
            </div>
            {/* @endforeach */}
        </div>
        {/* @endif */}

        <div className="ed-sidebar-footer">
            <div className="ed-sidebar-cart-subtotal">
                <p>Subtotal:<span> ₦0</span></p>
                <a href="#" className="ed-sidebar-cart-btn">Go to cart</a>
                <a href="#" className="ed-sidebar-cart-btn">Checkout</a>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCart