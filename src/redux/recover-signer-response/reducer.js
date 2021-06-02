export const RecoverResponseReducer = (recoverResponse = {}, { type, payload }) => {
    switch (type) {
        case "GET_RESPONSE":
            return {
                ...recoverResponse,
                recoverSigner: payload.recoverSigner,
            };
        default:
            return recoverResponse;
    }
};