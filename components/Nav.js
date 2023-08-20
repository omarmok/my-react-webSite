import Link from "next/link"
import { useRouter } from 'next/dist/client/router'
// import { route } from 'next/dist/server/router'
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

                  <Link href="/"  className="navbar-brand">
         
                 
             
               <Image  alt="MyImage"  src={mylogo}/>
           
              </Link>



                <div className="navtitle">UI/UX Designer</div></div>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="navbg-container" >
                <ul className="navbar-nav ">
                <li className="nav-item">
              <Link href="/"  className={
                    "nav-link " + `${router.pathname === "/" ? "active" : ""}`
                  }
                  aria-current="page">
                
                  Home
         
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/About" className={
                    "nav-link " +
                    `${router.pathname === "/About" ? "active" : ""}`
                  }>
               
                  About
           
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/Projects"  className={
                    "nav-link " +
                    `${router.pathname === "/Projects" ? "active" : ""}`
                  }>
                
                  Projects
              
              </Link>
            </li>


            <li className="nav-item">
              <Link href="/ContactForm" className={
                    "nav-link " +
                    `${router.pathname === "/ContactForm" ? "active" : ""}`
                  }>
             
                  Contact
          
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