import styles from "../style";
import { checkmark } from "../assets";
import { useState } from "react";
import Button from "./Button";

const Form = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className={`${styles.flexTop} flex-col gap-4`}>
      <form className={`${styles.flexTop} flex-col w-full gap-3`}>
        <label
          htmlFor="name"
          className="text-[11px] leading-[15px] text-primaryBlue font-bold tracking-[3.3px] font-openSans"
        >
          NAME
        </label>
        <input
          id="name"
          className={`${styles.paragraph} rounded-none focus:outline-none border-b-[1px] border-dimWhite w-full   mb-4`}
        />

        <label
          htmlFor="email"
          className="text-[11px] leading-[15px] text-primaryBlue font-bold tracking-[3.3px] font-openSans"
        >
          EMAIL
        </label>
        <input
          id="email"
          className={`${styles.paragraph} rounded-none focus:outline-none border-b-[1px] border-dimWhite w-full mb-4`}
        />
      </form>

      <div className={`${styles.flexTop} flex-row gap-[10px] select-none`}>
        <div
          onClick={() => setAgreed((received) => !received)}
          className="w-full h-full max-w-[24px] max-h-[24px] border-[1px] rounded-[4px] border-dimWhite p-1"
        >
          <img
            src={checkmark}
            alt="checkmark"
            className={`w-full h-full object-contain ${agreed ? "opacity-1" : "opacity-0"} transition-all`}
          />
        </div>

        <p className="text-xs leading-[17px] font-openSans text-dimWhite2">
          I hereby give consent for my personal data included in my application to be processed for the purposes of the
          recruitment process under the European Parliament’s and Council of the European Union Regulation on the
          Protection of Natural Persons as of 27 April 2016, with regard to the processing of personal data and on the
          free movement of such data, and repealing Directive 95/46/EC (Data Protection Directive)
        </p>
      </div>

      <Button
        styles="text-[13px] leading-[18px] bg-primaryBlue h-[57px] w-[226px] mt-4 shadow-buttonShadow ml-auto"
        title="Send"
      />
    </div>
  );
};

export default Form;
