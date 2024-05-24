import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <h1 className="homeTitle">Yerleşke Arayabileceğiniz Şehirler</h1>
        <Featured/>
        <h1 className="homeTitle">Beğenilen Bungalovlarımız</h1>
        <FeaturedProperties/>
        <h1 className="homeTitle">Yerleşke Çeşitlerimiz</h1>
        <PropertyList/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
