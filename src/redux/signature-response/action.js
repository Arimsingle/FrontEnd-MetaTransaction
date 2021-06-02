export const SigResponseActions = (responseObj) => {
    if (responseObj) {
        return {
            type: 'GET_RESPONSES', payload: responseObj
        }
    }
    else {
        return {}
    }
};
