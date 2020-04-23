import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>

      <main>{children}</main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 18px;
        }

        * {
          box-sizing: border-box;
        }

        a {
          text-decoration: none;
          color: #1565c0;
        }

        nav {
          background: #c8e6c9;
          padding: 0.5rem;
        }

        main {
          padding: 0.5rem;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          padding: 0;
          margin: 0;
        }

        .huge {
          padding: 3rem;
          font-size: 3rem;
        }
      `}</style>
    </div>
  );
}
