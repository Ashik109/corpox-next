import Link from 'next/link'
function SectionIClassFeatherMapI() {
  return (
    <>

      <div className="content">
      <h4 className="title w-600"><Link href="/service/management-leadership">Key Management</Link></h4>
      <p className="description mb--0">As you move to the cloud, you need to use new approaches to protect.</p>
      <div className="discover-btn">
      <Link className="tmp-btn mt--20 round btn-small btn-border hover-icon-reverse" href="/service/management-leadership">
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

export default SectionIClassFeatherMapI
