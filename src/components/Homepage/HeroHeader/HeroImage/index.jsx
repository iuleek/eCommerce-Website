import Image from 'next/image'

export default function HeroImage({source,sizeH,sizeW}) {
    return (
        <Image src={source} width={sizeW} height={sizeH} alt="hero image"/>
    )
}