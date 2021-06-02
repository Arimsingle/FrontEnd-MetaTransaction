export const inputsReducer = (inputs = {}, { type, payload }) => {
    switch (type) {
        case "TO_LABEL":
            return { ...inputs, to: payload };
        case "AMOUNT_LABEL":
            return { ...inputs, amount: payload };
        case "NONCE_LABEL":
            return { ...inputs, nonce: payload };
        case "SIGNATURE_LABEL":
            return { ...inputs, signature: payload };
        case "HASH_LABEL":
            return { ...inputs, hash: payload };
        default:
            return inputs;
    }
};