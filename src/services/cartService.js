import axios from 'axios';


class CartService {
  static async getCartProductsData(cartIds) {
    return axios.post(`http://localhost:5000/api/product/getByIds`, {cartIds})
      .then((res)=>{
        return res.data
      })
  };

  static async postOrder(clientEmail, cart, totalPrice) {
    return axios.post(`http://localhost:5000/api/order/create`, {clientEmail, cart, totalPrice})
      .then((res)=>{
        return res.data
      })
  };

};

export default CartService;