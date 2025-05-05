import axios from 'axios';

const BASEURL = "https://jsonplaceholder.typicode.com/users";

class UserService {

  async getUsers() {
    console.log('service');
    return axios.get(BASEURL);
  }

  async getUserById(id) {
    console.log('service' + id);
    return axios.get(BASEURL + "/" + id);
  }

}

const USERSERVICE = new UserService();
export default USERSERVICE;
