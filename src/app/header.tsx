"use client";

import { useState, useEffect } from 'react';
import styles from "@/styles/header.module.css";
import Link from 'next/link';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false); // State to track if the component has mounted

    useEffect(() => {
        // This ensures the component only renders the side menu on the client side
        setMounted(true);
    }, []);

    const toggleSideMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    if (!mounted) {
        return null; // Avoid rendering the component on the server side
    }

    return (
        <div>
            <nav className={styles.navbar}>
                <div
                    className={styles.hamburger}
                    onClick={toggleSideMenu}
                    aria-label="Toggle navigation menu"
                >
                    &#9776;
                </div>
                <div
                    className={`${styles.sideMenu} ${isMenuOpen ? styles.active : ''}`}
                >
                    <div
                        className={styles.cut}
                        onClick={toggleSideMenu}
                        aria-label="Close side menu"
                    >
                        &times;
                    </div>
                    <ul>
                        <li><Link onClick={toggleSideMenu} href='/'>Home</Link></li>
                        <li><Link onClick={toggleSideMenu} href='/about'>About</Link></li>
                        <li><Link onClick={toggleSideMenu} href='/Arrival'>New Arrival</Link></li>
                        <li><Link onClick={toggleSideMenu} href='/Contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className={styles.name}>
                    Lama
                </div>
                <ul className={styles.navigation}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/Arrival">New Arrival</Link></li>
                    <li><Link href="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
