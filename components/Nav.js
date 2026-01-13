import Link from "next/link"
import { useRouter } from 'next/router'
import Image from 'next/image'
import mylogo from '../public/images/mylogo.png'

const Nav = () => {
    const router = useRouter()
    return(
        <div className="navBg">
        <div className="container">
                <nav className="navbar navbar navbar-expand-lg  p-3 d-flex justify-content-between">
              <div className="d-flex align-items-center brand" data-aos="fade-right" data-aos-duration="2000" >
                  <Link href="/"  passHref  className="navbar-brand"  >
                  <Image
                    alt="Omar Mokhtar personal logo"
                    src={mylogo}
                    width={48}
                    height={48}
                    sizes="(min-width: 992px) 48px, 40px"
                    quality={70}
                    style={{ width: '100%', height: 'auto', maxWidth: 48 }}
                    loading="eager"
                  />
                 </Link>

                <div className="navtitle">UI/UX Designer</div></div>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="navbg-container" >
                <ul className="navbar-nav ">
                <li className="nav-item">
              <Link href="/" passHref  className={
                    "nav-link " + `${router.pathname === "/" ? "active" : ""}`
                  }
                  aria-current="page"  data-aos="fade-down" data-aos-duration="1000"   data-aos-delay="200">
                
                  Home
         
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/About" passHref className={
                    "nav-link " +
                    `${router.pathname === "/About" ? "active" : ""}`
                  } data-aos="fade-down" data-aos-duration="1000"   data-aos-delay="300">
               
               About
           
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/Projects" passHref  className={
                    "nav-link " +
                    `${router.pathname === "/Projects" ? "active" : ""}`
                  }  data-aos="fade-down" data-aos-duration="1000"   data-aos-delay="400">
                
                Work
              
              </Link>
            </li>


            <li className="nav-item">
              <Link href="/Blog" passHref className={
                    "nav-link " +
                    `${router.pathname === "/Blog" ? "active" : ""}`
                  }  data-aos="fade-down" data-aos-duration="1000"   data-aos-delay="500">
             
                  Blog
          
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/ContactForm" passHref className={
                    "nav-link " +
                    `${router.pathname === "/ContactForm" ? "active" : ""}`
                  }  data-aos="fade-down" data-aos-duration="1000"   data-aos-delay="600">
             
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
