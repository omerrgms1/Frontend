import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("api/hotels?featured=true&limit=4")

  return (
    <div className="fp">
      {loading ? ("Loading"
      ) : (
        <>
          {data.map(item => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <div className="fpRating">
                <button>4.9</button>
                <span>Memnuniyet Derecesi</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
