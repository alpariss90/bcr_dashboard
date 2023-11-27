import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `http://172.16.0.40:3500/`
    })
}