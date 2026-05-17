import Link from 'next/link'
function AboutGetInTouch() {
  return (
    <section className="tmp-get-in-touch-area area-2 tmp-section-gapTop">
      <div className="container">
        <div className="section-inner">
          <div className="left-image">
            <img src="/assets/images/contact/get-bg.webp" width={420} alt="" />
          </div>
          <div className="content">
            <div className="icon">
              <Link href="tel:+00449922097788"><i className="feather-phone" /></Link>
            </div>
            <div className="text">
              <h4 className="title">Have Any Questions? Call Us free</h4>
              <Link href="tel:+00449922097788" className="phone">+00449922097788</Link>
              <p className="desc">
                As the world&apos;s largest producer of business service agency, Corpox stands at the
                forefront of the Business sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutGetInTouch
