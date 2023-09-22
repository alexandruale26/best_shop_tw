import { social } from "../constants";
import styles from "../style";

const Footer = () => (
  <div className="flex items-center justify-between flex-row h-[90px]">
    <div className="flex justify-center items-start flex-col">
      <h2 className="text-[26px] leading-[40px] font-light text-primaryBlue">BestShop</h2>
      <p className="text-[11px] leading-[15px] text-dimWhite font-openSans">© 2019 BestShop LTD, All Rights Reserved</p>
    </div>

    <ul className={`${styles.flexCenter} gap-5`}>
      {social.map((s) => (
        <li key={s.id}>
          <a href="">
            <img src={s.icon} alt={s.id} className="h-[24px] w-[24px] object-contain" />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
