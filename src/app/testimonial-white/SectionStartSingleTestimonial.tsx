import Link from 'next/link'
function SectionStartSingleTestimonial() {
  return (
    <>
      <div className="testimonial-style-two">
      <div className="row align-items-center row--30">
      <div className="col-lg-5 col-md-4">
      <div className="thumbnail"><img className="w-100" src="/assets/images/testimonial/testimonial-dark-01.jpg" alt="Corporate Template" /></div>
      </div>
      <div className="col-lg-7 col-md-8">
      <div className="content mt_sm--40"><span className="form">USA</span>
      <p className="description">When taking on new projects, I primarily look for a strong visual and aesthetic alignment, as well as a meaningful personal connection.
                                                  </p>
      <div className="rating mb--15">
      <Link href="#" tabIndex={0}><img src="/assets/images/icons/stars.svg" alt="" /></Link>
      <Link href="#" tabIndex={0}><img src="/assets/images/icons/stars.svg" alt="" /></Link>
      <Link href="#" tabIndex={0}><img src="/assets/images/icons/stars.svg" alt="" /></Link>
      <Link href="#" tabIndex={0}><img src="/assets/images/icons/stars.svg" alt="" /></Link>
      <Link href="#" tabIndex={0}><img src="/assets/images/icons/stars.svg" alt="" /></Link>
      </div>
      <div className="client-info">
      <h4 className="title">Darun Due</h4>
      <h6 className="subtitle">Business Developer</h6>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="cal-lg-12"></div>
    </>
  )
}

export default SectionStartSingleTestimonial
