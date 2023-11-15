import "@/styles/globals.css";
import { Navigation } from "../src/layouts/Navigation";
import { Footer } from "../src/layouts/Footer";
import { EPageType, getProps } from "../src/services/content/getProps";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageProps = await getProps({ pageType: EPageType.Index });

  return (
    <html lang="en">
      <body>
        <Navigation {...pageProps?.Navigation} />
        {children}
        <Footer {...pageProps?.Footer} />
      </body>
    </html>
  );
}

export const revalidate = 1;
export const fetchCache = "default-cache";
