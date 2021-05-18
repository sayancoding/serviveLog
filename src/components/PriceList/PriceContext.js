import React,{useState,createContext} from "react";
import {firestore} from '../../firebase.config'

export const PriceContext = createContext();

export const PriceProvider = (props) =>{
    const fetchItems = async () =>{
        const itemCollection =  firestore.collection('users').doc(localStorage.getItem('serviceUid')).collection('items');
        const docs = await itemCollection.get();
        docs.forEach(snapshot=>{
            console.log(snapshot.data().products)
            return snapshot.data().products;
        })
    }
    let dummyData = [
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
    ]
    const [prices, setPrices] = useState(fetchItems())
    return(
        <PriceContext.Provider value={[prices,setPrices]}>
            {props.children}
        </PriceContext.Provider>
    );
}