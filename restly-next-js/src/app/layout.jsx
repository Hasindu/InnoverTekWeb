import ReduxProvider from "@/components/provider";
import "./globals.scss";

export const metadata = {
  title: "Restly - IT Solutions & Technology Next js Template",
};

import { Nunito, Rubik } from "next/font/google";

// Load Nunito
const nunito = Nunito({
  weight: ["700", "800"],
  subsets: ["latin"],
  display: "swap",
});

// Load Rubik
const rubik = Rubik({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${rubik.className}`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
