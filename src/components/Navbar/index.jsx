import styles from './styles.module.css'
import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className="logo">
                    <Link to="/">ChicPet</Link>
                </div>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                </ul>
            </div>
            <div className="rigth">right</div>
        </nav>
    )
}

export default Navbar