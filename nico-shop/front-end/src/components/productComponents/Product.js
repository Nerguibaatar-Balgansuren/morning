import "../style/Product.css";
import { productCard } from "../data/productCard";
import { useContext } from "react";
import { DataContext } from "../context/context";

export const Product = () => {
  const { filterData } = useContext(DataContext);

  function getData() {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.result);
      });
  }

  return (
    <>
      <span>Product</span>
      <h2>Our popular product</h2>
      <span>
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
        placerat nisi, adipiscing mauris non purus parturient.
      </span>
      <div className="products flex ">
        {filterData?.map((e, index) => (
          <div className="productCard" key={index}>
            <img
              src={e.thumbImage}
              alt=""
              style={{ height: "360px", width: "394px" }}
            />
            <span>{e.categoryId}</span>
            <h2>{e.productName}</h2>
            <span>{e.desc}</span>
            <span>{e.price}</span>
          </div>
        ))}
      </div>
    </>
  );
};
