const SearchBox = () => {
    return ( 
        <div className="container">
            <input className="searchBox" type="search" placeholder="Enter Text.." name="search"/>
            <input type="submit" className="btn btn-primary SearchButton" value="Search"/>

        </div>
     );
}
 
export default SearchBox;