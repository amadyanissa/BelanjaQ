import { Provider } from "react-redux";
import store from "../src/redux/store";
import { AppProps } from "next/app";
import "../styles/app.sass";
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
