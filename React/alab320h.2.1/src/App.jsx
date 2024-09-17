// import {react} from "react";
import Header from '../src/components/Header';
import Content from '../src/components/Content';
import Footer from '../src/components/Footer';
import './App.css';
// import Images from './assets/images';

// function App() {
 

//   return (
//     <>
      
//     </>
//   )
// }
function App() {
 

  return (
    <div className = "app-container">
      <Header />
      <Content color = "green"
      text = "Kaafee Cafe."/>
      <img src = "src/assets/images/Coffee.jpg" />
      <Content color = "bargandy"
      text = "Varieties of Coffee."/>
      <img className = "app-image"src = "src/assets/images/Coffee-varieties.jpeg"/>
      <Content color = "yellow"
      text = "Morning hot coffee."/>
      <img className ="mcoffee-img" src ="src/assets/images/morning-coffee.jpeg"/>
       <Footer/>
      
    </div>
  );
}


export default App;