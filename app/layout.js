import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.sakshiayurveda.com"),

  title: "Sakshi Ayurveda & Panchkarma Centre | Bodhgaya",

  description:
    "Sakshi Ayurveda & Panchkarma Centre in Bodhgaya offers personalised Ayurvedic consultation, Panchkarma therapies, Ayurvedic treatments and wellness care.",

  keywords: [
    "Sakshi Ayurveda",
    "Ayurveda Bodhgaya",
    "Panchkarma Bodhgaya",
    "Ayurvedic treatment Bodhgaya",
    "Kerala Panchkarma",
    "Ayurveda clinic Bodhgaya",
  ],

  authors: [
    {
      name: "Sakshi Ayurveda & Panchkarma Centre",
    },
  ],

  openGraph: {
    title: "Sakshi Ayurveda & Panchkarma Centre | Bodhgaya",
    description:
      "Personalised Ayurvedic consultation, Panchkarma therapies and traditional Ayurvedic wellness care in Bodhgaya.",
    url: "https://www.sakshiayurveda.com",
    siteName: "Sakshi Ayurveda & Panchkarma Centre",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/details.png",
        width: 1200,
        height: 630,
        alt: "Sakshi Ayurveda & Panchkarma Centre",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sakshi Ayurveda & Panchkarma Centre | Bodhgaya",
    description:
      "Personalised Ayurvedic consultation, Panchkarma therapies and traditional Ayurvedic wellness care in Bodhgaya.",
    images: ["/details.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
