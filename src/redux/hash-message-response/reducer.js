export const HashResponseReducer = (hashResponse = {}, { type, payload }) => {
    switch (type) {
        case "GET_RESPONSE":
            return {
                ...hashResponse,
                hashMessage: payload.hashMessage,
            };
        default:
            return hashResponse;
    }
};