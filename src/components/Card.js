import "../sass/components/card.scss"

const Card = () => {
    return (
        <>
            <div className="card">
                <div className="card__background">
                    <ul>
                        <li>Signature</li>
                        <li>Icon</li>
                    </ul>
                    <div className="input">
                        <input placeholder="to" />
                        <input placeholder="amount" />
                        <input placeholder="nonce" />
                    </div>
                    <div className="button">
                        <p>Transact</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;