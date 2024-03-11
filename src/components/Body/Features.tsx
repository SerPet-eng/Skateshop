import Sample from '../../../images/Product Panel.png';

export default function Features() {
  return (
    <>
      <section className="features">
        <h1 className="features_title">Feature Products</h1>
        <div className="product_section">
          <img src={Sample} alt="Product Sample" className="product" />
          <img src={Sample} alt="Product Sample" className="product" />
          <img src={Sample} alt="Product Sample" className="product" />
          <img src={Sample} alt="Product Sample" className="product" />
          <img src={Sample} alt="Product Sample" className="product" />
        </div>
      </section>
    </>
  );
}
