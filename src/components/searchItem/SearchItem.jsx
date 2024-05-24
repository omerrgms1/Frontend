import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">Merkeze {item.distance}m mesafede</span>
        <span className="siTaxiOp">5G Wifi Hizmeti</span>
        <span className="siTaxiOp">İlk Gün Kahvaltısı Bizden</span>
        <span className="siSubtitle">
          Yerleşkelerimizin hepsi klimalıdır
        </span>
        <span className="siCancelOpSubtitle">
          Aynı gün içerisinde iptal edilebilir
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">{item.cheapestPrice} TL</span>
          <span className="siTaxOp">Yerleşkelere ait özellikleri keşfet</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Uygun Olanlara Bak</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
