"use client";

import { useState } from "react";
import useUser from "../hooks/useUser";
import { User } from "../entities/User";

export default function Login() {
  const defaultUser = {
    name: "",
    password: "",
  };
  const [user, setUser] = useState(defaultUser);
  //@ts-ignore
  const { addUser } = useUser();
  const handleChange = (ev: any) => {
    // Atualize o estado com o campo correspondente
    setUser((currentState) => {
      return {
        ...currentState,
        [ev.target.name]: ev.target.value,
      };
    });
  };
  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    try {
      const validUser = new User(user.name, user.password);
      // Salve o usuário

      addUser(validUser);
      alert(`Usuario ${validUser.name} cadastrado`);
      // Limpe os campos após o envio do formulário
      setUser({ name: "", password: "" });
    } catch (err) {
      console.log(err);
    } finally {
      console.log("buceta!");
    }

    // Espera um curto período antes de exibir o alerta para garantir que os dados foram limpos
  };
  return (
    <>
      <div className="min-h-screen relative p-4 block">
        {/* Imagem de fundo desfocada */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover blur-sm"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bfe620f5-34c8-4c54-81ab-9fa4e1eecffb/df6pceu-a74c108b-3f1a-46b7-be43-045e300d11cf.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JmZTYyMGY1LTM0YzgtNGM1NC04MWFiLTlmYTRlMWVlY2ZmYlwvZGY2cGNldS1hNzRjMTA4Yi0zZjFhLTQ2YjctYmU0My0wNDVlMzAwZDExY2YuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iVe-XYPF0Q4Sfii0X8aU9DTYPLHdAsYrD7x6RsiIYlQ"
          alt=""
        />

        {/* Conteúdo sobreposto */}
        <div className="min-h-screen flex flex-row items-center justify-center relative z-10 0">
          <div className="grid justify-center text-white  ">
            <h1 className="text-4xl font-bold mb-4 ">Iniciar Sessão</h1>
            <div className="div-to-grade block bg-zinc-900 rounded-xl flex flex-row">
              <div className="block ">
                <form onSubmit={handleSubmit} className="">
                  <label htmlFor="username" className="text-cyan-300">
                    INICIAR SESSÃO COM O NOME DE USUÁRIO
                  </label>
                  <input
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    id="username"
                  />
                  <label htmlFor="password">SENHA</label>
                  <input
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="password"
                    id="password"
                  />
                  <button type="submit" className="">
                    Iniciar sessão
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
