import { motion } from "framer-motion";
import { decode } from "html-entities";
import React from "react";

const Item = ({ handleCheck, handleSelect, option, selected, i }: ItemInterface) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => handleCheck(option)}
      disabled={!!selected}
      className={
        selected
          ? `${handleSelect(option)} my-2 flex w-full  transition-all text-left text-sm md:text-base  rounded-md py-2 px-3 cursor-pointer `
          : `my-2 flex w-full bg-slate-200 text-black text-left text-sm md:text-base transition-all  rounded-md py-2 px-3 cursor-pointer hover:shadow-md hover:shadow-2`
      }
    >
      {decode(option)}
    </motion.button>
  );
};
interface ItemInterface {
  handleCheck(value: string): void;
  handleSelect(value: string): void;
  option: string;
  selected: string;
  i: number;
}

export default Item;
