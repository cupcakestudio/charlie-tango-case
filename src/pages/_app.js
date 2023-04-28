import "@/styles/globals.css";
import { Header } from "@/components/Header/Header";
//import the context and provider so that the app and rest of subpages know about the context.
import { FormsProvider } from "@/contexts/FormContext";
export default function App({ Component, pageProps }) {
  return (
    <FormsProvider>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </FormsProvider>
  );
}
