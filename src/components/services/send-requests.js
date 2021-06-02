import axios from 'axios';
export const SendRequests = async (inputs, path) => {
    // console.log(inputs,path)
    switch (path) {
        case "/":
            return await axios.post("http://localhost:3000/api/signature", inputs)
                .then(res => res.data)
        case "/meta-transfer":
            return await axios.post("http://localhost:3000/api/meta-transfer", inputs)
                .then(res => res.data)
        case "/hash-message":
            return await axios.post("http://localhost:3000/api/hash-message", inputs)
                .then(res => res.data)
        case "/recover-signer":
            return await axios.post("http://localhost:3000/api/recover-signer", inputs)
                .then(res => res.data)
    }
}