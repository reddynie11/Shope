export const addItemToCart = (cartItems, cartItemToAdd) =>{
    const existingCartItems = cartItems.find((item)=>{
        return item.id === cartItemToAdd.id
    })
    if (existingCartItems){
        return cartItems.map((item)=>{
            return item.id === cartItemToAdd.id ? {...item, quantity: item.quantity + 1}
                                         : item
        })
    }else{
        return [...cartItems,{...cartItemToAdd, quantity: 1}]
    }
}