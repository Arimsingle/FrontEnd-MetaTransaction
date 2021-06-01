import "../sass/components/card.scss";
import { useState } from "react";
const Card = ({ titles, inputs }) => {
    // const [to, setTo] = useState("");
    // const [amount, setAmount] = useState("");
    // const [nonce, setNonce] = useState("");
    const [inputObj, setInputObj] = useState({
        to: "",
        amount: 0,
        nonce: 0,
        signature: "",
        hash: ""
    });
    console.log(inputObj);
    const handleOnChanged = (e, input) => {
        switch (input) {
            case "to":
                setInputObj({ ...inputObj, to: e.target.value });
                break;
            case "amount":
                setInputObj({ ...inputObj, amount: e.target.value });
                break;
            case "nonce":
                setInputObj({ ...inputObj, nonce: e.target.value });
                break;
            case "signature":
                setInputObj({ ...inputObj, signature: e.target.value });
                break;
            case "hash":
                setInputObj({ ...inputObj, hash: e.target.value });
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
                        {inputs.map((input, index) => {
                            return <input key={index} placeholder={input} onChange={(e) => handleOnChanged(e, inputs[index])} />
                        })}
                    </div>
                    <div className="button">
                        <p>Transact</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;