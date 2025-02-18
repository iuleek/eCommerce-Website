import Styles from "./HeroHeaderSmall.module.css";
import Image from "next/image";
import Button from "../Button"
import Link from "next/link";
import React from "react"
export default function HeroHeaderSmall() {
  return (
    <section className={Styles.banner_small}>
      <div className="container">
        <div className={Styles.banner_inner}>
          <Link href="/product-listing">
            <Button
              style="btnRegular btnLight__gray"
              text="Continue shopping"
              iconSrc="/arrow-goto.svg"
              imgPosition="left"
            />
          </Link>
          <Image src="/bg-icon-2.svg" width={139} height={139} alt="hero-header"/>
        </div>
      </div>
    </section>
  );
}
