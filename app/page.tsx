"use client";
import Link from "next/link";
import ContentCarousel from "./components/ContentCarousel";
import NavLeft from "./components/NavLeft";
import NavTop from "./components/NavTop";
import useUser from "./hooks/useUser";

export default function Home() {
  //@ts-ignore
  const { usuario } = useUser();

  return (
    <div className="bg-div mx-auto w-full px-4 min-h-screen relative p-4 block">
      <div className="flex justify-center ">
        <NavLeft />
        <div className="grid-items ml-4">
          <div>
            <NavTop />
          </div>
          <div className="flex justify-center m-4">
            <ContentCarousel />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">
              {" "}
              Por favor Faça Login primeiro!
            </h1>
            <h1 className="text-2xl font-bold mb-4">
              {" "}
              Olá {usuario.name} deseja cadastrar algum jogo?{" "}
            </h1>
            <Link href="/cadastroGame">Ir para NOVO JOGO!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
