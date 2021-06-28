import axios from "axios";

class UserAPI {
  axiosInstance;

  constructor(baseURL) {
    this.axiosInstance = axios.create({ baseURL: baseURL });
  }

  async getList(params) {
    try {
      const response = await this.axiosInstance.get(
        `&language=en-US&page=${params.page_number}`
      );
      return response.results;
    } catch (error) {
      console.error(error);
      throw error;
    }
    }
    
}

export default UserAPI;