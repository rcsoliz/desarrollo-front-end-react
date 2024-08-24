import { useState } from "react";

const useForm = (initilValues) => {
    const [values, setValues] = useState(initilValues);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(
            {
                ...values,
                [name]: value,
            }
        );
    }
    
    const reset = () => {
        setValues(initilValues);
    };

    return [values, handleChange, reset];
}

export default useForm;
