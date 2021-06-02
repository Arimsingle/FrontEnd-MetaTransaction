import "../sass/components/card.scss";
import { useSelector, useDispatch } from "react-redux";
import {
    inputsService,
    SigResponseService,
    HashResponseService,
    RecoverResponseService
} from "../redux/services";
import { SendRequests } from "./services/send-requests";
import { useCallback } from "react";
import { message } from 'antd';
const Card = ({ titles, placeholder, path, value }) => {
    const dispatch = useDispatch();
    const inputs = useSelector((state) => state.inputsReducer);
    const sendRequestsCallback = useCallback(
        async () => {
            await SendRequests(inputs, path).then(
                (responseObj) => {
                    switch (path) {
                        case "/":
                            console.log(1);
                            console.log(responseObj);
                            if (responseObj.status == 200) {
                                dispatch(SigResponseService(responseObj));
                                message.success(responseObj.message);
                            }
                            else {
                                message.error(responseObj.message);
                            }
                            break;
                        case "/meta-transfer":
                            console.log(2);
                            if (responseObj.status == 200) {
                                dispatch(HashResponseService(responseObj))
                                message.success(responseObj.message);

                            }
                            else {
                                message.error(responseObj.message);
                            }
                            break;
                        case "/hash-message":
                            if (responseObj.status == 200) {
                                dispatch(HashResponseService(responseObj))
                                message.success(responseObj.message);
                            }
                            else {
                                message.error(responseObj.message);
                            }
                            break;
                        case "/recover-signer":
                            console.log(4);
                            if (responseObj.status == 200) {
                                dispatch(RecoverResponseService(responseObj))
                                message.success(responseObj.message);
                            }
                            else {
                                message.error(responseObj.message);
                            }
                            break;
                        default:
                            message.error("someting wrong ! please try again");
                            break;
                    }
                })
        }, [inputs, path, dispatch]);
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
                    <div className="button" onClick={() => sendRequestsCallback()}>
                        <p>Transact</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;