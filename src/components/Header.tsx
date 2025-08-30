'use client';

import { usePathname } from 'next/navigation';
import logo from '../assets/logo.png';

export default function Header() {
    const pathname = usePathname();
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/contact', label: 'Contact' },
        { href: '/join-us', label: 'Join Us' },
    ];

    return (
        <header className="bg-black flex flex-col items-center p-4 text-white">
            <img src={logo.src} alt="Logo" className="h-48 w-48 object-contain mb-4" />
            <ul className="flex gap-8 list-none text-lg">
                {navLinks.map(link => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            className={`hover:underline ${
                                pathname === link.href
                                    ? 'underline underline-offset-2 decoration-2 decoration-white'
                                    : ''
                            }`}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
}
