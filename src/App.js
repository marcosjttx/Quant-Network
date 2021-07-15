
import './App.css';
import React, {useState,useEffect} from "react";
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Quote from "./components/quote/Quote";
import Slider from "./components/slider/Slider";
import Overledger from "./components/overledger/Overledger";
import Gilbert from "./components/gilbert/Gilbert";
import Footer from "./components/footer/Footer";

function App() {
  const [scrollHeight, setScrollHeight]
 = useState(0);

 const handleScroll = () =>{
const position = window.pageYOffset;
setScrollHeight(position);



 };

 useEffect(() => {

window.addEventListener("scroll", handleScroll);


 }, [scrollHeight]);
 
 return (
    <div className="App">
      <Navbar isScrolling={scrollHeight}></Navbar>
<Cover />
<About />

<Overledger />
<Quote />

<Slider />
<Gilbert />

<Footer />

    </div>
  );
}

export default App;
