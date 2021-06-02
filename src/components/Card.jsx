import "../sass/components/card.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputsService } from "../redux/services";
const Card = ({ titles, placeholder }) => {
    const dispatch = useDispatch();
    const inputs = useSelector((state) => state.inputsReducer);
    console.log(inputs);
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
                    <div className="button">
                        <p>Transact</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;