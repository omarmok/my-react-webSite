import Link from "next/link"
import { useRouter } from 'next/dist/client/router'
import { route } from 'next/dist/server/router'
import Image from 'next/image'
import mylogo from '../public/images/mylogo.png'

const Nav = () => {
    const router = useRouter()
    console.log(router);
    return(
        <div className="navBg">
        <div className="container">
                <nav className="navbar navbar navbar-expand-lg  px-3 d-flex justify-content-between">
              <div className="d-flex align-items-center brand">

                  <Link href="/">
                <a
                  className="navbar-brand"
                >
               <Image  alt="MyImage"  src={mylogo}/>
                </a>
              </Link>



                <div className="navtitle">UI/UX Designer</div></div>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="navbg-container" >
                <ul className="navbar-nav ">
                <li className="nav-item">
              <Link href="/">
                <a
                  className={
                    "nav-link " + `${router.pathname === "/" ? "active" : ""}`
                  }
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/About">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/About" ? "active" : ""}`
                  }
                >
                  About
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/Projects">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/Projects" ? "active" : ""}`
                  }
                >
                  Projects
                </a>
              </Link>
            </li>


            <li className="nav-item">
              <Link href="/ContactForm">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/ContactForm" ? "active" : ""}`
                  }
                >
                  Contact
                </a>
              </Link>
            </li>




                            </ul>
                    </div>
                </nav>
        </div>
        </div>

    )
}
export default Nav