import Link from 'next/link'
import ShopDetailsImageSlider from '../../components/shop/ShopDetailsImageSlider'
import ShopQuantityActions from '../../components/shop/ShopQuantityActions'
import ShopDetailsTabs from '../../components/shop/ShopDetailsTabs'
function SectionServiceArea() {
  return (
    <>
      <div className="main-content">
      <div className="shop-page-area-main-wrapper tmp-section-gapTop pb--60">
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
      <div className="tmp-section-title-border text-center">
      <div className="pres-line-separator-wrapper text-center mb--10">
      <div className="line-separator line-left"></div>
      <span className="subtitle">
      <span className="number">04</span>
      <span className="subtitle-text">Shop Details</span>
      </span>
      <div className="line-separator line-right"></div>
      </div>
      <h2 className="title w-700 tmp-title-split">Product Details</h2>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="shop-details-area-start tmp-section-gapBottom">
      <div className="container">
      <div className="row g-5">
      <div className="col-lg-5 mb_sm--50">
      <div className="thumbnail-product-swip-area">
      <ShopDetailsImageSlider />
      </div>
      </div>
      <div className="col-lg-7">
      <div className="tmp-single-product__content">
      <div className="tmp-woocommerce-product-rating woocommerce-product-rating">
      <ul className="tmp-rating-icon">
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      </ul>
      <Link href="#reviews" className="woocommerce-review-link" rel="nofollow">(1.1k Reviews)</Link>
      </div>
      <h6 className="tmp-single-product_title">Monocrystalline Business Panels</h6>
      <div className="woocommerce-Price-amount amount">
      <bdi><span className="woocommerce-Price-currencySymbol">Price: $60.00</span></bdi>
      </div>
      <div className="woocommerce-product-details__short-description">
      <p className="mb--20">Indignation and dislike men who are so beguiled &amp; demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound. </p>
      <p className="mb--20">Indignation and dislike men who are so beguiled &amp; demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound. </p>
      </div>
      <div className="product_meta">
      <ul>
      <li className="posted_in">SKU:<span> Monocrystalline Business Panels </span></li>
      <li className="sku_wrapper">Category:<span> Business Panels</span></li>
      <li className="sku_wrapper">Tag:<span> Business Panels , BusinessEnergy, BusinessPV</span></li>
      <li className="sku_wrapper">Services:<span> Free Shipping , Cash On Delivery</span></li>
      </ul>
      </div>
      <ShopQuantityActions cartHref="/cart" />
      </div>
      </div>
      </div>
      <ShopDetailsTabs />
      </div>
      </div>
    </>
  )
}

export default SectionServiceArea
