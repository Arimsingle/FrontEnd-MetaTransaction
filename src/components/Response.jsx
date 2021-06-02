import "../sass/components/response.scss"
import { useSelector } from "react-redux";
import { useState } from "react";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
const Response = () => {
    const sigResponse = useSelector((state) => state.SignatureResponse);
    console.log(sigResponse);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Modal title="Response" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>signature  {sigResponse.signature ? <span style={{ color: "#26cd75" }}>{sigResponse.signature}</span> : <span style={{ color: "red" }}>unknow</span>}</p>
                <hr />
                <p>account <br /> {sigResponse.account ? <span style={{ color: "#26cd75" }}>{sigResponse.account}</span> : <span style={{ color: "red" }}>unknow</span>}</p>
                <hr />
                <p>hash message   {sigResponse.messageHash ? <span style={{ color: "#26cd75" }}>{sigResponse.messageHash}</span> : <span style={{ color: "red" }}>unknow</span>}</p>
                <hr />
                <p>hash message   {sigResponse.recoverSigner ? <span style={{ color: "#26cd75" }}>{sigResponse.recoverSigner}</span> : <span style={{ color: "red" }}>unknow</span>}</p>
            </Modal>
            <div className="response">
                <div>
                    <div className="response__background label left" onClick={showModal}>
                        <p>Response</p>
                    </div>
                </div>
                <div>
                    <div className="response__background label right">
                        <p>balance : {sigResponse.balance ? sigResponse.balance : "you mast transact signature before"}</p>
                    </div>
                    <div className="response__background value right">
                        <p>ARIMA</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Response;