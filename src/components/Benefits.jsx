import PropTypes from "prop-types";
import { benefits } from "../constants";
import styles from "../style";

const Bar = ({ color }) => <div className={`hidden sm:block w-[328px] h-1 bg-${color}`} />;

const BenefitCard = ({ title, content, color, image }) => (
  <div className="w-full h-full ss:h-[300px] flex flex-col-reverse ss:even:flex-row-reverse ss:flex-row items-center justify-between bg-white rounded-[5px] border-[1px] border-borderGrey overflow-hidden">
    <div className="flex-1 p-5 sm:p-9">
      <h3 className={`${styles.heading3} max-w-[320px] pt-4 sm:pt-0`}>{title}</h3>
      <p className={`${styles.paragraph} pt-[30px] pb-6 ss:pb-12  max-w-[416px]`}>{content}</p>
      <Bar color={color} />
    </div>

    <div className="flex-1 w-full h-full">
      <div className={`${styles.flexCenter} bg-${color} w-full h-full`}>
        <img src={image} alt="image" className="w-full h-full object-contain" />
      </div>
    </div>
  </div>
);

const Benefits = () => {
  return (
    <section id="benefits" className={`${styles.flexCenter} flex-col gap-9 w-full max-w-[1124px] px-6 xs:px-16`}>
      {benefits.map((benefit) => (
        <BenefitCard key={benefit.id} {...benefit} />
      ))}
    </section>
  );
};

Bar.propTypes = {
  color: PropTypes.string,
};

BenefitCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.any,
};

export default Benefits;
