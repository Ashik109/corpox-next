"use client";

import Link from "next/link";
import { useState } from "react";

type ShopQuantityActionsProps = {
  cartHref: string;
};

function ShopQuantityActions({ cartHref }: ShopQuantityActionsProps) {
  const [quantity, setQuantity] = useState(3);

  return (
    <div className="quantity-area">
      <div className="cart-edit">
        <div className="quantity-edit">
          <input
            type="text"
            className="input"
            value={quantity}
            onChange={(event) => {
              const nextValue = Number.parseInt(event.target.value, 10);
              setQuantity(Number.isNaN(nextValue) ? 1 : Math.max(1, nextValue));
            }}
          />
          <span className="button-area">
            <button className="button minus" type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
              <i className="feather-minus"></i>
            </button>
            <button className="button plus" type="button" onClick={() => setQuantity((value) => value + 1)}>
              <i className="feather-plus"></i>
            </button>
          </span>
        </div>
      </div>
      <Link href={cartHref} className="tmp-btn btn-primary btn-two">Add to cart</Link>
      <Link href={cartHref} className="wishlist-btn"><i className="feather-heart"></i></Link>
    </div>
  );
}

export default ShopQuantityActions;
