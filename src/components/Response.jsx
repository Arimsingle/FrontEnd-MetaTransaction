import "../sass/components/response.scss"
const Balance = () => {
    return (
        <>
            <div className="response">
                <div>
                    <div className="response__background label left">
                        <p>Signature</p>
                    </div>
                    <div className="response__background value left">
                        <p>account</p>
                    </div>
                </div>
                <div>
                    <div className="response__background label right">
                        <p>Balance</p>
                    </div>
                    <div className="response__background value right">
                        <p>3000</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Balance;