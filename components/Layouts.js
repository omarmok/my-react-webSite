
import Nav from './Nav'
import Footer from './Footer'
const Layouts = ({ children }) => {
    return(
      <div className="wrapper " >
        <Nav />
                {children} 

        <Footer />
        </div>
    )
}
export default Layouts