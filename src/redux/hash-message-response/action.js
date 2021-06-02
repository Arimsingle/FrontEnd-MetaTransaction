export const HashResponseActions = (responseObj) => {
    if (responseObj) {
        return {
            type: 'GET_RESPONSE', payload: responseObj
        }
    }
    else {
        return {}
    }
};
