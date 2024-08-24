import { motion } from "framer-motion";

const ModalCloseSession = ({ visible, message, onClose, onCloseSesion }) => {
    if (!visible) {
        return null;
    }
    
    return (
        <div className="modal-overlay">
            <motion.div
                className="notification-success"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div>
                    <p>{message}</p>    
                </div>
                <button type="button" onClick={onCloseSesion}>Presion aquí para salir</button>
                <button 
                    className="close-btn-success"
                    onClick={onClose}>
                    X
                </button>
            </motion.div>
        </div>
    );
};

export default ModalCloseSession