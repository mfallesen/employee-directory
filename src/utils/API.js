import axios from "axios";

export default {
    getRandomUserSet: function() {
        return axios.get(`https://randomuser.me/api/?inc=name,email,dob,phone,picture&results=200`)
    }
}