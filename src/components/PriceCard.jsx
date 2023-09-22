import { PropTypes } from "prop-types";
import styles from "../style";
import { checkmark1, close } from "../assets";
import { Button } from "../components/";

const PriceCard = ({ title, color, limited, price, benefits, index }) => {
  const bestDeal = index === 1 ? true : false;

  return (
    <div
      className={`${styles.flexCenter} flex-col ${
        bestDeal ? "w-[290px] xs:w-[360px]" : "w-[290px] xs:w-[330px]"
      } border-[1px] border-${color} rounded-[18px] ${bestDeal ? "p-[32px_0_58px]" : "p-[32px_0_38px]"} relative ${
        bestDeal ? "shadow-cardShadow" : ""
      }`}
    >
      <h4 className="text-[20px] font-bold text-[#13253B]">{title}</h4>
      <h2 className={`text-[46px] font-light font-openSans text-${color} p-[8px_0_0]`}>{price}</h2>
      <p className="text-[12px] font-bold text-[#13253B]">{limited ? "Limited offer" : "\u00A0"}</p>

      <div className={`${styles.flexCenter} flex-col ${bestDeal ? "gap-6" : "gap-5"} py-10`}>
        {benefits.map((benefit) => (
          <div key={benefit.id} className={`${styles.flexCenter} flex-row gap-[10px]`}>
            <img src={benefit.active ? checkmark1 : close} alt="icon" className="w-[11px] h-[11px] object-contain" />
            <p className="text-[14px] font-openSans">{benefit.content}</p>
          </div>
        ))}
      </div>

      <Button
        styles={`text-[13px] leading-[41px] bg-${color} h-[50px] w-[150px] absolute bottom-0 translate-y-1/2 ${
          bestDeal ? "shadow-buttonShadow" : ""
        }`}
        title="Begin"
      />
    </div>
  );
};

PriceCard.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  limited: PropTypes.bool,
  price: PropTypes.string,
  benefits: PropTypes.string,
  index: PropTypes.number,
};

export default PriceCard;
