"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import DropDown from "./components/Dropdown";
import Provider from "./context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <header className="flex justify-center items-center gap-4">
          <div className="mr-9">
            <Image
              src="/logo_steam.svg"
              width={190}
              height={150}
              alt="Picture of the author"
            />
          </div>
          <DropDown />
          <div>Instalar o Steam</div>
          <div>
            <Link href="/Login">Iniciar sessão</Link>
          </div>
          <div>
            <span>Idioma</span>
          </div>
        </header>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
