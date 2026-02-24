"use client"

import "./globals.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navigation from "@/app/modules/Navigation";
import Script from "next/script";
import Footer from "./modules/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <div className="container-fluid">
          <div className="row">
            <Navigation />
          </div>
          {children}
          <div className='row justify-content-center mt-5'>
            <Footer />           
          </div>
        </div>
      </body>
    </html>
  );
}
