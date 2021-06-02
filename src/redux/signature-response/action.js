export const SigResponseActions = (responseObj) => {
    if (responseObj) {
        return {
            type: 'GET_RESPONSES', payload: responseObj
        }
    }
    else {
        return {}
    }
    // console.log(responseObj.constructor.name);
    // switch (responseObj) {
    //     case responseObj.account:
    //         console.log("passed");
    //         return {
    //             type: 'GET_ACCOUNT', payload: responseObj.account
    //         };
    //     case "balance":
    //         return {
    //             type: 'GET_BALANCE', payload: responseObj.balance
    //         };
    //     case "signature":
    //         return {
    //             type: 'GET_SIGNATURE', payload: responseObj.signature
    //         };
    //     case "messageHash":
    //         return {
    //             type: 'GET_HASHMESSAGE', payload: responseObj.messageHash
    //         };
    //     case "to":
    //         return {
    //             type: 'GET_TO', payload: responseObj.to
    //         };
    // }
    // getAccount: (account) => ({ type: 'GET_ACCOUNT', payload: account }),
    // getBalance: (balance) => ({ type: 'GET_BALANCE', payload: balance }),
    // getSignature: (signature) => ({ type: 'GET_SIGNATURE', payload: signature }),
    // getMessageHash: (messageHash) => ({ type: 'GET_HASHMESSAGE', payload: messageHash }),
    // getTo: (to) => ({ type: 'GET_TO', payload: to }),
};
