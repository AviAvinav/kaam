import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Component {...pageProps} />;
    </UserProvider>
  );
};

export default MyApp;
