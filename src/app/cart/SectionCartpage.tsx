import Link from 'next/link'
function SectionCartpage() {
  return (
    <>
      <div className="tmp-our-cart-area-start pt--30 tmp-section-gapBottom">
      <div className="container">
      <div className="row">
      <div className="col-lg-12 mb--30">
      <div className=" cart-top-area">
      <p className="text">Add <span>$59.69</span> to cart and get free shipping</p>
      <div className="progress-area"></div>
      </div>
      </div>
      <div className="col-lg-8">
      <div className="cart-table table-responsive-md table-responsive-sm">
      <table>
      <thead>
      <tr>
      <th>Products</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>SubTotal</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>
      <div className="product-info">
      <div className="image-area">
      <img src="/assets/images/shop/cart-01.webp" alt="" />
      </div>
      <div className="text">
      <p>Solar Energy Audits: Optimizing</p>
      <span>LGt:BG-123</span>
      </div>
      </div>
      </td>
      <td>
      <span className="price">$550.00</span>
      </td>
      <td>
      <div className="quantity-edits">
      <input type="text" className="input" value="1" />
      <span className="button-area">
      <button className="button plus"><i className="feather-plus"></i></button>
      <button className="button minus"><i className="feather-minus"></i></button>
      </span>
      </div>
      </td>
      <td>
      <span className="price">$550.00</span>
      </td>
      <td>
      <button className="remove-btn">x</button>
      </td>
      </tr>
      <tr>
      <td>
      <div className="product-info">
      <div className="image-area">
      <img src="/assets/images/shop/cart-02.webp" alt="" />
      </div>
      <div className="text">
      <p>Solar Ener gy Lober Laptop Battery</p>
      <span>LPG:KT-326</span>
      </div>
      </div>
      </td>
      <td>
      <span className="price">$550.00</span>
      </td>
      <td>
      <div className="quantity-edits">
      <input type="text" className="input" value="1" />
      <span className="button-area">
      <button className="button plus"><i className="feather-plus"></i></button>
      <button className="button minus"><i className="feather-minus"></i></button>
      </span>
      </div>
      </td>
      <td>
      <span className="price">$550.00</span>
      </td>
      <td>
      <button className="remove-btn">x</button>
      </td>
      </tr>
      <tr>
      <td>
      <div className="product-info">
      <div className="image-area">
      <img src="/assets/images/shop/cart-03.webp" alt="" />
      </div>
      <div className="text">
      <p>Solar Revolution Mornlayes Moders</p>
      <span>25K:LLX-321</span>
      </div>
      </div>
      </td>
      <td>
      <span className="price">$550.00</span>
      </td>
      <td>
      <div className="quantity-edits">
      <input type="text" className="input" value="1" />
      <span className="button-area">
      <button className="button plus"><i className="feather-plus"></i></button>
      <button className="button minus"><i className="feather-minus"></i></button>
      </span>
      </div>
      </td>
      <td>
      <span className="price">$550.00</span>
      </td>
      <td>
      <button className="remove-btn">x</button>
      </td>
      </tr>
      </tbody>
      </table>
      <div className="cart-footer">
      <form action="#">
      <input type="text" placeholder="Cupon Code" required className="coupon-input" />
      <button className="apply-coupon tmp-btn btn-primary">Apply Coupon</button>
      </form>
      <button className="clear-all tmp-btn btn-border">Clear All</button>
      </div>
      </div>
      </div>
      <div className="col-lg-4 mt_md--30 mt_sm--30">
      <div className="cart-total-area">
      <div className="cart-total">
      <h6 className="title">Cart Totals</h6>
      </div>
      <div className="shipping-area cart-total">
      <p>Subtotal</p>
      <div className="right">
      <h6 className="title">$1299.00</h6>
      </div>
      </div>
      <div className="shipping-area cart-total">
      <p>Shipping</p>
      <div className="right">
      <div className="custom-options">
      <label className="option">
      <input type="checkbox" name="shipping" checked />
      <span className="checkmark"></span>
                                                  Flat Rate
                                              </label>
      <label className="option">
      <input type="checkbox" name="shipping" />
      <span className="checkmark"></span>
                                                  Free Shipping
                                              </label>
      <label className="option">
      <input type="checkbox" name="shipping" />
      <span className="checkmark"></span>
                                                  Local Pickup
                                              </label>
      </div>
      <p>Shipping Option Will Be in Australia</p>
      <Link href="#" className="calc">Calculate Shipping</Link>
      </div>
      </div>
      <div className="shipping-area border-0 cart-total">
      <p>Total</p>
      <div className="right">
      <h6 className="title">$1299.00</h6>
      </div>
      </div>
      <div className="button-area">
      <Link href="/checkout" className="checkout-btn tmp-btn btn-primary">Proceed To Checkout</Link>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default SectionCartpage
