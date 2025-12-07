import React from 'react';
import Image from 'next/image';
import Loader from '../components/Loader';

function Blog() {
  return (
    <div>
      <Loader />
      
      <div className="container">
        <div className="page__container">
        

          <div className="mycard d-flex flex-column" data-aos="fade-up" data-aos-duration="2000">
            {/* Hero Image */}
            <div className="hero-image-container mb-4">
              <Image 
                src="https://s3.eu-north-1.amazonaws.com/cdn-site.mediaplanet.com/app/uploads/sites/105/2021/09/08000229/MainImage_A9-888x500.jpg" 
                alt="Pity, Empathy, and Sympathy in UX Design - Understanding user experience design principles and emotional responses in design thinking" 
                width={800} 
                height={400}
                className="hero-image"
                quality={70}
                sizes="(min-width: 1200px) 60vw, (min-width: 768px) 80vw, 100vw"
                priority={false}
                style={{ 
                  objectFit: 'cover',
                  borderRadius: '8px',
                  width: '100%',
                  height: 'auto'
                }}
              />
            </div>
            
            {/* Blog Header */}
            <div className="blog-header mb-4">
              <h2 className="blog-title">Pity, Empathy, and Sympathy: Important Terms in User Experience</h2>
              <div className="d-flex align-items-center">
                <Image 
                  src="/images/omar.png" 
                  alt="Omar Mokhtar" 
                  width={40} 
                  height={40}
                  className="rounded-circle me-2"
                  style={{ objectFit: 'cover' }}
                />
                <small className="text-muted">By Omar Mokhtar</small>
              </div>
            </div>
            
            <div className="mycard__details flex-column">
              <p className='w-100 blog-content'>
                Important Terms in User Experience. In defining the terms, we saw that they are very similar to what was mentioned in the hadith of the Prophet, may God bless him and grant him peace, &quot;Whoever among you sees an evil, let him change it with his hand; if he is unable to do so, then with his tongue; if he is unable to do so, then with his heart, and that is the weakest of faith.&quot; We see clear guidance from our master the Prophet in dealing with problems.
              </p>
              
              <p className="w-100 blog-content">How do we connect them together? Let&apos;s come to the definitions:</p>
              
              <ul className="blog-list">
                <li>
                  1. Pity<br/>
                  Pity means noticing a problem or difficulty and feeling sorry for it but not taking action to solve it; it is just pity.<br/>
                  This is similar to &quot;in your heart,&quot; in which the hadith is described as the weakest level of response.<br/>
                  In user experience, pity doesn&apos;t make a big difference.<br/>
                  <em>Example:</em> If a designer notices that users are having difficulty using an application but doesn&apos;t do anything about it, that&apos;s just compassion.
                </li>
                
                <li>
                  2. Empathy<br/>
                  Empathy is understanding the problem and feeling sad or concerned for the person suffering from it, and trying to talk about it or take small steps to address it.<br/>
                  This is similar to &quot;change by the tongue&quot; as in hadith.<br/>
                  In UX, this means that the designer listens to the user&apos;s feedback and makes some adjustments, but these adjustments may not solve the problem entirely.<br/>
                  <em>UX example:</em> The designer listens to the user&apos;s complaints and makes small changes to the interface to make it easier, but these changes may be superficial or insufficient.
                </li>
                
                <li>
                  3. Sympathy<br/>
                  Sympathy is the highest level of responsiveness.<br/>
                  It means not only understanding the problem but also putting yourself in the user&apos;s shoes and feeling what they feel.<br/>
                  This is similar to &quot;change by the hand,&quot; the most powerful level of action mentioned in hadith.<br/>
                  In UX, empathy is what drives the designer to completely redesign the experience to better meet the users&apos; needs and solve their problems comprehensively.<br/>
                  <em>UX example:</em> The designer conducts deep research, tests the product as users do, and completely redesigns the application to solve all the problems that users face.
                </li>
              </ul>
              
        
              <h5 className='w-100'>Conclusion:</h5>
              <ul className="conclusion-list">
                <li className="mb-3"><strong>Pity:</strong> Just noticing the problem and feeling bad without taking action. This is similar to &quot;change by the heart.&quot;</li>
                <li className="mb-3"><strong>Empathy:</strong> Understanding the problem and trying to make small improvements. This is similar to &quot;change by the tongue.&quot;</li>
                <li className="mb-3"><strong>Sympathy:</strong> Deeply engaging with the problem and solving it from the ground up. This is like &quot;hand-shifting.&quot;</li>
              </ul>
              
              <p className="blog-content">
                As the talk goes, &quot;hand-shifting&quot; is the most powerful form of work. In UX, empathy is what enables designers to deliver the best possible experience because it drives them to truly understand the user&apos;s needs and fix problems at their root.
              </p>
              
              <p className="blog-content">
                Ultimately, to be successful UX designers, we must aim for work to deliver effective solutions rather than merely offering distant sympathy or pity.
              </p>
              
              <div className="arabic-text text-center mt-4">
                <p className="mb-1">(وما ينطق عن الهوى، إن هو إلا وحي يوحى)</p>
                <p>صلي الله عليه وسلم</p>
              </div>
              
              <div className="text-center mt-4">
                <a 
                  href="https://www.linkedin.com/posts/omarmokhtar22_ux-activity-7249664621257641984-Hwtv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAyBkfYBusmou5-gf08ENyka9h55cIflNbw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                  aria-label="Read the original LinkedIn post about empathy levels in UX"
                >
                  Read Original LinkedIn Post
                </a>
              </div>
            </div>
          </div>

          <div className="mycard d-flex flex-column" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
            {/* Hero Image */}
            <div className="hero-image-container mb-4">
              <Image 
                src="https://www.adobe.com/creativecloud/file-types/image/vector/media_1c840d54c0c6d35eb38bebd13dec2f908cf9a275e.png?width=2000&format=webply&optimize=medium" 
                alt="SVG in Web Development - Three methods comparison for scalable vector graphics implementation in modern web projects" 
                width={800} 
                height={400}
                className="hero-image"
                quality={70}
                sizes="(min-width: 1200px) 60vw, (min-width: 768px) 80vw, 100vw"
                style={{ 
                  objectFit: 'cover',
                  borderRadius: '8px',
                  width: '100%',
                  height: 'auto'
                }}
              />
            </div>
            
            {/* Blog Header */}
            <div className="blog-header mb-4">
              <h2 className="blog-title">SVG in Web Development: Three Methods Compared</h2>
              <div className="d-flex align-items-center">
                <Image 
                  src="/images/omar.png" 
                  alt="Omar Mokhtar" 
                  width={40} 
                  height={40}
                  className="rounded-circle me-2"
                  style={{ objectFit: 'cover' }}
                />
                <small className="text-muted">By Omar Mokhtar</small>
              </div>
            </div>
            
            <div className="mycard__details flex-column">
              <p className='w-100 blog-content'>
                As a UI/UX designer, I had an interesting discussion with our .NET and front-end developer about the best ways to use SVG in our web projects. After this, I decided to show them the differences between the three methods of using SVG.
              </p>
              
              <ul className="blog-list">
                <li>
                  1. SVG as Inline Code in HTML<br/>
                  Positives:<br/>
                  Direct Embedding: You can put SVG directly into your HTML using the &lt;svg&gt; tag. This is good for small icons or graphics.<br/>
                  Easy Styling: You can change the look of SVGs with CSS and JavaScript.<br/>
                  Faster Loading: It can reduce the number of files the browser needs to load.<br/>
                  <br/>
                  Defects:<br/>
                  Bigger HTML File: Large SVGs can make your HTML file bigger.<br/>
                  Complex HTML: Having many SVGs in HTML can make it hard to read and manage.
                </li>
                
                <li>
                  2. SVG as an Image<br/>
                  Positives:<br/>
                  Separate Files: Using the &lt;img&gt; tag with SVG keeps your HTML clean.<br/>
                  Browser Caching: The browser can save SVG files, so it loads faster next time.<br/>
                  Easy to Use: Simple to add to your web page.<br/>
                  <br/>
                  Defects:<br/>
                  Extra Request: The browser needs to load the SVG file separately, which can take a bit more time.<br/>
                  Less Flexible: You can&apos;t easily style or interact with the SVG like you can with inline SVG.
                </li>
                
                <li>
                  3. SVG as a Font (Icon Fonts)<br/>
                  Positives:<br/>
                  Scalable Icons: SVG fonts are great for icons that can change size without losing quality.<br/>
                  CSS Styling: You can change the color and size of SVG fonts with CSS.<br/>
                  Text-like Behavior: SVG fonts work like text, so they are easy to align and position.<br/>
                  <br/>
                  Defects:<br/>
                  Single Color: SVG fonts usually only support one color.<br/>
                  Accessibility Issues: SVG fonts are treated as text by screen readers, which can be tricky for accessibility.
                </li>
              </ul>
              
              <h5 className='w-100 mt-4'>Conclusion:</h5>
              <ul className="conclusion-list">
                <li className="mb-3"><strong>Inline SVG:</strong> Best for small icons and when you need full CSS/JS control, but can make HTML larger.</li>
                <li className="mb-3"><strong>SVG as Image:</strong> Good for clean HTML and browser caching, but less flexible for styling.</li>
                <li className="mb-3"><strong>SVG Fonts:</strong> Great for scalable icons with CSS styling, but limited to single color and accessibility issues.</li>
              </ul>
              
              <p className='w-100 mt-3 blog-content'>
                Each method has its own benefits and drawbacks. The choice depends on your specific project needs, performance requirements, and design goals. Understanding these differences helps make better decisions when implementing SVG in web projects.
              </p>
              
              <div className="text-center mt-4">
                <a 
                  href="https://www.linkedin.com/posts/omarmokhtar22_as-a-uiux-designer-i-had-an-interesting-activity-7219603541919682560-xFKF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAyBkfYBusmou5-gf08ENyka9h55cIflNbw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                  aria-label="Read the original LinkedIn post comparing SVG methods"
                >
                  Read Original LinkedIn Post
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
