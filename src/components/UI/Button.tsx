import React from "react";

const Button = (props: InterfaceButton) => {
  return (
    <>
      {props.isLoading ? (
        <button
          type={props.buttonType}
          onClick={props.onClick}
          className={` ${props.buttonClasses} inline-flex justify-center items-center px-4 py-2 text-sm md:text-base  font-semibold leading-6 text-white transition duration-150 ease-in-out bg-green-500 rounded-md shadow cursor-not-allowed hover:bg-green-400`}
        >
          {/* {props.buttonText} */}
          <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </button>
      ) : (
        <button type={props.buttonType} disabled={props.disabled} onClick={props.onClick} className={` ${props.buttonClasses} bg-orangeyellow disabled:opacity-50 text-sm md:text-base py-2 px-10  rounded-md justify-center`}>
          {props.buttonText}
        </button>
      )}
    </>
  );
};

interface InterfaceButton {
  buttonText: string;
  buttonClasses: string;
  buttonType: "button" | "submit";
  onClick?(): void;
  isLoading: boolean;
  disabled:boolean;
}
Button.defaultProps = {
  buttonType: "button",
  buttonClasses: "bg-orangeyellow text-white",
  isLoading: false,
  disabled:false
};
export default Button;
