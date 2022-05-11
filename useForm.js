import { useState } from "react";

// Custom Hook que se encarga de manejar los formularios

const useForm = (initialState = {}) => {

      const [values, setValues] = useState(initialState);

      const reset = ()  => {
            setValues(initialState);
      }

      const handdleInputChange = ({ target }) => {

            setValues({
                  ...values,
                  [target.name]: target.value
            })
      }

      return [values, handdleInputChange, reset]

}

export default useForm;