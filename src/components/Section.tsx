import Quotes from './Section/Quotes';
import Sponsors from './Section/Sponsors';

export default function Section() {
  return (
    <>
      <section className="section">
        <Quotes />
        <Sponsors />
      </section>
    </>
  );
}
