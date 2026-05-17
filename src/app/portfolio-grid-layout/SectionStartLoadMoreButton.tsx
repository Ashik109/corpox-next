import Link from 'next/link'
function SectionStartLoadMoreButton() {
  return (
    <>
      <div className="row row--15">
      <div className="col-lg-12">
      <div className="tmp-load-more d-flex justify-content-center mt--60">
      <Link className="tmp-btn btn-large hover-icon-reverse" href="#">
      <span className="icon-reverse-wrapper">
      <span className="btn-text">Load More</span>
      <span className="btn-icon"><i className="feather-loader"></i></span>
      <span className="btn-icon"><i className="feather-loader"></i></span>
      </span>
      </Link>
      </div>
      </div>
      </div>



    </>
  )
}

export default SectionStartLoadMoreButton
