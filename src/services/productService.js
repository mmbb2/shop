import axios from 'axios';


class ProductService {
  static async getProducts(categoryId) {
    console.log(categoryId)

    return axios.get(`http://localhost:5000/api/product/?categoryId=${categoryId ? categoryId : ''}`)
      .then((res)=>{
        return res.data
      })
  };

};

export default ProductService;