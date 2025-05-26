import Image from 'next/image'

const Nav = () => {
  return (
    <div className="ed-header__right">
        <nav className="ed-header__navigation">
            <ul className="ed-header__menu">
                <li className="#">
                    <a href="#">Home</a>
                </li>
                <li className="#">
                    <a href="#">Vehicles</a>
                </li>
                <li className="#">
                    <a href="#">Brands<i className="fi fi-ss-angle-small-down"></i></a>
                    <ul className="sub-menu">
                        <li><a href="#">Tesla</a></li>
                        <li><a href="#">Toyota</a></li>
                        <li><a href="#">BYD</a></li>
                        <li><a href="#">Geely</a></li>
                        <li><a href="#">Zeekr</a></li>
                    </ul>
                </li>
                <li className="#">
                    <a href="#">Other Products</a>
                </li>
                <li className="#">
                    <a href="#">About TADA</a>
                </li>
                <li className="#">
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
        <div className="ed-header__action">
            <span className="header-divider">//</span>
            <div className="ed-header__cart">
                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#edSidebarCart" aria-controls="offcanvasRight" className="ed-topbar__action-icon">
                    <Image 
                        src="/assets/images/icons/icon-grey-bag.svg" 
                        alt="icon-grey-bag"
                        width={21}
                        height={21}
                    />
                    <span>0</span>
                </button>
            </div>
            <div className="ed-header__cart">
                <a href="#" className="ed-topbar__action-icon">
                    <Image 
                        src="/assets/images/icons/user.svg" 
                        alt="user"
                        width={21}
                        height={21}
                    />
                </a>
            </div>
            <div className="ed-header__menu">
                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#edSidebar" aria-controls="offcanvasRight">
                    <Image 
                        src="/assets/images/icons/icon-grey-menu-3-line.svg" 
                        alt="icon-grey-menu-3-line"
                        width={21}
                        height={21}
                    />
                </button>
            </div>
        </div>

        {/* Mobile Menu Button */}
        <button type="button" className="mobile-menu-offcanvas-toggler" data-bs-toggle="modal" data-bs-target="#offcanvas-modal">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </button>
    </div>
  )
}

export default Nav