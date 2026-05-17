import Link from 'next/link'
function SectionSingleCard() {
  return (
    <>
      <div className="tmp-box-card card-style-default testimonial-style-one variation-2 tmponhover">
      <div className="inner">
      <div className="content">
      <div className="rating mb--15">
      <Link href="#"><img src="/assets/images/icons/stars.svg" alt="" /></Link>
      <Link href="#"><img src="/assets/images/icons/stars.svg" alt="" /></Link>
      <Link href="#"><img src="/assets/images/icons/stars.svg" alt="" /></Link>
      <Link href="#"><img src="/assets/images/icons/stars.svg" alt="" /></Link>
      <Link href="#"><img src="/assets/images/icons/stars.svg" alt="" /></Link>
      </div>
      <p className="description">Lorem ipsum, dolor sit amet consectetur adipi sicing elit. Asperiores accusamus eum consequuntur pari atur lauda ntium odit there.</p>
      <div className="content-bottom">
      <div className="thumbnail">
      <img src="/assets/images/testimonial/testimonial-01.jpg" alt="Corporate Template" />
      </div>
      <div className="main-content">
      <h2 className="title">Sr Janen Sara</h2>
      <h6 className="subtitle">inversweb.com</h6>
      </div>
      </div>
      </div>
      </div>
      </div>

    </>
  )
}

export default SectionSingleCard
