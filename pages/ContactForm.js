import emailjs from "emailjs-com";
import Head from 'next/head'
import Image from 'next/image'
import whatsapp from '../public/images/whatsapp.png'
import Loader from '../components/Loader';
export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_a7ig5vj', 'template_5mipgzv', e.target, 'user_FqpqgfibDaKCa9ntDdSum')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
             <Head>
             <title>Omar Mokhtar-Contact</title>
           </Head>
           <Loader/>
           <div className="container">
           
           <div className="page__container">

           <div className="mainpagetitle"  data-aos="fade-in" data-aos-duration="500">
           Contact
            </div>

            <form onSubmit={sendEmail} className="bg-white p-5 contact" data-aos="fade-up" data-aos-duration="2000">

                <div className="d-flex align-items-center justify-content-between w-100">
                    
                <div className="form-group w-100 m-2 mt-3 mb-5">
                                <label>
                                    Name <span className="requierd">*</span>
                                    </label>
                 <input type="text" className="form-control"  name="name"/>
                </div>


                <div className="form-group w-100 m-2 mt-3 mb-5">
                                <label>
                                Email Address<span className="requierd">*</span>
                                    </label>
                                            <input type="email" className="form-control"  name="email"/>
                </div>

                    </div>
                        <div className=" form-group m-2 mt-3 mb-5">
                        <label>
                        Subject<span className="requierd">*</span>
                         </label>
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className=" form-group m-2 mt-3 mb-5">
                        <label>
                        Your message<span className="requierd">*</span>
                         </label>
                            <textarea className="form-control" id="" cols="30" rows="8"  name="message"></textarea>
                        </div>
                        <div className="pt-3 mx-auto m-2">
                            <input type="submit" className="btn " value="Send Message"></input>
                        </div>
                </form>

                    <div className="whatsapp">
                        <p>Contact me via WhatsApp</p>
                                <div className="whimage">
                                <a  href="http://wa.me/966535468309" >     <Image  alt="MyImage"  src={whatsapp}  layout="responsive" /></a>
                                </div>
                    </div>
              
              
              
                </div>
                </div>

          
        </div>
    )
}