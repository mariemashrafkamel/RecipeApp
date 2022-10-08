const Header = (props) => {
    
    const clickHandler = () =>{
       console.log('clicked')
    }
    return ( 
        <h1 className="header">
            Hello World {props.title}
            <button className="btn" onClick={clickHandler}>Click me</button>
        </h1>
     );
}
 
export default Header;