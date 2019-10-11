export const addItemToCart = (cartItems, cartItemToAdd) =>{
    const existingCartItems = cartItems.find((item)=>{
        return item.id === cartItemToAdd.id
    })
    if (existingCartItems){
        return cartItems.map((item)=>{
            return item.id === cartItemToAdd.id ? {...item, quantity: item.quantity + 1} : item
        })
    }else{
        return [...cartItems,{...cartItemToAdd, quantity: 1}]
    }
}

export const removeItemFromCart = (cartItems, cartItemRemove) =>{
    const existingCartItems = cartItems.find((item)=>{
        return item.id === cartItemRemove.id
    })

    if(existingCartItems.quantity===1){
        return cartItems.filter((item)=>{
            return item.id !== cartItemRemove.id
        })
    }
    return cartItems.map((item)=>{
        return item.id === cartItemRemove.id ? {...item, quantity: item.quantity - 1} : item
    })
}