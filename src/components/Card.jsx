import "../sass/components/card.scss";
import { useSelector, useDispatch } from "react-redux";
import { inputsService } from "../redux/services";
import { SigResponseService } from "../redux/services";
import { SendRequests } from "./services/send-requests";
import { useCallback } from "react";
const Card = ({ titles, placeholder, path }) => {
    const dispatch = useDispatch();
    const inputs = useSelector((state) => state.inputsReducer);
    const sendRequestsCallback = useCallback(
        async () => {
            await SendRequests(inputs, path).then(
                 (responseObj) => {
                    // console.log(responseObj);
                    if (responseObj.status == 200) {
                        dispatch(SigResponseService(responseObj))
                        alert("success")
                    }
                    else {
                        alert("someting wrong ! please try again")
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