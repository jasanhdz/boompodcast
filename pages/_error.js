import Layout from "../components/Layout";
import Link from "next/link";
import errorStyles from "../components/styles/_error";

const Error = props => {
  return (
    <Layout title="Oh no :(">
      {errorStyles}
      {props.statusCode === 404 ? (
        <div className="message">
          <h1>Está página no existe</h1>
          <p>
            <Link href="/">
              <a>Volver a la home</a>
            </Link>
          </p>
        </div>
      ) : (
        <div className="message">
          <h1>Hubo un problema :(</h1>
          <p>Intenta nuevamente en unos segundos</p>
        </div>
      )}
    </Layout>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default Error;
