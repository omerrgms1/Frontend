// import useFetch from "../../hooks/useFetch";
// import "./propertyList.css";

// const PropertyList = () => {
//   const { data, loading, error } = useFetch("/hotels/countByType")
// console.log(data)
//   const images = [
//     "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
//     "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
//     "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
//     "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
//     "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
//   ]
//   return (
//     <div className="pList">
//       {loading ? (
//         "loading"
//       ) : (
//         <>
//           {data && 
//           images.map((img,i) => (
//             <div className="pListItem" key={i}>
//               <img
//                 src={img}
//                 alt=""
//                 className="pListImg"
//               />
//               <div className="pListTitles">
//                 <h1>{data[i]?.type}</h1>
//                 <h2>{data[i]?.count} {data[i]?.type}</h2>
//               </div>
//             </div>
//           ))}
//         </>
//       )}
//     </div>
//   );
// };

// export default PropertyList;
import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Balayı Bungalov</h1>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.tatilfeneri.com/files/IMG-548-1784-1659166686-62e4dfde994d2.jpeg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Korunaklı Bungalov</h1>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://ideacdn.net/idea/au/43/myassets/blogs/1-270.jpeg?revision=1664278871"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Jakuzili Bungalov</h1>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Havuzlu Bungalov</h1>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Klasik Bungalov</h1>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;