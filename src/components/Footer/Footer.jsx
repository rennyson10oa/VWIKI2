import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <ul className={styles.navList}>
            <footer className={styles.footer}>
                Version 1.13 made by a fan who is not a Riot developer © | Instagram: @spaghettisemmolho
            </footer>
        </ul>
    )
}

export default Footer;