import api from "../http/api";


class ProductService {
  static async getProducts(categoryId) {
    console.log(process.env.REACT_APP_API_URL, "test")

    return api.get(`/api/product/?categoryId=${categoryId ? categoryId : ''}`)
      .then((res)=>{
        return res.data
      })
  };

};

export default ProductService;