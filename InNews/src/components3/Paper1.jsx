import Header from "../components/Header";
import Footer from "../components/Footer";
import Feature from "./Feature";
import PaperHeading from "./PaperHeading";
import Sidebar from "./Sidebar";

const Paper1 = () => {
  return (
    <>
      <Header></Header>
        <div className="flex">
          <Sidebar></Sidebar>
          <div className="flex flex-col ml-2 w-full mr-2">
            <PaperHeading/>
            <Feature></Feature>
          </div>
        </div>
        
      <Footer/>
    </>
  )
}

export default Paper1;