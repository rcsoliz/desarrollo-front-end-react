import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import {saveFormData, resetFormData } from "../../redux/form/formAction";
import { motion } from "framer-motion";
import ModalInfo from "../../components/ModalInfo";
import ModalCloseSesion from "../../components/ModalCloseSession";
import { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 

const LoginForm =() => {
    const [values, handleChange, reset] = useForm({ username: '', email:'', password: ''});
    const [showModalInfo,  setShowModalInfo] = useState(false);

    const [showModaCloseSesion, setShowModaCloseSesion] = useState(false);

    const form = useSelector(state => state.form);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const handleChangeSubmit = (event) => {
        event.preventDefault();
        if (values.password && form.defaultPassword !== values.password) {
            setShowModalInfo(true);
        }else{
            dispatch(saveFormData(values));
            navigate('/');
        }
    }

    const hideModalInfo = () => {
        setShowModalInfo(false);
    };

    const showModal = () => {
        setShowModalInfo(true);
    }

    const showModalCloseSesion = () => {
        setShowModaCloseSesion(true);
    }
    const hideModalCloseSesion = () => {
        setShowModaCloseSesion(false);
    };

    
    const changeTextButton = () => {
        const button = document.getElementById("btn_password");
        const inputPassword = document.getElementById("password");
        if(button.textContent  === "Show"){
            inputPassword.type = "text";
            button.textContent  = "Hide";
        }else{
            inputPassword.type = "password";
            button.textContent  = "Show";
        }
    }

    const closeSesion = () => {
        reset()
        dispatch(resetFormData());
        hideModalCloseSesion();
    }

    return (
        <motion.div
            initial={{opacity: 0, y: -70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
            <ModalInfo 
                visible={showModalInfo}
                message={"Password incorrecto!!!"}
                onClose={hideModalInfo}
            />
            <ModalCloseSesion 
                visible={showModaCloseSesion}
                message={"¿Estas seguro de que quieres cerrar la sesión?"}
                onClose={hideModalCloseSesion}
                onCloseSesion={closeSesion}
            />

            <div className="container">
                <form onSubmit={handleChangeSubmit}>
                    <h5>FORM LOGIN</h5>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <button type="button" id="btn_password" onClick={changeTextButton}>Show</button>
                    </div>
                    <div className="button-container">
                        <button type="submit">Submit</button>
                        <button type="button" className="link-button" onClick={showModalCloseSesion}>Logout</button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default LoginForm;