"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

const orderItems = [
  { id: 1, title: "Solar Energy Audits: Optimizing Your", image: "cart-01.webp", price: 500 },
  { id: 2, title: "Xolar Energy Audits: Optimizing Your", image: "cart-02.webp", price: 500 },
  { id: 3, title: "Solar Energy Audits: Optimizing Your", image: "cart-03.webp", price: 500 },
];

const countries = ["Bangladesh", "Australia", "Canada", "United Kingdom (UK)", "United States (US)"];
const districts = ["Dhaka", "Chattogram", "Khulna", "Rajshahi", "Sylhet"];
const paymentMethods = [
  {
    value: "bank",
    label: "Direct Bank Transfer",
    description: "Make your payment directly into our bank account. Please use your Order ID as the payment reference.",
  },
  {
    value: "check",
    label: "Check Payments",
    description: "Send your payment by check. Your order will be processed after the payment is confirmed.",
  },
  {
    value: "cash",
    label: "Cash On Delivery",
    description: "Pay with cash when your order is delivered to your shipping address.",
  },
  {
    value: "paypal",
    label: "Paypal",
    description: "Pay securely using your PayPal account or a supported card through PayPal.",
  },
];

function money(amount: number) {
  return `$${amount.toFixed(2)}`;
}

function CheckoutPageClient({ cartHref }: { cartHref: string }) {
  const [couponOpen, setCouponOpen] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [payment, setPayment] = useState("bank");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [message, setMessage] = useState("");

  const subtotal = useMemo(() => orderItems.reduce((total, item) => total + item.price, 0), []);
  const discount = couponApplied ? subtotal * 0.1 : 0;
  const shipping = 50;
  const total = subtotal - discount + shipping;

  const applyCoupon = () => {
    const valid = coupon.trim().toLowerCase() === "corpox10";
    setCouponApplied(valid);
    setMessage(valid ? "Coupon applied successfully." : "Use coupon code CORPOX10 for 10% off.");
  };

  const placeOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(termsAccepted ? "Order placed successfully. We will contact you soon." : "Please accept terms and conditions before placing the order.");
  };

  return (
    <div className="checkout-area-main-wrapper-left pb--60">
      <div className="container">
        <form className="row g-5" onSubmit={placeOrder}>
          <div className="col-lg-7">
            <div className="full-grid">
              <div className="login-area"><span>Returning customers? <Link href="/login">Click here to login</Link></span></div>
              <div className="coupon-toggle">
                <div id="accordion" className="accordion">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <div className="card-title">
                        <span>Have a coupon?</span>
                        <button className="accordion-toggle" type="button" aria-expanded={couponOpen} aria-controls="collapseOne" onClick={() => setCouponOpen((open) => !open)}>
                          Click here to enter your code
                        </button>
                      </div>
                    </div>
                    <div id="collapseOne" className={`collapse${couponOpen ? " show" : ""}`} aria-labelledby="headingOne">
                      <div className="card-body">
                        <p>If you have a coupon code, please apply it below.</p>
                        <div className="coupon-code-input">
                          <input type="text" name="coupon_code" placeholder="Coupon code" value={coupon} onChange={(event) => setCoupon(event.target.value)} />
                        </div>
                        <button className="add-btn tmp-btn btn-primary border-0" type="button" onClick={applyCoupon}>Apply Coupon</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="billing-fields">
                <div className="checkout-title"><h3>Billing details</h3></div>
                <div className="form-content-box">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12"><div className="form-group"><label htmlFor="fname">First Name *</label><input id="fname" name="fname" className="form-control-mod" type="text" required /></div></div>
                    <div className="col-md-6 col-sm-12 col-xs-12"><div className="form-group"><label htmlFor="lname">Last Name *</label><input id="lname" name="lname" className="form-control-mod" type="text" required /></div></div>
                  </div>
                  <div className="row"><div className="col-md-12 col-sm-12 col-xs-12"><div className="form-group"><label htmlFor="cname">Company name (optional)</label><input id="cname" name="cname" className="form-control-mod" type="text" /></div></div></div>
                  <div className="row"><div className="col-md-12 col-sm-12 col-xs-12"><div className="form-group"><label htmlFor="country">Country / Region *</label><select id="country" name="country" className="d-block" required defaultValue="Bangladesh">{countries.map((country) => <option value={country} key={country}>{country}</option>)}</select></div></div></div>
                  <div className="row"><div className="col-md-12 col-sm-12 col-xs-12"><div className="form-group"><label htmlFor="hnumber">Street address *</label><input id="hnumber" name="hnumber" className="form-control-mod margin-bottom" type="text" placeholder="House number and street name" required /><input id="hnumber-2" name="apartment" className="form-control-mod" type="text" placeholder="Apartment, suite, unit etc. (optional)" /></div></div></div>
                  <div className="row"><div className="col-md-12 col-sm-12 col-xs-12"><div className="form-group"><label htmlFor="city">Town / City *</label><input id="city" name="city" className="form-control-mod" type="text" required /></div></div></div>
                  <div className="row"><div className="col-md-12 col-sm-12 col-xs-12"><div className="form-group"><label htmlFor="district">District *</label><select id="district" name="district" className="d-block" required defaultValue="Dhaka">{districts.map((district) => <option value={district} key={district}>{district}</option>)}</select></div></div></div>
                  <div className="row"><div className="col-md-12 col-sm-12 col-xs-12"><div className="form-group"><label htmlFor="pcode">Postcode / ZIP (optional)</label><input id="pcode" name="pcode" className="form-control-mod" type="text" /></div></div></div>
                  <div className="row"><div className="col-md-12 col-sm-12 col-xs-12"><div className="form-group"><label htmlFor="number">Phone *</label><input id="number" name="number" className="form-control-mod" type="tel" required /></div></div></div>
                  <div className="row"><div className="col-md-12 col-sm-12 col-xs-12"><div className="form-group"><label htmlFor="email">Email address *</label><input id="email" name="email" className="form-control-mod" type="email" required /></div></div></div>
                  <div className="row"><div className="col-md-12 col-sm-12 col-xs-12"><div className="form-group"><label htmlFor="notes">Order Notes</label><textarea name="notes" className="form-control-mod" id="notes"></textarea></div></div></div>
                  <div className="row"><div className="col-md-12 col-sm-12 col-xs-12"><div className="form-group"><Link href={cartHref} className="tmp-btn btn-primary border-0">Update Cart</Link></div></div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 pl--30 pl_sm--10">
            <div className="order-area-single-card">
              <h4 className="title">Your Order</h4>
              <div className="order-wrapper">
                <div className="shipping-area cart-total"><p>PRODUCTS</p><div className="right"><p>PRICE</p></div></div>
                {orderItems.map((item) => (
                  <div className="shipping-area cart-total" key={item.id}>
                    <div className="product-info"><div className="image-area"><img src={`/assets/images/shop/${item.image}`} alt="" /></div><div className="text"><h6>{item.title}</h6></div></div>
                    <div className="right"><p className="price">{money(item.price)}</p></div>
                  </div>
                ))}
                <div className="shipping-area cart-total"><p>Subtotal</p><div className="right"><p className="price">{money(subtotal)}</p></div></div>
                {couponApplied && <div className="shipping-area cart-total"><p>Discount</p><div className="right"><p className="price">-{money(discount)}</p></div></div>}
                <div className="shipping-area cart-total"><p>Shipping</p><div className="right"><p className="price"><span>Flat rate:</span> {money(shipping)}</p></div></div>
                <div className="shipping-area cart-total border-0"><p className="cb">Total Price:</p><div className="right"><p className="price cg">{money(total)}</p></div></div>
                <div className="transfer-area">
                  {paymentMethods.map((method) => (
                    <div className={`payment-accordion-item${payment === method.value ? " active" : ""}`} key={method.value}>
                      <label className="option">
                        <input type="radio" name="payment" checked={payment === method.value} onChange={() => setPayment(method.value)} />
                        <span className="checkmark"></span>
                        {method.label}
                      </label>
                      <div className="payment-accordion-body">
                        <p className="desc">{method.description}</p>
                      </div>
                    </div>
                  ))}
                  <p className="desc last">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                  <div className="terms-conditions"><label className="checkbox-label"><input type="checkbox" checked={termsAccepted} onChange={(event) => setTermsAccepted(event.target.checked)} /><span> I have read and agree terms and conditions *</span></label></div>
                  <button type="submit" className="tmp-btn btn-primary border-0">Place Order</button>
                  {message && <p className="mt--20">{message}</p>}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutPageClient;
