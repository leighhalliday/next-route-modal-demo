import { useRouter } from "next/router";
import Link from "next/link";
import Modal from "react-modal";
import Layout from "../components/layout";
import Rates from "../components/rates";

Modal.setAppElement("#__next");

const currencies = ["CAD", "USD", "GBP", "MXN", "AUD", "EUR", "NOK"];

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <ul>
        {currencies.map((currency) => (
          <li key={currency} className="huge">
            <Link
              href={`/?currencyCode=${currency}`}
              as={`/currency/${currency}`}
            >
              <a>{currency}</a>
            </Link>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={!!router.query.currencyCode}
        onRequestClose={() => router.push("/")}
      >
        <Rates currencyCode={router.query.currencyCode} />
      </Modal>
    </Layout>
  );
}
