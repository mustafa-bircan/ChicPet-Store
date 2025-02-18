import styles from './styles.module.css'
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react"


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
            <div className={styles.right}>
                <Link to="/signin">
                    <Button>Login</Button>
                </Link>

                <Link to="/signup">
                    <Button>Register</Button>
                </Link>

            </div>
        </nav>
    )
}

export default Navbar