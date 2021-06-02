export const SignatureResponse = (signatureResponse = {}, { type, payload }) => {
    switch (type) {
        case "GET_RESPONSES":
            return {
                ...signatureResponse,
                account: payload.account,
                balance: payload.balance,
                signature: payload.signature,
                messageHash: payload.messageHash,
                to: payload.to,
                recoverSigner: payload.recoverSigner
            };
        default:
            return signatureResponse;
    }
};