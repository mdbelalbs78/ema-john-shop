import {
   getShoppingCart
} from "../utilities/fakedb";

const cartProductLoader = async () => {
   const loadedProducts = await fetch('products.json')
   const products = await loadedProducts.json();

   const storedCart = getShoppingCart();
   const saveCart = [];

   console.log(storedCart);
   for (const id in storedCart) {
      const addedProducts = products.find(pd => pd.id === id);
      if (addedProducts) {
         const quantity = storedCart[id];
         addedProducts.quantity = quantity;
         saveCart.push(addedProducts);
      }
   }
   // if you need to send two things 
   return saveCart;

}

export default cartProductLoader;