import  { useContext } from "react";
import { Store } from "../StateManagement/store/store";

export const useStore = () => {
  return useContext(Store);
};