import Link from 'next/link'
function SectionOfficeBranch2() {
  return (
    <>
      <section className="tmp-office-branch tmp-section-gapBottom">
      <div className="container">
      <h2 className="title tmp-title-split">World Wide Headquarters</h2>
      <div className="section-inner pt--30 pt_md--30 pt_sm--30 d-flex gap-5 flex-column">
      <div className="branch-wrapper2 tmponhover" data-aos="slide-up" data-aos-duration="800" data-aos-delay="100">
      <div className="content">
      <h5 className="title">Corpox Kuala Lumpur</h5>
      <p className="desc">350 West Washington Street, Suite 600 <br /> Tempe, Arizona 85288 US</p>
      <Link href="/contact-white" className="tmp-btn btn-primary btn-two">Get Direction <i className="feather-arrow-right"></i></Link>
      </div>
      <div className="image-area">
      <img src="/assets/images/story/17.webp" width={645} alt="" />
      </div>
      </div>
      <div className="branch-wrapper2 tmponhover" data-aos="slide-up" data-aos-duration="800" data-aos-delay="100">
      <div className="content">
      <h5 className="title">North America Office(Maxico)</h5>
      <p className="desc">Corporativo Paseo Interlomas <br /> Av. Paseo de la Reforma 5009, Piso 16</p>
      <Link href="/contact-white" className="tmp-btn btn-primary btn-two">Get Direction <i className="feather-arrow-right"></i></Link>
      </div>
      <div className="image-area">
      <img src="/assets/images/story/18.webp" width={645} alt="" />
      </div>
      </div>
      <div className="branch-wrapper2 tmponhover" data-aos="slide-up" data-aos-duration="800" data-aos-delay="100">
      <div className="content">
      <h5 className="title">South America Office(Brazil)</h5>
      <p className="desc">Eldorado Business Tower <br /> Av Doutora Ruth Cardoso, 8501 – 17th Floor</p>
      <Link href="/contact-white" className="tmp-btn btn-primary btn-two">Get Direction <i className="feather-arrow-right"></i></Link>
      </div>
      <div className="image-area">
      <img src="/assets/images/story/19.webp" width={645} alt="" />
      </div>
      </div>
      <div className="branch-wrapper2 tmponhover" data-aos="slide-up" data-aos-duration="800" data-aos-delay="100">
      <div className="content">
      <h5 className="title">Europe and Africa Offices(Brussels)</h5>
      <p className="desc">Corpox Solar Manufacturing GmbH – Recycling Facility <br /> Marie-Curie-Straße 3</p>
      <Link href="/contact-white" className="tmp-btn btn-primary btn-two">Get Direction <i className="feather-arrow-right"></i></Link>
      </div>
      <div className="image-area">
      <img src="/assets/images/story/20.webp" width={645} alt="" />
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  )
}

export default SectionOfficeBranch2
