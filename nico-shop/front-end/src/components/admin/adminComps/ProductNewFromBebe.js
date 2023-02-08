import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Addproducts() {
  const init = {
    title: "",
    description: "",
    category: "",
    rating: 0,
    price: 0,
    brand: "",
    image: [],
    thumbImage: [],
  };

  const [productItem, setProductItem] = useState(init);

  const navigate = useNavigate();

  const onSave = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("saved");
        console.log(data);
        navigate("/admin/products");
      })
      .catch((err) => console.log(err));
  };

  const butsah = () => {
    navigate("/admin/products");
  };

  const sendFile = async (fieldName, files) => {
    // setLoading(true);
    console.log(files);

    const url = "https://api.cloudinary.com/v1_1/dqnmsk4qx/upload";

    const newArr = [];
    for (let i = 0; i < files[0].length; i++) {
      newArr.push(files[0][i]);
    }
    const promise = await Promise.all(
      newArr.map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("api_key", "677539896739988");
        formData.append("folder", "shop");
        formData.append("upload_preset", "c4o6fxma");

        return axios.post(url, formData);
      })
    );
    console.log(promise);

    const arr = [];

    promise.map((res) => {
      arr.push(res.data.secure_url);
    });

    if (fieldName == "image") {
      setProductItem({ ...productItem, image: arr });
    } else {
      setProductItem({ ...productItem, thumbImage: arr[0] });
    }

    // setLoading(false);
  };

  return (
    <div>
      <div>
        <h4>Add Product</h4>
      </div>
      <form>
        <div className="mb-3">
          <label>Бүтээгдэхүүний нэр</label>
          <input
            className="form-control"
            value={productItem.title}
            onChange={(e) => {
              setProductItem({ ...productItem, title: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className="mb-3">
          <label>Vne</label>
          <input
            className="form-control"
            value={productItem.price}
            onChange={(e) => {
              setProductItem({ ...productItem, price: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <input
            className="form-control"
            value={productItem.description}
            onChange={(e) => {
              setProductItem({ ...productItem, description: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className="mb-3">
          <select
            className="form-control"
            value={productItem.category}
            onChange={(e) => {
              setProductItem({ ...productItem, category: e.target.value });
            }}
          >
            <option value="0">Category</option>
            <option value="Shoes">Shoes</option>
            <option value="Hat">Hat</option>
            <option value="Hoodie">Hoodie</option>
          </select>
        </div>
        <div className="mb-3">
          <select
            className="form-control"
            value={productItem.brand}
            onChange={(e) => {
              setProductItem({ ...productItem, brand: e.target.value });
            }}
          >
            <option value="0">Brand</option>
            <option value="Alibaba">Alibaba</option>
            <option value="Gucci">Gucci</option>
            <option value="Mongol">Mongol</option>
            <option value="UBcub">UBcub</option>
            <option value="NBA">NBA</option>
            <option value="America">America</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Zurag</label>
          <input
            className="form-control"
            onChange={(e) => {
              console.log(e.target.files);

              const arr = [];

              arr.push(e.target.files);
              sendFile("thumbImage", arr);
            }}
            type="file"
            // onChange={(e) => {
            //   const url = "https://api.cloudinary.com/v1_1/dqnmsk4qx/upload";

            //   const formData = new FormData();

            //   let file = e.target.files[0];

            //   formData.append("file", file);
            //   formData.append("api_key", "677539896739988");
            //   formData.append("folder", "shop");
            //   formData.append("upload_preset", "c4o6fxma");

            //   axios
            //     .post(url, formData)
            //     .then((res) => {
            //       console.log(res);

            //       setProductItem({
            //         ...productItem,
            //         image: res.data.secure_url,
            //       });
            //     })
            //     .catch((err) => {
            //       console.log(err);
            //     });
            // }}
            // type="file"
            // multiple
          />
        </div>
        <div className="mb-3">
          <label>Slide Images</label>
          <input
            className="form-control"
            onChange={(e) => {
              console.log(e.target.files);

              const arr = [];

              arr.push(e.target.files);
              sendFile("images", arr);
            }}
            type="file"
            multiple
          />
        </div>
      </form>
      <div className="row gap-3">
        <button className="btn btn-primary col-1" onClick={onSave}>
          Save
        </button>
        <button className="btn btn-primary col-1" onClick={butsah}>
          Буцах
        </button>
      </div>
    </div>
  );
}