import axios from 'axios';
import { useSelector } from "react-redux";
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import { useEffect, useState } from "react";
const Response = () => {
    const sigResponse = useSelector((state) => state.SignatureResponseReducer);
    const hashResponse = useSelector((state) => state.HashResponseReducer);
    const recoverResponse = useSelector((state) => state.RecoverResponseReducer);
    const [balance, setBalance] = useState(0);
    const getBalance = async () => {
        await axios.post("http://localhost:3000/api/balance", { account: sigResponse.account }).then(res => {
            setBalance(res.data.balance)
        })
    }
    useEffect(() => {
        getBalance()
    }, [balance, sigResponse])
    const response = () => {
        Modal.info({
            title: 'Response',
            content: (
                <div>
                    <p>signature <br /> {sigResponse.signature ? <span style={{ color: "#26cd75" }}>{sigResponse.signature}</span> : <span style={{ color: "red" }}>unknow</span>}</p>
                    <hr />
                    <p>account <br /> {sigResponse.account ? <span style={{ color: "#26cd75" }}>{sigResponse.account}</span> : <span style={{ color: "red" }}>unknow</span>}</p>
                    <hr />
                    <p>hash message <br />  {hashResponse.hashMessage ? <span style={{ color: "#26cd75" }}>{hashResponse.hashMessage}</span> : <span style={{ color: "red" }}>unknow</span>}</p>
                </div>
            ),
            onOk() { },
        });
    }
    const resultTransaction = () => {
        Modal.info({
            title: 'Result of transaction',
            content: (
                <div>
                    <p>from <br /> {recoverResponse.recoverSigner ? <span style={{ color: "#26cd75" }}>{recoverResponse.recoverSigner}</span> : <span style={{ color: "red" }}>unknow</span>}</p>
                    <hr />
                    <p>to <br /> {sigResponse.to ? <span style={{ color: "#26cd75" }}>{sigResponse.to}</span> : <span style={{ color: "red" }}>unknow</span>}</p>
                    <hr />
                    <p>amount <br /> {sigResponse.amount ? <span style={{ color: "#26cd75" }}>{sigResponse.amount}</span> : <span style={{ color: "red" }}>unknow</span>}</p>
                </div>
            ),
            onOk() { },
        });
    }

    return (
        <>
            <div className="response">
                <div className="response__wrapper">
                    <div className="response__background label left" onClick={response}>
                        <p>Response</p>
                    </div>
                    <div className="response__background label left" onClick={resultTransaction} style={{ marginTop: "8px" }}>
                        <p>Result Transaction</p>
                    </div>
                </div>
                <div className="balance__wrapper">
                    <div className="response__background label right balance">
                        <p>balance : {balance ? balance : <span style={{ color: "red" }}>unknow</span>}</p>
                    </div>
                    <div className="response__background value right">
                        <p>Meta transfer simulator</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Response;