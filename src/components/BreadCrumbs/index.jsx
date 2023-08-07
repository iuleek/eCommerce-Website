import styles from './BreadCrumbs.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function BreadCrumbs() {
    const router = useRouter();
    const { pathname } = router;
    const pathSegments = pathname.split('/').filter((segment) => segment !== '');

    function getTag(segment) {
        let tagTitle = segment.replaceAll("-", " ");
        return tagTitle;
    }

    return (
        <div className={styles.breadCrumbsWrapper}>
            <div className='container'>
                <div className={styles.breadCrumbs}>
                    <Link className={styles.breadCrumbs__link} href="/">Home</Link>
                    {pathSegments.map((segment, index) => (
                            <Link key={index} href={`/${pathSegments.slice(0, index + 1).join('/')}`} className={styles.breadCrumbs__link}>{getTag(segment)}</Link>
                    ))}
                </div>
            </div>
        </div>
    );
}