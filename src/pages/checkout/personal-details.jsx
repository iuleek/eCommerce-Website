import HeroHeaderSmall from '@/components/HeroHeaderSmall';
import Layout from '../../components/Layout'
import CheckoutSignIn from '@/components/CheckoutSignIn';

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