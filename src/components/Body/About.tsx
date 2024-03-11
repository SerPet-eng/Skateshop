import Icon from '../../../images/main_AxisRacoon-removebg.png';
import Sample from '../../../images/Video Player.png';

export default function About() {
  return (
    <>
      <section className="about">
        <article className="about_article">
          <h2 className="about_title">About</h2>
          <p className="about_description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            itaque ratione dolorem molestias accusamus repellat tenetur atque
            dolore qui nostrum?
          </p>
          <button className="about_button">Click Here</button>
        </article>
        <div className="about_media">
          <img src={Icon} alt="Mr. Raccoon" className="about_icon" />
          <img src={Sample} alt="A Sample Video" className="about_video" />
        </div>
      </section>
    </>
  );
}
