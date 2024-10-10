import DisplayOffer from './DisplayOffer';
import buds5 from './buds5.webp';
import buds6 from './buds6.webp';
import creative from './creative.webp';
import liberty4 from './liberty4.webp';
import galaxybuds from './galaxybuds.webp';
import airpods2 from './airpods2.webp';
import airpods3 from './airpods4.webp';
import tozo from './tozo.webp';
import jlab from './jlab.webp';
import './App.css';
import SearchBar from "./SearchBar";


const offer = [
  {name: 'Xiaomi Redmi Buds 5', photo: buds5, connect: 'Bezprzewodowe', build:'Dokanałowe', score: 5, price: 200,},
  {name: 'Xiaomi Redmi Buds 6', photo: buds6, connect: 'Bezprzewodowe', build:'Dokanałowe', score: 5, price: 2137,},
  {name: 'Creative Outlier PRO', photo: creative, connect: 'Bezprzewodowe', build:'Dokanałowe', score: 5, price: 205,},
  {name: 'soundcore Liberty 4', photo: liberty4, connect: 'Bezprzewodowe', build:'Dokanałowe', score: 5, price: 240,},
  {name: 'Samsung Galaxy Buds FE', photo: galaxybuds, connect: 'Bezprzewodowe', build:'Dokanałowe', score: 5, price: 230,},
  {name: 'Apple AirPods Pro 2', photo: airpods2, connect: 'Bezprzewodowe', build:'Dokanałowe', score: 5, price: 220,},
  {name: 'Apple AirPods Pro 3', photo: airpods3, connect: 'Bezprzewodowe', build:'Dokanałowe', score: 5, price: 210,},
  {name: 'Tozo T10S', photo: tozo, connect: 'Bezprzewodowe', build:'Dokanałowe', score: 4, price: 210,},
    {name: 'Jlab', photo: jlab, connect: 'Bezprzewodowe', build:'Dokanałowe', score: 4, price: 210,},
]


function App() {
  return (
    <div className="App">
        <h1>Oferta</h1>
        <SearchBar/>
        <div className="offer_row">
        <DisplayOffer title = {offer[0].name} photo = {offer[0].photo} connect = {offer[0].connect} build = {offer[0].build} score = {offer[0].score} price = {offer[0].price}/>
        <DisplayOffer title = {offer[1].name} photo = {offer[1].photo} connect = {offer[1].connect} build = {offer[1].build} score = {offer[1].score} price = {offer[1].price}/>
        <DisplayOffer title = {offer[2].name} photo = {offer[2].photo} connect = {offer[2].connect} build = {offer[2].build} score = {offer[2].score} price = {offer[2].price}/>
        </div>
        <div className="offer_row">
        <DisplayOffer title = {offer[3].name} photo = {offer[3].photo} connect = {offer[3].connect} build = {offer[3].build} score = {offer[3].score} price = {offer[3].price}/>
        <DisplayOffer title = {offer[4].name} photo = {offer[4].photo} connect = {offer[4].connect} build = {offer[4].build} score = {offer[4].score} price = {offer[4].price}/>
        <DisplayOffer title = {offer[5].name} photo = {offer[5].photo} connect = {offer[5].connect} build = {offer[5].build} score = {offer[5].score} price = {offer[5].price}/>
        </div>
        <div className="offer_row">
        <DisplayOffer title = {offer[6].name} photo = {offer[6].photo} connect = {offer[6].connect} build = {offer[6].build} score = {offer[6].score} price = {offer[6].price}/>
        <DisplayOffer title = {offer[7].name} photo = {offer[7].photo} connect = {offer[7].connect} build = {offer[7].build} score = {offer[7].score} price = {offer[7].price}/>
        <DisplayOffer title = {offer[8].name} photo = {offer[8].photo} connect = {offer[8].connect} build = {offer[8].build} score = {offer[8].score} price = {offer[8].price}/>
       </div>
    </div>
  );
}

export default App;
