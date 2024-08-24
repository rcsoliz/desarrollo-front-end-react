import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
    const form1 = useSelector(state => state.form);

    return (
        <nav>
            <ul>
                <li> 
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/login">Form</Link>
                </li>
            </ul>
          
            {form1.formData.username &&(
                <span>Bienvenido {form1.formData.username} : {form1.formData.email} </span>
            )}
        </nav>
    );
};

export default NavBar;  