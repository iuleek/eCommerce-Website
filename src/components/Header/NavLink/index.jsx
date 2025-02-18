import Link from 'next/link'
import React from "react"
export default function NavLink({ isLink, text, style, handleClick, redirect}) {
    return (
        <>
            {isLink && <Link href={redirect} className={style}>{text}</Link>}
            {!isLink && <button className={style} onClick={() => handleClick(text)}>{text}</button>}
        </>
    )

}