import React, { useState } from 'react';



export const FormContext = React.createContext();
export const PragContext = React.createContext();

export const FormProvider = (props) => {
    const [forms, setForms] = useState(
        []
    );
   
    return(
        <FormContext.Provider value={[forms,setForms]}>
            {props.children}
        </FormContext.Provider>
    )
}
export const PragProvider = (props) => {
    const [Prag, setPrag] = useState(1);
   
    return(
        <PragContext.Provider value={[Prag,setPrag]}>
            {props.children}
        </PragContext.Provider>
    )
}