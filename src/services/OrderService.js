import axios from 'axios';


class OrderService {
  static async getOrder(id) {
    return axios.get(`http://localhost:5000/api/order?orderId=${id}`)
      .then((res)=>{
        return res.data
      })
  };


};

export default OrderService;