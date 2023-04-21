import axios from "axios";

axios.defaults.baseURL='https://orange-adjustment-production.up.railway.app//mySpringBootPos/api/customer'

class CustomerServices {
    async getAllCustomers() {
        return await axios({
            method: 'GET',
            url: '/getAllCustomers',
            responseType: 'json'
        })
            .then((response: any) => {
                return response.data.data
            })
            .catch((error: Error) => {
                //  console.log(error)
            })
    }

    customerSave(customerDto: {}) {
        console.log(customerDto)
        return axios({
            method: 'POST',
            url: "/",
            responseType: 'json',
            headers: {"Content-Type": 'application/json'},
            data: JSON.stringify(customerDto)
        })
            .then((response: any) => {
                //  console.log(response.data.data)
                return response.data.data

            })
            .catch((error: any) => {
                // console.log(error.response.data.data)
                return error.response.data.data
            })
    }
}

const customerServices = new CustomerServices();
export {customerServices}