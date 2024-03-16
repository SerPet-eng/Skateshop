import Image from '../../../images/exclusiveProduct1-Red.png';

export default function Exclusive() {
  return (
    <>
      <section className="exclusive">
        <h1>Exclusive</h1>
        <div className="exclusive_item">
          <img src={Image} alt="Exclusive Products" />
          <div className="exclusive_description">
            <h2 className="exclusive_title">Lorem, ipsum dolor.</h2>
            <p className="exclusive_paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aspernatur sunt laboriosam quam explicabo tenetur cum repellat
              fugit corrupti unde.
            </p>
            <button className="exclusive_button">Click Here</button>
          </div>
        </div>
      </section>
    </>
  );
}
