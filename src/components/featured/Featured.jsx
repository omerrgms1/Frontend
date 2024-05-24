import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch("api/hotels/countByCity?cities=Sakarya,Bodrum,Antalya,Şile")

  return (
    <div className="featured">
      {loading ? ("Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Sakarya</h1>
              <h2>{data[0]} adet Yerleşke</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://i0.wp.com/mediatrend.mediamarkt.com.tr/wp-content/uploads/2017/02/2017_subat_03.jpg?ssl=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Sapanca</h1>
              <h2>{data[1]} adet Yerleşke</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Antalya</h1>
              <h2>{data[2]} adet Yerleşke</h2>
            </div>
          </div>

          <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Şile</h1>
            <h2>{data[3]} adet Yerleşke</h2>
          </div>
        </div>

        {/* <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Fransa</h1>
              <h2>{data[4]} adet Yerleşke</h2>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default Featured;
