import ProductDetailItem from "../components/ProductDetailItem";
import ProductDetailsView from "../views/ProductDetailsView";


const { createContext, useContext, useState} = require("react");
const ProductDetailContext = createContext()

export const useProductDetail = () => {
    return useContext(ProductDetailContext)
}

export const ProductDetailProvider = ({children}) => {
    const [detilItems, setDetilItems] = useState([])

    const detilQuantity = detilItems.reduce(
        (quantity, item) => item.quantity + quantity, 1
    )

    const getItemQuantity = (articleNumber) => {
        return detilItems.find(item = item.articleNumber === articleNumber)?.quantity || 0
    }

    const IncrementQuantity = (detilItem ) => {
        const {articleNumber, product} = detilItem

        setDetilItems(items => {
            if(items.find(item => item.articleNumber === articleNumber) == null){
                return [...items, {articleNumber, product, quantity: 1}]
            } else {
                return items.map (item => {
                    if(item.articleNumber === articleNumber) {
                        return{...item, quantity : item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const DecrementQuantity = (detilItem ) => {
        const {articleNumber} = detilItem

        setDetilItems(items => {
            if(items.find(item => item.articleNumber === articleNumber).quantity === 1){
                return items.filter(item => item.articleNumber !== articleNumber)
            } else {
                return items.map (item => {
                    if(item.articleNumber === articleNumber) {
                        return{...item, quantity : item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }


    return <ProductDetailContext.Provider value={{detilItems, detilQuantity, getItemQuantity, IncrementQuantity, DecrementQuantity}}>
        {children}
    </ProductDetailContext.Provider>
}