import React, { ChangeEvent, Dispatch, useState } from "react";

const Select = (props: InterfaceSelect) => {

  return (
    <>
      <label htmlFor="country" className="block text-xs md:text-sm font-medium text-white">
        {props.labelText}
      </label>
      <select
        id={props.name}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange} 
        className="mt-1 block w-full text-sm md:text-base rounded-md border text-black capitalize border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-orange focus:outline-none focus:ring-orange sm:text-sm"
      >
        <option value={0} disabled >{props.placeholder}</option>
        {props.options.map((option) => (
          <option value={option.id} key={option.id} >{option.name}</option>
        ))}
        
      </select>
    </>
  );
};

interface InterfaceSelect {
  labelText: string;
  options: { id: number; name: string }[];
  onChange:(e:ChangeEvent<HTMLSelectElement>) => void;
  name:string;
  placeholder:string;
  value:number;
  setSetValue?:Dispatch<React.SetStateAction<number>>;
  disabled:boolean;
}

Select.defaultProps = {
  placeholder : "Select",
  disabled:false
}

export default Select;
