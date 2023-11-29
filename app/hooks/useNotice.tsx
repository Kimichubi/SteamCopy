import { useContext } from "react";
import { InfoContext } from "@/app/context/NoticiaContext";
export default function useNotice() {
  return useContext(InfoContext);
}
