import Link from 'next/link'
function SectionIClassFeatherMoreHorizontalI() {
  return (
    <>
      <img src="/assets/images/services/icons/06.png" alt="service" />

      <div className="content">
      <h4 className="title w-600"><Link href="/service-details/management-leadership">& More</Link></h4>
      <p className="description mb--0">Access 8.5M+ <br /> vector icons & stickers</p>
      <div className="discover-btn">
      <Link className="tmp-btn mt--20 round btn-small btn-border hover-icon-reverse" href="/service-details/management-leadership">
      <span className="icon-reverse-wrapper">
      <span className="btn-text">Discover services</span>
      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
      </span>
      </Link>
      </div>
      </div>




    </>
  )
}

export default SectionIClassFeatherMoreHorizontalI
