import HeroHeaderSmall from '@/components/HeroHeaderSmall';
import Layout from '../../components/Layout'
import SuccessPage from '@/components/SuccessPage';
export default function Checkout() {
    return (
      <>
        <Layout>
        <HeroHeaderSmall />
          <SuccessPage />
        </Layout>
      </>
    );
  }