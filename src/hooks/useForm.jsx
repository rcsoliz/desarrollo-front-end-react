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

    return [values, handleChange];
}

export default useForm;
