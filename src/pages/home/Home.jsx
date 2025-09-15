
import Banner from '../../components/Banner';
import Feature from '../../components/Feature';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MarqueeBanner from '../../components/MarqueBanner';
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex flex-col ">
      <MarqueeBanner/>
      <Navbar/>
      <Header/>
      <Banner/>
      <Feature/>
      {/* <Card/> */}
      <Footer/>
    </div>
  );
};

export default Home;