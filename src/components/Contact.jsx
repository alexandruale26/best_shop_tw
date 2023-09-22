import styles from "../style";
import { contact } from "../constants";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${styles.flexTop} flex-col sm:flex-row gap-8 md:gap-5 max-w-[800px]`}>
      <div className={`${styles.flexTop} flex-1 flex-col`}>
        <h2 className={`${styles.heading2}`}>Any questions?</h2>
        <p className={`${styles.paragraph} p-[10px_0_25px] sm:p-[22px_0_42px]`}>Leave your email address or call us!</p>

        <div className="flex justify-center items-start md:items-center flex-col md:flex-row flex-wrap gap-[10px] xs:gap-5">
          {contact.map((contact) => (
            <div key={contact.id} className={`${styles.flexCenter} flex-row gap-[10px]`}>
              <img src={contact.icon} alt="mail" className="w-[27px] h-[27px] object-contain" />
              <p className={`${styles.paragraph} text-dimWhite`}>{contact.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
