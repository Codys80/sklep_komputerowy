import cart from './cart.png'
import './DisplayOffer.css'
function DisplayOffer(props) {
  return (
    <div className='offer'>
        <div className='offer_photo'>
            <img src={props.photo} alt="zeta"/>
        </div>
        <div className='offer_info'>
            <h1>{props.title}</h1>
            <p>{props.build}</p>
            <p>{props.connect}</p>
            <p>Rating: {props.score}</p>
        </div>
        <div className='offer_price'>
            <div>
            <button className='buy_button'><img className="cart" src={cart}/></button>
            </div>
            <div>
                <>Cena: {props.price} zł</>
            </div>
            </div>
    </div>
  );
}

export default DisplayOffer;