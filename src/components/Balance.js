import "../sass/components/balance.scss"
const Balance = () => {
    return (
        <>
            <div className="balance">
                <div className="balance__background label">
                    <p>Balance</p>
                </div>
                <div className="balance__background value">
                    <p>3000</p>
                </div>
            </div>
        </>
    )
}
export default Balance;