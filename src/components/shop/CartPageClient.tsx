"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

type CartItem = {
  id: number;
  title: string;
  sku: string;
  image: string;
  price: number;
  quantity: number;
};

const initialItems: CartItem[] = [
  { id: 1, title: "Solar Energy Audits: Optimizing", sku: "LGt:BG-123", image: "cart-01.webp", price: 550, quantity: 1 },
  { id: 2, title: "Solar Ener gy Lober Laptop Battery", sku: "LPG:KT-326", image: "cart-02.webp", price: 550, quantity: 1 },
  { id: 3, title: "Solar Revolution Mornlayes Moders", sku: "25K:LLX-321", image: "cart-03.webp", price: 550, quantity: 1 },
];

const shippingOptions = {
  flat: { label: "Flat Rate", price: 50 },
  free: { label: "Free Shipping", price: 0 },
  pickup: { label: "Local Pickup", price: 0 },
};

function money(amount: number) {
  return `$${amount.toFixed(2)}`;
}

function CartPageClient({ checkoutHref }: { checkoutHref: string }) {
  const [items, setItems] = useState(initialItems);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [shipping, setShipping] = useState<keyof typeof shippingOptions>("flat");
  const [notice, setNotice] = useState("");

  const subtotal = useMemo(() => items.reduce((total, item) => total + item.price * item.quantity, 0), [items]);
  const discount = couponApplied ? subtotal * 0.1 : 0;
  const shippingCost = items.length ? shippingOptions[shipping].price : 0;
  const total = subtotal - discount + shippingCost;
  const remaining = Math.max(1800 - subtotal, 0);

  const updateQuantity = (id: number, quantity: number) => {
    setItems((current) => current.map((item) => item.id === id ? { ...item, quantity: Math.max(1, quantity || 1) } : item));
  };

  const applyCoupon = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valid = coupon.trim().toLowerCase() === "corpox10";
    setCouponApplied(valid);
    setNotice(valid ? "Coupon applied successfully." : "Use coupon code CORPOX10 for 10% off.");
  };

  return (
    <div className="tmp-our-cart-area-start pt--30 tmp-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb--30">
            <div className="cart-top-area">
              <p className="text">
                {remaining ? <>Add <span>{money(remaining)}</span> to cart and get free shipping</> : <>You are eligible for <span>free shipping</span></>}
              </p>
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
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="product-info">
                          <div className="image-area"><img src={`/assets/images/shop/${item.image}`} alt="" /></div>
                          <div className="text"><p>{item.title}</p><span>{item.sku}</span></div>
                        </div>
                      </td>
                      <td><span className="price">{money(item.price)}</span></td>
                      <td>
                        <div className="quantity-edits">
                          <input
                            type="text"
                            className="input"
                            value={item.quantity}
                            inputMode="numeric"
                            aria-label={`${item.title} quantity`}
                            onChange={(event) => updateQuantity(item.id, Number(event.target.value.replace(/\D/g, "")))}
                          />
                          <span className="button-area">
                            <button className="button plus" type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}><i className="feather-plus"></i></button>
                            <button className="button minus" type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)}><i className="feather-minus"></i></button>
                          </span>
                        </div>
                      </td>
                      <td><span className="price">{money(item.price * item.quantity)}</span></td>
                      <td><button className="remove-btn" type="button" onClick={() => setItems((current) => current.filter((cartItem) => cartItem.id !== item.id))}>x</button></td>
                    </tr>
                  ))}
                  {!items.length && (
                    <tr>
                      <td className="cart-empty-cell" colSpan={5}>
                        <div className="product-info"><div className="text"><p>Your cart is empty.</p><span>Add products from the shop page.</span></div></div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="cart-footer">
                <form action="#" onSubmit={applyCoupon}>
                  <input type="text" placeholder="Coupon Code" required className="coupon-input" value={coupon} onChange={(event) => setCoupon(event.target.value)} />
                  <button className="apply-coupon tmp-btn btn-primary" type="submit">Apply Coupon</button>
                </form>
                <button className="clear-all tmp-btn btn-border" type="button" onClick={() => { setItems([]); setCouponApplied(false); setNotice("Cart cleared."); }}>Clear All</button>
              </div>
              {notice && <p className="mt--20">{notice}</p>}
            </div>
          </div>
          <div className="col-lg-4 mt_md--30 mt_sm--30">
            <div className="cart-total-area">
              <div className="cart-total"><h6 className="title">Cart Totals</h6></div>
              <div className="shipping-area cart-total"><p>Subtotal</p><div className="right"><h6 className="title">{money(subtotal)}</h6></div></div>
              {couponApplied && <div className="shipping-area cart-total"><p>Discount</p><div className="right"><h6 className="title">-{money(discount)}</h6></div></div>}
              <div className="shipping-area cart-total">
                <p>Shipping</p>
                <div className="right">
                  <div className="custom-options">
                    {Object.entries(shippingOptions).map(([key, option]) => (
                      <label className="option" key={key}>
                        <input type="radio" name="shipping" checked={shipping === key} onChange={() => setShipping(key as keyof typeof shippingOptions)} />
                        <span className="checkmark"></span>
                        {option.label}
                      </label>
                    ))}
                  </div>
                  <p>Shipping Option Will Be in Australia</p>
                  <Link href="#" className="calc">Calculate Shipping</Link>
                </div>
              </div>
              <div className="shipping-area border-0 cart-total"><p>Total</p><div className="right"><h6 className="title">{money(total)}</h6></div></div>
              <div className="button-area">
                <Link href={items.length ? checkoutHref : "#"} className="checkout-btn tmp-btn btn-primary" aria-disabled={!items.length}>Proceed To Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPageClient;
