import styles from "../style";
import { pricing } from "../constants";
import PriceCard from "./PriceCard";

const Pricing = () => (
  <section id="prices" className={`${styles.flexCenter} flex-col px-4 lg:px-0`}>
    <h3 className={`${styles.heading3} pb-9 sm:pb-[50px] text-center`}>Pricing</h3>

    <div className={`${styles.flexCenter} flex-row flex-wrap gap-14`}>
      {pricing.map((price, index) => (
        <PriceCard key={price.id} {...price} index={index} />
      ))}
    </div>
  </section>
);

export default Pricing;
