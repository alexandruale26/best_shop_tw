import { PropTypes } from "prop-types";
import styles from "../style";
import { statistics } from "../constants";

const StatisticCard = ({ color, icon, title, content }) => (
  <div className="flex justify-start items-center flex-col w-[160px] h-[160px] mb-4 last:mb-0 ss:mb-0 last:mt-4 ss:last:mt-0">
    <div className={`${styles.flexCenter} w-[63px] h-[63px] bg-${color} rounded-full relative`}>
      <img src={icon} alt="icon" className="w-3/4 h-3/4 absolute -right-5" />
    </div>

    <h4 className="text-[20px] leading-[56px] tracking-[6px] font-extrabold">{title}</h4>

    <p className="text-[17px] leading-[20px] text-dimWhite text-center">{content}</p>
  </div>
);

const Statistics = () => {
  return (
    <section id="home" className={`${styles.flexCenter} flex-col w-full max-w-[800px]`}>
      <h3 className={`${styles.heading3} text-center pb-9 sm:pb-[100px]`}>
        The most popular sales platform in country
      </h3>

      <div className="flex justify-between items-center flex-col ss:flex-row flex-wrap w-full">
        {statistics.map((statistic) => (
          <StatisticCard key={statistic.id} {...statistic} />
        ))}
      </div>
    </section>
  );
};

StatisticCard.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Statistics;
