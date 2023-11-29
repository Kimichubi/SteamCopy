import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export default function Provider({ children }: { children: React.ReactNode }) {
  const defaultUser = { name: "", password: "" };
  const [usuario, setUsuario] = useState(defaultUser);

  const addUser = (user: any) => {
    //@ts-ignore
    setUsuario((currentUser) => {
      const updateUser = user;

      return (currentUser = updateUser);
    });
  };

  const funcs = {
    addUser,
    usuario,
  };

  return <UserContext.Provider value={funcs}>{children}</UserContext.Provider>;
}
