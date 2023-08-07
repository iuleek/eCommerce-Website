import HeroHeaderSmall from '@/components/HeroHeaderSmall';
import Layout from '../../components/Layout'
import PaymentMethod from '@/components/PaymentMethod';
export default function Checkout() {
    return (
      <>
        <Layout>
        <HeroHeaderSmall />
          <PaymentMethod />
        </Layout>
      </>
    );
  }