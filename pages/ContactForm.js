import emailjs from "emailjs-com";
import Head from 'next/head'
import Image from 'next/image'
import whatsapp from '../public/images/whatsapp.png'
import Loader from '../components/Loader';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        // إرسال البيانات عبر EmailJS
        emailjs.sendForm(
            'service_a7ig5vj',      // Service ID
            'template_5mipgzv',     // Template ID
            e.target,               // النموذج
            'user_FqpqgfibDaKCa9ntDdSum' // User ID
        )
        .then((result) => {
            console.log("SUCCESS:", result.text);
            alert("✅ تم إرسال الرسالة بنجاح!");
            e.target.reset(); // إعادة تعيين النموذج بعد الإرسال الناجح
        }, (error) => {
            console.error("FAILED:", error.text);
            alert("❌ فشل إرسال الرسالة، يرجى إعادة توصيل Gmail أو التحقق من الإعدادات.");
        });
    }

    return(
        <div>
            <Head>
                <title>Omar Mokhtar - Contact</title>
            </Head>
            <Loader/>
            <div className="container">
                <div className="page__container">
                    <h1 className="mainpagetitle" data-aos="fade-in" data-aos-duration="500">
                        Contact
                    </h1>

                    <form onSubmit={sendEmail} className="bg-white p-5 contact" data-aos="fade-up" data-aos-duration="2000">

                        <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="form-group w-100 m-2 mt-3 mb-5">
                                <label>
                                    Name <span className="requierd">*</span>
                                </label>
                                <input type="text" className="form-control" name="name" required/>
                            </div>

                            <div className="form-group w-100 m-2 mt-3 mb-5">
                                <label>
                                    Email Address <span className="requierd">*</span>
                                </label>
                                <input type="email" className="form-control" name="email" required/>
                            </div>
                        </div>

                        <div className="form-group m-2 mt-3 mb-5">
                            <label>
                                Subject <span className="requierd">*</span>
                            </label>
                            <input type="text" className="form-control" name="subject" placeholder="Subject" required/>
                        </div>

                        <div className="form-group m-2 mt-3 mb-5">
                            <label>
                                Your message <span className="requierd">*</span>
                            </label>
                            <textarea className="form-control" name="message" cols="30" rows="8" required></textarea>
                        </div>

                        <div className="pt-3 mx-auto m-2">
                            <input type="submit" className="btn" value="Send Message"/>
                        </div>
                    </form>

                    <div className="whatsapp">
                        <p>Contact me via WhatsApp</p>
                        <div className="whimage">
                            <a href="http://wa.me/966535468309">
                                <Image alt="WhatsApp" src={whatsapp} layout="responsive"/>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
