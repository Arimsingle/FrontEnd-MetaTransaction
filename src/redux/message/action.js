const Message = (message) => {
    return {
        type: "SHOW_MESSAGE",
        payload: message
    };
};
export default {
    Message,
};