import ImageOne from '../../../images/skateScene1.jpg';
import ImageThree from '../../../images/skateScene2.jpg';
import ImageTwo from '../../../images/skateScene3.jpg';

export default function Quotes() {
  return (
    <>
      <section className="quote">
        <div className="quote_photos">
          <img
            src={ImageOne}
            alt="Skate Scenery The Streets"
            className="skate_photo"
          />
          <img
            src={ImageTwo}
            alt="Skate Scenery Where Skater are doing Ollie"
            className="skate_photo"
          />
          <img
            src={ImageThree}
            alt="Skate Scenery of A Bunch of Skater"
            className="skate_photo"
          />
        </div>
        <article className="quote_article">
          <h2 className="quote_title">Don&apos;t Worry Keep Pushing</h2>
          <p className="quote_description">
            &quot;Do what you love and try not to look at what other people
            occupy themselves with. Most people seem restless and bounce around
            too much to focus or even pay attention enough to themselves to
            figure out exactly what they really do love, as opposed to what the
            people that surround them are doing.&quot; ~ Rodney Mullen
          </p>
        </article>
      </section>
    </>
  );
}
