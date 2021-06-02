import axios from 'axios';
export const GetRequests = async (topic, value) => {
    switch (topic) {
        case "balance":
            await axios.post("http://localhost:3000/api/balance", value)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
            break;
        case "hash-message":
            await axios.post("http://localhost:3000/api/hash-message", value)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
            break;
        case "recover-signer":
            await axios.post("http://localhost:3000/api/recover-signer", value)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
            break;
        default:
            break;
    }
}