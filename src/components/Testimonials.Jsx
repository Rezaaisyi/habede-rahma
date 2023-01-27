import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import Slide from "./Slide";

const Testimonials = () => (
  <section id="home" className={`carousel ${styles.flexCenter} flex-col py-1`}>
    <Slide />
  </section>
);

export default Testimonials;
