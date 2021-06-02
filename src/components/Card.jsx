import "../sass/components/card.scss";
import { useSelector, useDispatch } from "react-redux";
import { inputsService } from "../redux/services";
import { useEffect } from "react";
import axios from 'axios';
const Card = ({ titles, placeholder, path }) => {
    const dispatch = useDispatch();
    const inputs = useSelector((state) => state.inputsReducer);
    const sendRequests = async (inputs, path) => {
        switch (path) {
            case "/":
                await axios.post("http://localhost:3000/api/signature", inputs)
                    .then(res => {
                        console.log(res);
                        console.log(res.data);
                    })
                break;
            case "/meta-transfer":
                await axios.post("http://localhost:3000/api/meta-transfer", inputs)
                    .then(res => {
                        console.log(res);
                        console.log(res.data);
                    })
                break;
            case "/hash-message":
                await axios.post("http://localhost:3000/api/hash-message", inputs)
                    .then(res => {
                        console.log(res);
                        console.log(res.data);
                    })
                break;
            case "/recover-signer":
                await axios.post("http://localhost:3000/api/recover-signer", inputs)
                    .then(res => {
                        console.log(res);
                        console.log(res.data);
                    })
                break;

            default:
                break;
        }
    }
    return (
        <>
            <div className="card">
                <div className="card__background">
                    <ul>
                        {titles.map((title, index) => {
                            return <li key={index}>{title}</li>
                        })}
                    </ul>
                    <div className="input">
                        {placeholder.map((text, index) => {
                            return <input key={index} placeholder={text} onChange={(e) => dispatch(inputsService(e, placeholder[index]))} />
                        })}
                    </div>
                    <div className="button" onClick={() => sendRequests(inputs, path)}>
                        <p>Transact</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;