import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Head>
        <title>Gakusai</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          fontFamily: "Verdana, sans-serif",
          headings: { fontFamily: "Greycliff CF, sans-serif" },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </RecoilRoot>
  );
};

export default App;
