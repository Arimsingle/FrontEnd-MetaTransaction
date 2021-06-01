import "../sass/components/navbar.scss"

const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="nav__background">
                    <ul>
                        <li className="nav-link active">Signature</li>
                        <li className="nav-link">Meta-Transfer</li>
                        <li className="nav-link">Hash-Message</li>
                        <li className="nav-link">Recover-Signer</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar;