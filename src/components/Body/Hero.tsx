import Raccoon from '../../../images/main_AxisRacoon-removebg.png';
import Sample from '../../../images/main_AxisRacoon-removebg.png';

export default function Hero() {
  return (
    <>
      <section className="hero">
        <h1 className="hero_title">Welcome to Axis Skateshop</h1>
        <p className="hero_paragraph">
          Providing you the best experience to have in skateboarding. Let's
          Roll!
        </p>
        <img src={Sample} alt="Sample Image" />
      </section>
      <img
        src={Raccoon}
        alt="A Raccoon Logo from Axis Skateshop"
        className="hero_image"
      />
    </>
  );
}
