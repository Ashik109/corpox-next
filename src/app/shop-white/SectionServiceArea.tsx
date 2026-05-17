import Link from 'next/link'
function SectionServiceArea() {
  return (
    <>
      <div className="main-content">
      <div className="shop-page-area-main-wrapper tmp-section-gap">
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
      <div className="tmp-section-title-border text-center">
      <div className="pres-line-separator-wrapper text-center mb--10">
      <div className="line-separator line-left"></div>
      <span className="subtitle">
      <span className="number">04</span>
      <span className="subtitle-text">Our Shop</span>
      </span>
      <div className="line-separator line-right"></div>
      </div>
      <h2 className="title w-700 tmp-title-split">Find And Buy Your Product</h2>
      </div>
      </div>
      </div>
      <div className="row g-5 pt--60">
      <div className="col-lg-4">
      <div className="blog-details-right-sidebar-standard">
      <div className="single-card-widget tmponhover search">
      <form action="#">
      <input type="text" placeholder="Looking for..." required />
      <button><i className="feather-search"></i></button>
      </form>
      </div>
      <div className="single-card-widget tmponhover recent-post">
      <h4 className="title-main">Popular Products</h4>
      <div className="recent-post-sm">
      <div className="signle-list-card">
      <Link href="#" className="thumbnail shop-thumb">
      <img src="/assets/images/shop/01.webp" alt="" />
      </Link>
      <div className="inner-content">
      <Link href="#">
      <h6 className="title">Consulting Project</h6>
      </Link>
      <span className="date">$1200</span>
      </div>
      </div>
      <div className="signle-list-card">
      <Link href="#" className="thumbnail shop-thumb">
      <img src="/assets/images/shop/02.webp" alt="" />
      </Link>
      <div className="inner-content">
      <Link href="#">
      <h6 className="title">Management Project</h6>
      </Link>
      <span className="date">%18000</span>
      </div>
      </div>
      <div className="signle-list-card">
      <Link href="#" className="thumbnail shop-thumb">
      <img src="/assets/images/shop/03.webp" alt="" />
      </Link>
      <div className="inner-content">
      <Link href="#">
      <h6 className="title">Proper Business in your Path</h6>
      </Link>
      <span className="date">$399</span>
      </div>
      </div>
      <div className="signle-list-card">
      <Link href="#" className="thumbnail shop-thumb">
      <img src="/assets/images/shop/04.webp" alt="" />
      </Link>
      <div className="inner-content">
      <Link href="#">
      <h6 className="title">Consulting Project</h6>
      </Link>
      <span className="date">$268</span>
      </div>
      </div>
      </div>
      </div>
      <div className="single-card-widget tmponhover categories">
      <h4 className="title-main">Categories</h4>
      <ul className="categorys-widget-stndard">
      <li>
      <Link href="/shop-details-white">Your Best Pages for SEO</Link>
      </li>
      <li>
      <Link href="/shop-details-white">Needs a Business Consultant</Link>
      </li>
      <li>
      <Link href="/shop-details-white">Consulting in Transformation</Link>
      </li>
      <li>
      <Link href="/shop-details-white">Business Consulting</Link>
      </li>
      <li>
      <Link href="/shop-details-white">Business Consulting Coaching</Link>
      </li>
      </ul>
      </div>
      <div className="single-card-widget tmponhover tags">
      <h4 className="title-main">Tags</h4>
      <ul className="tags-wrapper-standard">
      <li><Link href="#">Advice</Link></li>
      <li><Link href="#">Business</Link></li>
      <li><Link href="#">Teach</Link></li>
      <li><Link href="#">Consulting</Link></li>
      <li><Link href="#">Learn</Link></li>
      <li><Link href="#">Groth</Link></li>
      <li><Link href="#">News</Link></li>
      <li><Link href="#">Advice</Link></li>
      <li><Link href="#">Projects</Link></li>
      <li><Link href="#">Prople</Link></li>
      <li><Link href="#">Clients</Link></li>
      <li><Link href="#">Advice</Link></li>
      </ul>
      </div>
      </div>
      </div>
      <div className="col-lg-8">
      <div className="right-content-area-shop">
      <div className="shop-filter-area mb--30">
      <p>Showing 1-9 of 19 results</p>
      <select className="form-select" aria-label="Default select example">
      <option selected>Default sorting</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      </select>
      </div>
      <div className="row g-5">
      <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="product-wrapper-shop-main-card tmponhover">
      <div className="image-area">
      <img className="main" src="/assets/images/shop/01.webp" alt="" />
      <span className="tag new">New</span>
      <div className="popup-area">
      <Link href="#" className="wishlist"><img src="/assets/images/shop/heart.svg" alt="" /></Link>
      <Link href="#" className="repeat"><img src="/assets/images/shop/repeat.svg" alt="" /></Link>
      <Link href="#" className="view"><img src="/assets/images/shop/eye.svg" alt="" /></Link>
      </div>
      </div>
      <div className="content">
      <h6 className="title"><Link href="/shop-details-white">Solar Panel Boards stop&nbsp;</Link></h6>
      <p className="price">$99 <span>$390</span></p>
      <div className="star-rating">
      <ul>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      </ul>
      <p className="stock">In Stock: 42</p>
      </div>
      <div className="button-area">
      <Link href="javascript:void(0)" className="tmp-btn cart-btn btn-primary">Add To Cart <i className="feather-shopping-cart"></i></Link>
      </div>
      </div>
      </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="product-wrapper-shop-main-card tmponhover">
      <div className="image-area">
      <img className="main" src="/assets/images/shop/02.webp" alt="" />
      <span className="tag new">New</span>
      <div className="popup-area">
      <Link href="#" className="wishlist"><img src="/assets/images/shop/heart.svg" alt="" /></Link>
      <Link href="#" className="repeat"><img src="/assets/images/shop/repeat.svg" alt="" /></Link>
      <Link href="#" className="view"><img src="/assets/images/shop/eye.svg" alt="" /></Link>
      </div>
      </div>
      <div className="content">
      <h6 className="title"><Link href="/shop-details-white">Solar Panel Boards stop&nbsp;</Link></h6>
      <p className="price">$100 <span>$500</span></p>
      <div className="star-rating">
      <ul>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      </ul>
      <p className="stock">In Stock: 99</p>
      </div>
      <div className="button-area">
      <Link href="javascript:void(0)" className="tmp-btn cart-btn btn-primary">Add To Cart <i className="feather-shopping-cart"></i></Link>
      </div>
      </div>
      </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="product-wrapper-shop-main-card tmponhover">
      <div className="image-area">
      <img className="main" src="/assets/images/shop/03.webp" alt="" />
      <span className="tag new">New</span>
      <div className="popup-area">
      <Link href="#" className="wishlist"><img src="/assets/images/shop/heart.svg" alt="" /></Link>
      <Link href="#" className="repeat"><img src="/assets/images/shop/repeat.svg" alt="" /></Link>
      <Link href="#" className="view"><img src="/assets/images/shop/eye.svg" alt="" /></Link>
      </div>
      </div>
      <div className="content">
      <h6 className="title"><Link href="/shop-details-white">Hook Panel Boards stop&nbsp;</Link></h6>
      <p className="price">$99 <span>$250</span></p>
      <div className="star-rating">
      <ul>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      </ul>
      <p className="stock">In Stock: 49</p>
      </div>
      <div className="button-area">
      <Link href="javascript:void(0)" className="tmp-btn cart-btn btn-primary">Add To Cart <i className="feather-shopping-cart"></i></Link>
      </div>
      </div>
      </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="product-wrapper-shop-main-card tmponhover">
      <div className="image-area">
      <img className="main" src="/assets/images/shop/04.webp" alt="" />
      <span className="tag new">New</span>
      <div className="popup-area">
      <Link href="#" className="wishlist"><img src="/assets/images/shop/heart.svg" alt="" /></Link>
      <Link href="#" className="repeat"><img src="/assets/images/shop/repeat.svg" alt="" /></Link>
      <Link href="#" className="view"><img src="/assets/images/shop/eye.svg" alt="" /></Link>
      </div>
      </div>
      <div className="content">
      <h6 className="title"><Link href="/shop-details-white">Bags Panel Boards stop&nbsp;</Link></h6>
      <p className="price">$100 <span>$300</span></p>
      <div className="star-rating">
      <ul>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      </ul>
      <p className="stock">In Stock: 38</p>
      </div>
      <div className="button-area">
      <Link href="javascript:void(0)" className="tmp-btn cart-btn btn-primary">Add To Cart <i className="feather-shopping-cart"></i></Link>
      </div>
      </div>
      </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="product-wrapper-shop-main-card tmponhover">
      <div className="image-area">
      <img className="main" src="/assets/images/shop/05.webp" alt="" />
      <span className="tag new">New</span>
      <div className="popup-area">
      <Link href="#" className="wishlist"><img src="/assets/images/shop/heart.svg" alt="" /></Link>
      <Link href="#" className="repeat"><img src="/assets/images/shop/repeat.svg" alt="" /></Link>
      <Link href="#" className="view"><img src="/assets/images/shop/eye.svg" alt="" /></Link>
      </div>
      </div>
      <div className="content">
      <h6 className="title"><Link href="/shop-details-white">Sun Panel Boards stop&nbsp;</Link></h6>
      <p className="price">$100 <span>$390</span></p>
      <div className="star-rating">
      <ul>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      </ul>
      <p className="stock">In Stock: 150</p>
      </div>
      <div className="button-area">
      <Link href="javascript:void(0)" className="tmp-btn cart-btn btn-primary">Add To Cart <i className="feather-shopping-cart"></i></Link>
      </div>
      </div>
      </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="product-wrapper-shop-main-card tmponhover">
      <div className="image-area">
      <img className="main" src="/assets/images/shop/06.webp" alt="" />
      <span className="tag new">New</span>
      <div className="popup-area">
      <Link href="#" className="wishlist"><img src="/assets/images/shop/heart.svg" alt="" /></Link>
      <Link href="#" className="repeat"><img src="/assets/images/shop/repeat.svg" alt="" /></Link>
      <Link href="#" className="view"><img src="/assets/images/shop/eye.svg" alt="" /></Link>
      </div>
      </div>
      <div className="content">
      <h6 className="title"><Link href="/shop-details-white">Business Panel Boards stop&nbsp;</Link></h6>
      <p className="price">$100 <span>$500</span></p>
      <div className="star-rating">
      <ul>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      </ul>
      <p className="stock">In Stock: 19</p>
      </div>
      <div className="button-area">
      <Link href="javascript:void(0)" className="tmp-btn cart-btn btn-primary">Add To Cart <i className="feather-shopping-cart"></i></Link>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <nav className="mt--50">
      <ul className="tmp-pagination justify-content-center">
      <li><Link href="#" aria-label="Previous"><i className="feather-chevron-left"></i></Link></li>
      <li><Link href="#">1</Link></li>
      <li className="active"><Link href="#">2</Link></li>
      <li><Link href="#">3</Link></li>
      <li><Link href="#" aria-label="Next"><i className="feather-chevron-right"></i></Link></li>
      </ul>
      </nav>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default SectionServiceArea
