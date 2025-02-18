import HeroHeaderSmall from '@/components/HeroHeaderSmall';
import Layout from '../../components/Layout'
import CheckoutSignIn from '@/components/CheckoutSignIn';
import React from "react"

export default function Checkout() {
  return (
    <>
      <Layout>
        <HeroHeaderSmall />
        <CheckoutSignIn />
      </Layout>
    </>
  );
}