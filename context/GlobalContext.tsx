import {createContext, useContext, useState, useReducer} from "react"


const globalContextDefaultValues = {
    setActive: (item:string) => {},
    active: "terrains",
    modalOpenForm: false,
    menuOpen: false,
    openModalForm: () => {},
    setModalOpenForm: (item:string) => {},
    openMenu: () => {},
    url: "",
    setUrl: (item:string) => {},
};

const GlobalContext = createContext(globalContextDefaultValues);

export function useGlobal() {
    return useContext(GlobalContext);
}

export function GlobalProvider({ children }:any) {
    //for menu text is active
    const [active, setActive] = useState<string>("terrains")
    const [modalOpenForm, setModalOpenForm] = useState<Boolean>(false)
    const [menuOpen, setMenuOpen] = useState<Boolean>(false)
    const [url, setUrl] = useState<string>("")

    //Functions
    const openModalForm = () => setModalOpenForm(!modalOpenForm);

    const openMenu = () => setMenuOpen(!menuOpen);
    
    const value:any = {
        active,
        setActive,
        modalOpenForm,
        setModalOpenForm,
        openModalForm,
        menuOpen,
        openMenu,
        url,
        setUrl
    };
    return (
        <>
            <GlobalContext.Provider value={value}>
                {children}
            </GlobalContext.Provider>
        </>
    );
}

