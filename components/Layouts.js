
import Nav from './Nav'

const Layouts = ({ children }) => {
    return(
      <div className="wrapper " >
        <Nav />
                {children} 
        </div>
    )
}
export default Layouts