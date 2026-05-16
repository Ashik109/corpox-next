function SectionErrorAreaArea() {
  return (
    <>
      <div className="error-area ptb--200 ptb_sm--60 ptb_md--80">
      <div className="container">
      <div className="row align-item-center">
      <div className="col-lg-12">
      <div className="error-inner">
      <h1 className="theme-gradient w-700">404</h1>
      <h3 className="title w-700">Oops! That page can't be found.</h3>
      <p className="description">It looks like nothing was found at this location.
                                      Maybe try a search?</p>
      <form action="#" className="blog-search"><input type="text" placeholder="Search Here..." required /><button className="search-button">
      <i className="feather-search"></i>
      </button></form>
      <div className="view-more-button d-flex justify-content-center">
      <a className="tmp-btn btn-gradient hover-icon-reverse" href="/index">
      <span className="icon-reverse-wrapper">
      <span className="btn-text">Go Back Home</span>
      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
      </span>
      </a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

    </>
  )
}

export default SectionErrorAreaArea
