import type { JSX } from "react";
import styles from "../styles/Header.module.css"

const Header = (): JSX.Element => {
    return <header className={styles.Header}>
        <h1 className={styles.Heading}>AR Salon and Day Spa</h1>
    </header>
}

export default Header