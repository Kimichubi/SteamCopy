import { createContext, useState } from "react";

export const UserContext = createContext({});

export default function Provider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState({ name: "", password: "" });

  const addUser = (user: any) => {
    setUsuario((currentUser) => {
      const updateUser = user;

      return (currentUser = updateUser);
    });
  };
  const funcs = {
    addUser,
    usuario,
  };

  return (
    <>
      <UserContext.Provider value={funcs}>{children}</UserContext.Provider>
    </>
  );
}
