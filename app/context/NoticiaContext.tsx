import { createContext, useState } from "react";

export const InfoContext = createContext({});

export default function InfoProvider({ children }: { children: any }) {
  const [notices, setNotices] = useState(() => {
    const noticeValid = localStorage.getItem("notices");
    if (!noticeValid) return [];
    const notices = JSON.parse(noticeValid);
    return notices;
  });

  const addNotice = (notice: any) => {
    setNotices((current: any) => {
      const updateNotice = [notice, ...current];
      localStorage.setItem("notices", JSON.stringify(updateNotice));
      return updateNotice;
    });
  };

  const deleteNotice = (title: any) => {
    setNotices((current: any) => {
      const updateNotice = current.filter(
        (notice: any) => notice.title !== title
      );
      localStorage.setItem("notices", JSON.stringify(updateNotice));
      return updateNotice;
    });
  };

  const valuesFuncs = {
    notices,
    addNotice,
    deleteNotice,
  };

  return (
    <>
      <InfoContext.Provider value={valuesFuncs}>
        {children}
      </InfoContext.Provider>
    </>
  );
}
