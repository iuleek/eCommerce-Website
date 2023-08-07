import Link from 'next/link'

export default function NavLink({ isLink, text, style, handleClick}) {
    return (
        <>
            {isLink && <Link href={`/${text.toLowerCase()}`} className={style}>{text}</Link>}
            {!isLink && <button className={style} onClick={() => handleClick(text)}>{text}</button>}
        </>
    )

}