import api from "../http/api";


class OrderService {
  static async getOrder(id) {
    return api.get(`/api/order?orderId=${id}`)
      .then((res)=>{
        return res.data
      })
  };


};

export default OrderService;