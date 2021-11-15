import Script from 'next/script'

const Loader = () => {
    return(


        
        <div >
     
     <div className="loader fadeoutt">


        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>

         <lottie-player className="loada" src="https://assets9.lottiefiles.com/packages/lf20_EchaWV.json" background="transparent" speed="1"  loop="" autoplay=""></lottie-player>

    	</div>
        </div>

    )
}
export default Loader