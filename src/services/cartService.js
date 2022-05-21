import api from "../http/api"


class CartService {
  static async getCartProductsData(cartIds) {
    return api.post(`/api/product/getByIds`, {cartIds})
      .then((res)=>{
        return res.data
      })
  };

  static async postOrder(clientEmail, cart, totalPrice) {
    return api.post(`/api/order/create`, {clientEmail, cart, totalPrice})
      .then((res)=>{
        return res.data
      })
  };

};

export default CartService;