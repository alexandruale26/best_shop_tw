import styles from "../style";
import { background } from "../assets";
import Button from "./Button";

const Hero = () => (
  <section className={`${styles.flexCenter} justify-between flex-col h-[calc(100vh-70px)] md:h-full landscape:h-full`}>
    <div className={`${styles.flexCenter} flex-col text-center w-full px-8`}>
      <h2 className={`${styles.heading2} pt-[100px] mb-5`}>Sell More!</h2>

      <p className={`${styles.paragraph} mb-[38px] max-w-[70%] ss:w-full`}>
        Open shop on our platform and increase your sales
      </p>

      <Button
        styles="text-base bg-primaryBlue py-[22px] w-full max-w-[440px] shadow-buttonShadow"
        title="Open Your shop"
      />
    </div>

    <img src={background} alt="background" className="object-cover min-h-[280px] xs:min-h-[350px]" />
  </section>
);

export default Hero;
