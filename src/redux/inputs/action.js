const InputsActions = (e, input) => {
    switch (input) {
        case "to":
            return {
                type: "TO_LABEL",
                payload: e.target.value
            };
        case "amount":
            return {
                type: "AMOUNT_LABEL",
                payload: e.target.value
            };
        case "nonce":
            return {
                type: "NONCE_LABEL",
                payload: e.target.value
            };
        case "signature":
            return {
                type: "SIGNATURE_LABEL",
                payload: e.target.value
            };
        case "hash":
            return {
                type: "HASH_LABEL",
                payload: e.target.value
            };
    };
};
export {
    InputsActions
}