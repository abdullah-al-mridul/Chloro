import "./globals.css";
import { Cormorant, Montserrat } from "next/font/google";
export const metadata = {
  title: "Home - Chloro",
};

const cormorant = Cormorant({
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cormorant",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
