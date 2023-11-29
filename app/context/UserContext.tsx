import { createContext, useState } from "react";

export const UserContext = createContext({});

export default function Provider({ children }: { children: React.ReactNode }) {
  const defaultUser = { name: "", password: "" };
  const [usuario, setUsuario] = useState(() => {
    const validUser = localStorage.getItem("user");
    if (!validUser) return defaultUser;
    else {
      return JSON.parse(validUser);
    }
  });

  const addUser = (user: any) => {
    //@ts-ignore
    setUsuario((currentUser) => {
      const updateUser = user;
      localStorage.setItem("user", JSON.stringify(updateUser));

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
