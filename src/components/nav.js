import Link from 'next/link';
import Image from 'next/image';
import styles from './nav.module.css';

export default function Nav() {
    return (
        <div className={styles.navHeader}>
            <Image
                src='/logo.png'
                width={100}
                height={50}
                alt={'logo'}
            />
            <ul className={styles.nav}>
                <li className={styles.navLink}><Link href="/">Home</Link></li>
                <li className={styles.navLink}><Link href="/about">About</Link></li>
                <li className={styles.navLink}><Link href="/projects">Projects</Link></li>
                <li className={styles.navLink}><Link href="/post-list">Posts</Link></li>
            </ul>
        </div>
    )
}