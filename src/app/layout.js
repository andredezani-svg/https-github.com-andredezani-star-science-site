import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import BackToTop from "@/components/BackToTop";
import Analytics from "@/components/Analytics";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, PHONE, EMAIL, ADDRESS } from "@/lib/constants";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description: SITE_DESCRIPTION,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE,
        contactType: "sales",
        email: EMAIL,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.state,
        addressCountry: ADDRESS.country,
      },
    },
    {
      "@type": "WebSite",
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
}

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Private Label Health Care Manufacturing`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} - Private Label Health Care Manufacturing`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/api/og`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Private Label Health Care Manufacturing`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7C3AED",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.className}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:text-dark focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-violet">
          Skip to main content
        </a>
        <Analytics />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
        <BackToTop />
      </body>
    </html>
  );
}
