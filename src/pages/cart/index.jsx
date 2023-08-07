import BottomBtn from "@/components/Cart/BottomBtn";
import Layout from "../../components/layout";
import HeroHeaderSmall from "@/components/HeroHeaderSmall";
import CartWrapper from "@/components/Cart";

export default function Cart() {
  return (
    <>
      <Layout>
        <HeroHeaderSmall />
        <CartWrapper />
        <BottomBtn  href="/checkout/personal-details"/>
      </Layout>
    </>
  );
}
