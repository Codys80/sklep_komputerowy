import './SearchBar.css'
import searchicon from './searchicon.png'
function SearchBar(props){
    return(
        <div className="search">
            <input type="text" placeholder="Wyszukaj..." onChange={props.onChange}/>
        </div>
    )
}
export default SearchBar
