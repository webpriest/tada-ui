import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className="ed-header__right">
        <nav className="ed-header__navigation">
            <ul className="ed-header__menu">
                <li className="#">
                    <Link href="/">Home</Link>
                </li>
                <li className="#">
                    <Link href="/evs">Vehicles</Link>
                </li>
                <li className="#">
                    <a href="#">Brands<i className="fi fi-ss-angle-small-down"></i></a>
                    <ul className="sub-menu">
                        <li><Link href="/brands">All</Link></li>
                        <li><a href="#">Tesla</a></li>
                        <li><a href="#">Toyota</a></li>
                        <li><a href="#">BYD</a></li>
                        <li><a href="#">Geely</a></li>
                        <li><a href="#">Zeekr</a></li>
                    </ul>
                </li>
                <li className="#">
                    <a href="/other-products">Other Products</a>
                </li>
                <li className="#">
                    <Link href="/about">About TADA</Link>
                </li>
                <li className="#">
                    <Link href="/contacts">Contact</Link>
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