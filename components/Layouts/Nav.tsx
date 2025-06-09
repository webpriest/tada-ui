"use client"

import Image from 'next/image'
import Link from 'next/link'
import { routes } from '@/utils/routes'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useCartStore } from '@/store/cartStore'

const Nav = () => {
    const pathname = usePathname()
    const navigations = routes

    const { items } = useCartStore()
    const cartCount = items.reduce((total, item) => total + item.quantity, 0)

    return (
        <div className="ed-header__right">
            <nav className="ed-header__navigation">
                <ul className="ed-header__menu">
                    {navigations && navigations.map((navigation, index) => (
                        <li key={index} className={clsx({ 'active': navigation.path === pathname || (pathname.startsWith(navigation.path) && !navigation.path.endsWith('/')) })}>
                            <Link href={navigation.path}>{navigation.name} {navigation.children && navigation.children.length > 0 ? <i className="fi fi-ss-angle-small-down"></i> : ''}</Link>
                            {navigation.children && navigation.children.length > 0 && (
                                <ul className="sub-menu">
                                    {navigation.children.map((child, childIndex) => (
                                        <li key={childIndex}>
                                            <Link href={child.path}>{child.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
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
                        <span>{cartCount > 0 && cartCount || 0}</span>
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