export const toggleCartHidden = () => {
    return {
        type: 'TOOGLE_CART_HIDDEN'
    }
}

export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    }
}
export const clearItemfromCart = (item)=> {
    return{
        type: 'CLEAR_ITEM_FROM_CART',
        payload: item
    }
}