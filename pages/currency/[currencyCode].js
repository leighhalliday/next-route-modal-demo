import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Rates from "../../components/rates";

export default function CurrencyPage() {
  const router = useRouter();
  const { currencyCode } = router.query;

  return (
    <Layout>
      <Rates currencyCode={currencyCode} />
    </Layout>
  );
}
