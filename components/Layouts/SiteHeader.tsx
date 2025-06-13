"use client"

declare global {
    interface Window {
        bootstrap: any;
    }
}

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { routes } from '@/utils/routes'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useCartStore } from '@/store/cartStore'
import { useRouter } from "next/navigation"

const SiteHeader = () => {
    const pathname = usePathname()
    const router = useRouter()
    const navigations = routes
    const [isMenuOpen, setIsMenuOpen] = useState(true)

    const { items } = useCartStore()
    const cartCount = items.reduce((total, item) => total + item.quantity, 0)

    const closeMenu = () => {
        if (typeof window !== 'undefined') {
            const modal = document.getElementById('offcanvas-modal');
            if (modal) {
                // Bootstrap 5 modal API
                const bsModal = window.bootstrap?.Modal.getInstance(modal) || new window.bootstrap.Modal(modal);
                bsModal.hide();
            }
            // Remove modal-backdrop if it still exists
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop && backdrop.parentNode) {
                backdrop.parentNode.removeChild(backdrop);
            }
            // Remove modal-open class from body
            document.body.classList.remove('modal-open');
        }
        setIsMenuOpen(false);
    }

    const openMenu = () => {
        setIsMenuOpen(true);
    }

    return (
        <>
            {/* Mobile Navbar */}
            {isMenuOpen && (
            <div className="modal mobile-menu-modal offcanvas-modal fade" id="offcanvas-modal">
                <div className="modal-dialog offcanvas-dialog">
                    <div className="modal-content">
                        <div className="modal-header offcanvas-header">
                            <div className="ed-header__left--style2">
                                <div className="ed-header__left-widget--style2">
                                    <div className="ed-topbar__logo">
                                        <Link href="/">
                                            <Image 
                                                src="/assets/images/logo.svg" 
                                                alt="TADA"
                                                width={122} 
                                                height={70}
                                                style={{ width: "auto", height: "auto" }}
                                                priority
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="fi fi-ss-cross"></i>
                            </button>
                        </div>
                        
                        <div className="mobile-menu-modal-main-body">
                            <nav className="offcanvas__menu">
                                <ul className="offcanvas__menu_ul">
                                    {navigations && navigations.map((navigation, index) => (
                                        <li key={index} className="offcanvas__sub_menu_li">
                                            <Link className={clsx(navigation.path === pathname || (pathname.startsWith(navigation.path) && !navigation.path.endsWith('/')) ? 'offcanvas__menu_item active' : 'offcanvas__menu_item')} href={navigation.path} onClick={closeMenu}>{navigation.name}</Link>
                                            {navigation.children && navigation.children.length > 0 && (
                                                <ul className="offcanvas__sub_menu">
                                                    {navigation.children.map((child, childIndex) => (
                                                        <li key={childIndex} className="offcanvas__sub_menu_li">
                                                            <Link href={child.path} className="offcanvas__sub_menu_item" onClick={closeMenu}>{child.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            )}

            <header className="ed-header ed-header--style4 ed-header--style5">
                <div className="container ed-container-expand">
                    <div className="ed-header__inner">

                        <div className="ed-header__left--style2">
                            <div className="ed-header__left-widget--style2">
                                <div className="ed-topbar__logo">
                                    <Link href="/">
                                        <Image 
                                            src="/assets/images/logo.svg" 
                                            alt="TADA"
                                            width={122} 
                                            height={70}
                                            style={{ width: "auto", height: "auto" }}
                                            priority
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Main Navbar */}
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
                                <div className="ed-header__cart d-none d-lg-block">
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
                            <div className="mobile-header-actions d-lg-none d-flex align-items-center gap-3">
                                <div className="ed-header__cart">
                                    <button type="button" onClick={() => router.push('/cart')} className="ed-topbar__action-icon">
                                        <Image 
                                            src="/assets/images/icons/icon-grey-bag.svg" 
                                            alt="icon-grey-bag"
                                            width={21}
                                            height={21}
                                        />
                                        <span>{cartCount > 0 && cartCount || 0}</span>
                                    </button>
                                </div>
                                <button type="button" className="mobile-menu-offcanvas-toggler" data-bs-toggle="modal" data-bs-target="#offcanvas-modal" onClick={() => openMenu()}>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default SiteHeader