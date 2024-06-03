import React from "react";
import ProductCard from "../Product-cards/ProductCard";
import "./Bestseller.css";

function BestSeller() {
  return (
    <div className="Bestseller">
      <header className="Bestseller-header">
        <p>Featured Products</p>
        <p className="bold">BESTSELLER PRODUCTS</p>
        <p>Problems trying to resolve the conflict between</p>
      </header>
      <main className="bestseller-body">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </main>
      <div>
        <button className="more">LOAD MORE PRODUCTS</button>
        <button className="less">SHOW LESS PRODUCTS</button>
      </div>
    </div>
  );
}

export default BestSeller;
