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
import figma from '../public/images/figma.png'
import miro from '../public/images/miro.png'

const Tools = () => {
    return(


        
        <div className="Tools mb-5" data-aos="fade-left" data-aos-duration="2000">
            <div className="skillscateg">
                            
                            <Image  alt="MyImage"  src={figma}/>
                            {/* <Image  alt="MyImage"  src="../public/images/photoshop.svg" width={50} height={50} /> */}
                            </div>

      
          <div className="skillscateg">
            <Image  alt="MyImage"  src={adobexd}/>
            {/* <Image  alt="MyImage"  src="../public/images/adobexd.png" width={50} height={50} /> */}
            </div>
          
            <div className="skillscateg">
                <Image  alt="MyImage"  src={illustratour}/>
                {/* <Image  alt="MyImage"  src="../public/images/illustratour.png" width={50} height={50}  /> */}
                </div>
            <div className="skillscateg">
              <Image  alt="MyImage"  src={photoshop}/>
              {/* <Image  alt="MyImage"  src="../public/images/photoshop.svg" width={50} height={50} /> */}
              </div>
            <div className="skillscateg">
              <Image  alt="MyImage"  src={html}/>
              {/* <Image  alt="MyImage"  src="public/images/html.png" width={50} height={50} /> */}
        </div>
        <div className="skillscateg">
        <Image  alt="MyImage"  src={css}/>
        {/* <Image  alt="MyImage"  src="../public/images/css.png" width={50} height={50} /> */}
        </div>
        <div className="skillscateg">
  
         <Image  alt="MyImage"  src={js}/>
         {/* <Image  alt="MyImage"  src="../public/images/js.png" width={50} height={50} /> */}
        </div>
        <div className="skillscateg">
            <Image  alt="MyImage"  src={reactjs}/>
            {/* <Image  alt="MyImage"  src="../public/images/reactjs.png" width={50} height={50} /> */}
            </div>
        <div className="skillscateg">
 
       <Image  alt="MyImage"  src={nextjs}/>
       {/* <Image  alt="MyImage"  src="../public/images/nextjs.png" width={50} height={50} /> */}
        </div>
    
       
        <div className="skillscateg">
       
       <Image  alt="MyImage"  src={gulpjs}/>
       {/* <Image  alt="MyImage"  src="../public/images/gulpjs.png" width={50} height={50}  objectFit='contain' /> */}
        </div>
       
       
                       
         

        </div>

    )
}
export default Tools