import Link from 'next/link'

const Nav = () => {
    return(
        <div className="navBg">
        <div className="container">
                    <nav className="navbar navbar navbar-expand-lg  px-3">
                <a href="/" className="navbar-brand" >Omar Mokhtar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="flex-row-reverse collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                                <li className="nav-item active">
                                <a href="/" className="nav-link" >Home</a>
                                </li>
                                <li className="nav-item">
                                <a href="/About" className="nav-link" >About</a>
                                </li>
                                <li className="nav-item">
                                <a href="/Projects" className="nav-link" >Projects</a>
                                </li>
                                <li className="nav-item">
                                <a href="/contact" className="nav-link" >Contact</a>
                                </li>
                            </ul>
                    </div>
                </nav>
        </div>
        </div>

    )
}
export default Nav