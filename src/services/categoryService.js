import axios from 'axios';


class CategoryService {
  static async getCategories() {

    return axios.get(`http://localhost:5000/api/category/`)
      .then((res)=>{
        return res.data
      })
  };

};

export default CategoryService;