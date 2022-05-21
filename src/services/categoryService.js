import api from '../http/api';

class CategoryService {
  static async getCategories() {

    return api.get(`/api/category/`)
      .then((res)=>{
        return res.data
      })
  };

};

export default CategoryService;