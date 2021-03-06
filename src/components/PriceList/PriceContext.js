import React,{useState,createContext} from "react";

export const PriceContext = createContext();

export const PriceProvider = (props) =>{
    const [prices, setPrices] = useState([
        {
            id: 0,
            productName: "Usha 103",
            costPrice: "8000",
            sellingPrice: "12000",
            descriptions: "none",
            category: "none",
            quantity: "10"
        },
        {
            id: 1,
            productName: "Sandeep 103",
            costPrice: "8000",
            sellingPrice: "20000",
            descriptions: "none",
            category: "none",
            quantity: "10"
        },
        {
            id: 2,
            productName: "Marite 95",
            costPrice: "8000",
            sellingPrice: "19000",
            descriptions: "none",
            category: "none",
            quantity: "10"
        },
        {
            id: 3,
            productName: "Marite 103",
            costPrice: "8000",
            sellingPrice: "11000",
            descriptions: "none",
            category: "none",
            quantity: "10"
        },
        {
            id: 4,
            productName: "Usha 95",
            costPrice: "8000",
            sellingPrice: "11000",
            descriptions: "none",
            category: "none",
            quantity: "10"
        },
        {
            id: 5,
            productName: "Singer 103",
            costPrice: "8000",
            sellingPrice: "11000",
            descriptions: "none",
            category: "none",
            quantity: "10"
        },
    ])
    return(
        <PriceContext.Provider value={[prices,setPrices]}>
            {props.children}
        </PriceContext.Provider>
    );
}