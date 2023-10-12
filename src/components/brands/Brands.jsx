import "./brands.css";
import HandM from "./../../img/brands/HM.png";
import Obey from "./../../img/brands/Obey.png";
import Shopify from "./../../img/brands/Shopify.png";
import lacoste from "./../../img/brands/Lacoste.png";
import levis from "./../../img/brands/Levis.png";
import Amazon from "./../../img/brands/Amazon.png";

function Brands() {
  return (
    <>
      <div className="brands_wrapper">
        <div className="container">
          <div className="brands">
            <img src={HandM} alt="H&M" className="brands_img" />
            <img src={Obey} alt="H&M" className="brands_img" />
            <img src={Shopify} alt="H&M" className="brands_img" />
            <img src={lacoste} alt="H&M" className="brands_img" />
            <img src={levis} alt="H&M" className="brands_img" />
            <img src={Amazon} alt="H&M" className="brands_img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Brands;
