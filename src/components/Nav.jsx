import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import "../sass/components/navbar.scss"
import Card from "./Card.jsx"
import {
    titlesSignature,
    titlesMetaTransfer,
    titlesHashMessage,
    titlesRecoverSigner,
    inputsSignature,
    inputsMetaTransfer,
    inputsHashMessage,
    inputsRecoverSigner
} from "./variables/card-variables"
const NavbarTransaction = () => {
    return (
        <>
            <Router>
                <div className="nav">
                    <div className="nav__background">
                        <ul>
                            <li>
                                <NavLink exact to="/" activeClassName="is-active" className="item-link">
                                    Signature
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/meta-transfer" activeClassName="is-active" className="item-link">
                                    Meta Transfer
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/hash-message" activeClassName="is-active" className="item-link">
                                    Hash Message
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/recover-signer" activeClassName="is-active" className="item-link">
                                    Recover Signer
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <Switch>
                    <Route exact path="/">
                        <Card
                            titles={titlesSignature}
                            placeholder={inputsSignature}
                            path="/"
                        />
                    </Route>
                    <Route path="/meta-transfer">
                        <Card
                            titles={titlesMetaTransfer}
                            placeholder={inputsMetaTransfer}
                            path="/meta-transfer"
                        />
                    </Route>
                    <Route path="/hash-message">
                        <Card
                            titles={titlesHashMessage}
                            placeholder={inputsHashMessage}
                            path="/hash-message"
                        />
                    </Route>
                    <Route path="/recover-signer">
                        <Card
                            titles={titlesRecoverSigner}
                            placeholder={inputsRecoverSigner}
                            path="/recover-signer"
                        />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
export default NavbarTransaction;