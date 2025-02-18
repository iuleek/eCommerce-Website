import HeroHeaderSmall from '@/components/HeroHeaderSmall';
import Layout from '../../components/Layout'
import DeliveryMethod from '@/components/DeliveryMethod';
import React from "react"

export default function Checkout() {
    return (
      <>
        <Layout>
        <HeroHeaderSmall />
          <DeliveryMethod />
        </Layout>
      </>
    );
  }