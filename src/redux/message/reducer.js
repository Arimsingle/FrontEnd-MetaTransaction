export const message = (message = ["Hello Redux"], { type, payload }) => {
    switch (type) {
        case "SHOW_MESSAGE":
            return [...message, payload];
        default:
            return message;
    }
};