"use client"

import Link from 'next/link'
import { routes } from '@/utils/routes'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

const MobileNav = () => {
    const pathname = usePathname()
    const navigations = routes
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <div className="mobile-menu-modal-main-body">
            <nav className="offcanvas__menu">
                <ul className="offcanvas__menu_ul">
                    {navigations && navigations.map((navigation, index) => (
                        <li key={index} className="offcanvas__sub_menu_li">
                            <Link className={clsx(navigation.path === pathname || (pathname.startsWith(navigation.path) && !navigation.path.endsWith('/')) ? 'offcanvas__menu_item active' : 'offcanvas__menu_item')} href={navigation.path} onClick={() => setIsOpen(false)}>{navigation.name}</Link>
                            {navigation.children && navigation.children.length > 0 && (
                                <ul className="offcanvas__sub_menu">
                                    {navigation.children.map((child, childIndex) => (
                                        <li key={childIndex} className="offcanvas__sub_menu_li">
                                            <Link href={child.path} className="offcanvas__sub_menu_item" onClick={() => setIsOpen(false)}>{child.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default MobileNav