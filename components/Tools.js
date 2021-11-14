import Image from 'next/image'
import html from '../public/images/html.png'
import css from '../public/images/css.png'
import js from '../public/images/js.png'
import nextjs from '../public/images/nextjs.png'
import reactjs from '../public/images/reactjs.png'
import vuejs from '../public/images/vuejs.png'
import gulpjs from '../public/images/gulpjs.png'
import adobexd from '../public/images/adobexd.png'
import illustratour from '../public/images/illustratour.png'
import photoshop from '../public/images/photoshop.svg'
import zeplin from '../public/images/zeplin.png'

const Tools = () => {
    return(


        
        <div className="Tools mb-5">
      

        <div className="skillscateg">
              <Image  alt="MyImage"  src={html}/>
        </div>
        <div className="skillscateg">
        <Image  alt="MyImage"  src={css}/>
        </div>
        <div className="skillscateg">
  
         <Image  alt="MyImage"  src={js}/>
        </div>
        <div className="skillscateg">
            <Image  alt="MyImage"  src={reactjs}/>
            </div>
        <div className="skillscateg">
 
       <Image  alt="MyImage"  src={nextjs}/>
        </div>
    
        <div className="skillscateg">
  
       <Image  alt="MyImage"  src={vuejs}/>
        </div>
        <div className="skillscateg">
       
       <Image  alt="MyImage"  src={gulpjs}/>
        </div>
        <div className="skillscateg">
        <Image  alt="MyImage"  src={adobexd}/>
        </div>

        <div className="skillscateg">
            <Image  alt="MyImage"  src={zeplin}/>
            </div>
        <div className="skillscateg">
  
                <Image  alt="MyImage"  src={illustratour}/>
                </div>
                <div className="skillscateg">
                            
                            <Image  alt="MyImage"  src={photoshop}/>
                            </div>
         

        </div>

    )
}
export default Tools