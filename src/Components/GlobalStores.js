import React, {useState, createContext, useEffect} from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';

var initialInfo = { // This variable must be var or let because it is mutable

    userid: null,
    name: null,
    email: null,
    password: null,
    memtype: null,
    createAt: null

}

// Do the localStorage here:
const checkLocal = reactLocalStorage.getObject("newMemInfo");
console.log("Check local storage: ", checkLocal);

if(Object.entries(checkLocal).length > 0) {

    // eslint-disable-next-line
    initialInfo = {...checkLocal}

}

export const GlobalContext = createContext(initialInfo);

export const GlobalStores = ({children}) => {

    const [info, setInfo] = useState(initialInfo);

    const updateInfo = (newInfo) => {

        console.log("New user Info: ", newInfo);
        setInfo(newInfo);

    };

    useEffect(() => {

        // eslint-disable-next-line
        updateInfo(initialInfo);

    }, []);

  return (

    <GlobalContext.Provider value={{info, updateInfo}}>
        {children}
    </GlobalContext.Provider>
  
  )

}

