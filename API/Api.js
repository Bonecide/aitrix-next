import Axios from 'axios'

const instance = Axios.create({
    withCredentials: true,
    baseURL: "https://api.aitrix.online/api/",
})


export const MainPageApi = {
    getServicesList() {
        return instance.get(`contents/services/`)
    },
    getTecnologyList() {
        return instance.get(`contents/technology/`)
    },
    getReviewsList() {
        return instance.get(`contents/reviews/`)
    },
    sendOrderData(orderData) {
        return instance.post(`feedback/add/`, orderData)
    }
};
