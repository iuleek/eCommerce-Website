import HeroHeaderSmall from '@/components/HeroHeaderSmall';
import Layout from '../../components/Layout'
import DeliveryMethod from '@/components/DeliveryMethod';
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