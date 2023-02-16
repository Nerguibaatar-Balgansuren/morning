import React, { useContext } from "react";
import { CategoryContext } from "../context/context";

export function ProductCard({ item }) {
  const { categoryData } = useContext(CategoryContext);

  console.log(item);
  let nullImage =
    "https://cdn.shopify.com/s/files/1/0095/1205/8985/files/BLANK_INSIDE-min.jpeg?height=400&pad_color=fff&v=1614335962&width=400";

  return (
    <div class="card" style={{width: 18 + 'rem'}}>
      <img src={item.thumbImage ? item.thumbImage : nullImage} alt="img" />
      <div class="card-body">
        <h5 class="card-title">{item.productName}</h5>
        <span>
          {categoryData?.map((e) => {
            if (e) {
              if (e.id == item.categoryId) {
                return <span>{e.categoryName}</span>;
              }
            }
          })}
        </span>
        <h6 class="card-title">{item.price}$</h6>
        <button type="button" className="btn btn-warning">
            Add to Cart &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-bag-plus"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
            />
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
        </button>
        <p class="card-text">{item.description}</p>
      </div>
    </div>
  );
}
