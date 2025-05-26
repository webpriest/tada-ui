import React from 'react'

const MobileNav = () => {
  return (
    <div className="mobile-menu-modal-main-body">
        <nav className="offcanvas__menu">
            <ul className="offcanvas__menu_ul">
                <li className="offcanvas__menu_li">
                    <a className="offcanvas__menu_item" href="#">Home</a>
                </li>

                <li className="offcanvas__menu_li">
                    <a className="offcanvas__menu_item" href="#">Vehicles</a>
                </li>

                <li className="offcanvas__menu_li">
                    <a className="offcanvas__menu_item" href="#">Brands</a>
                    <ul className="offcanvas__sub_menu">
                        <li className="offcanvas__sub_menu_li">
                            <a href="#" className="offcanvas__sub_menu_item">Tesla</a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                            <a href="#" className="offcanvas__sub_menu_item">Toyota</a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                            <a href="#" className="offcanvas__sub_menu_item">BYD</a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                            <a href="#" className="offcanvas__sub_menu_item">Geely</a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                            <a href="#" className="offcanvas__sub_menu_item">Zeekr</a>
                        </li>
                    </ul>
                </li>

                <li className="offcanvas__menu_li">
                    <a className="offcanvas__menu_item" href="#">Other Products</a>
                </li>

                <li className="offcanvas__menu_li">
                    <a className="offcanvas__menu_item" href="#">About TADA</a>
                </li>

                <li className="offcanvas__menu_li">
                    <a className="offcanvas__menu_item" href="#">Contacts</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default MobileNav