// import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import Nav from './Nav'
import Footer from './Footer'
const Layouts = ({ children }) => {
    return(
      <div className="wrapper " >
        <Nav />
                {children} 
              
        <Footer />
        <Analytics />
        </div>
    )
}
export default Layouts