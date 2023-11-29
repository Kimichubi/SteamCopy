import { createContext, useState, useEffect } from "react";

export const InfoContext = createContext({});

export default function InfoProvider({ children }: { children: any }) {
  const [notices, setNotices] = useState([]);

  const addNotice = (notice: any) => {
    //@ts-ignore
    setNotices((current: any) => {
      const updateNotice = [notice, ...current];
      return updateNotice;
    });
  };

  const deleteNotice = (title: any) => {
    setNotices((current: any) => {
      const updateNotice = current.filter(
        (notice: any) => notice.title !== title
      );

      return updateNotice;
    });
  };

  const valuesFuncs = {
    notices,
    addNotice,
    deleteNotice,
  };

  return (
    <InfoContext.Provider value={valuesFuncs}>{children}</InfoContext.Provider>
  );
}
