"use client";

import { useEffect, useState } from "react";

type ShopAddToCartButtonProps = {
  className?: string;
};

function ShopAddToCartButton({ className = "tmp-btn cart-btn btn-primary" }: ShopAddToCartButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!visible) return;

    const timeout = window.setTimeout(() => setVisible(false), 3000);
    return () => window.clearTimeout(timeout);
  }, [visible]);

  return (
    <>
      <button type="button" className={className} onClick={() => setVisible(true)}>
        Add To Cart <i className="feather-shopping-cart"></i>
      </button>
      {visible && (
        <div className="toast-container">
          <div className="toast show">Successfully added to cart</div>
        </div>
      )}
    </>
  );
}

export default ShopAddToCartButton;
