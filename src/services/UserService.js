import axios from 'axios';

// Posgre
const USER_API_BASE_URL = "https://antonpodotnetpostgresqlcrud.azurewebsites.net/api/v1/users";

// Mysql
//const USER_API_BASE_URL = "https://azuredotnetmysqlcrud.azurewebsites.net/api/v1/users";

// Local
//const USER_API_BASE_URL = "https://localhost:5135/api/v1/users";

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
}

export default new UserService()