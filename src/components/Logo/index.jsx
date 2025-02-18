import Image from 'next/image'
import Link from 'next/link'
import React from "react"
export default function Logo({source}) {
    return (
        <Link href="/">
            <Image
                src={source}
                width={145}
                height={30}
                alt="Logo"
            />
        </Link>
    )
}