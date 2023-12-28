import React, {useState, createContext, useEffect} from 'react'

const initialInfo = {

    userid: null,
    name: null,
    email: null,
    password: null,
    memtype: null

}

export const GlobalContext = createContext(initialInfo);

export const GlobalStores = ({children}) => {

    const [info, setInfo] = useState(initialInfo);

    const updateInfo = (newInfo) => {

        console.log("New user Info: ", newInfo);
        setInfo(newInfo);

    };

    useEffect(() => {

        updateInfo(initialInfo);

    }, []);

  return (

    <GlobalContext.Provider value={{info, updateInfo}}>
        {children}
    </GlobalContext.Provider>
  
  )

}

