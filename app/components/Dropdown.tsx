import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
export default function DropDown() {
  const router = usePathname();
  return (
    <>
      <div className="flex mr-32">
        <div className="relative group">
          <div className="gap-4 flex ">
            <div className="group">
              <Link
                className={clsx(
                  "inline-flex items-center px-2 py-1 text-sm relative group",
                  {
                    "border-b-4 border-solid border-blue-700 text-teal-300 group-hover:border-teal-300":
                      router === "/",
                  }
                )}
                href="/">
                LOJA
              </Link>
              <div className="hidden group-hover:block absolute z-10 mt-0 w-56 origin-top-right rounded-md bg-neutral-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1" role="none">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li className="text-white block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Inicio
                    </li>
                    <li className="text-white block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Fila de descoberta
                    </li>
                    <li className="text-white block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Lista de desejos{" "}
                    </li>
                    <li className="text-white block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Loja de pontos
                    </li>
                    <li className="text-white block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Notícias
                    </li>
                    <li className="text-white block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Estatisticas
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="gap-4 flex ">
            <div className="group">
              <Link
                className={clsx(
                  "inline-flex items-center px-2 py-1 text-sm relative group",
                  {
                    "border-b-4 border-solid border-blue-700 text-teal-300 group-hover:border-teal-300":
                      router === "/Comunidade",
                  }
                )}
                href="/Comunidade">
                COMUNIDADE
              </Link>
              <div className="hidden group-hover:block absolute z-10 mt-0 w-56 origin-top-right rounded-md bg-neutral-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1" role="none">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li className="text-white block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Página Inicial
                    </li>
                    <li className="text-white block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Discussões
                    </li>
                    <li className="text-white block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Oficina
                    </li>
                    <li className="text-white block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Mercado
                    </li>
                    <li className="text-white block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Transmissões
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="gap-4 flex ">
            {" "}
            <div className="group">
              <Link
                className={clsx(
                  "inline-flex items-center px-2 py-1 text-sm relative group",
                  {
                    "border-b-4 border-solid border-blue-700 text-teal-300 group-hover:border-teal-300":
                      router === "/Sobre",
                  }
                )}
                href="/Sobre">
                SOBRE
              </Link>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="gap-4 flex ">
            <div className="group">
              <Link
                className={clsx(
                  "inline-flex items-center px-2 py-1 text-sm relative group",
                  {
                    "border-b-4 border-solid border-blue-700 text-teal-300 group-hover:border-teal-300":
                      router === "/Suporte",
                  }
                )}
                href="/Suporte">
                SUPORTE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
