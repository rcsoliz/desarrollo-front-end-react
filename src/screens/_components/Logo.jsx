import logo from "../../logo.svg";
import { useSelector } from "react-redux"; 

const Logo = () => {
    const stateDefault = useSelector(state =>state.default)  
    return (
        <>
               <img src={logo} className="App-logo" alt="logo" />
               <h4>{stateDefault.name}</h4>
        </>
    );
};

export default Logo;