import React, { useState } from "react";
import { Form } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../customHooks/useFetch";
import Products from "../../Products";

export default function   AddProduct({
    modalProduct,
  setModalProduct,
  searchParams,
  setSearchParams,
  title,
  setIsEdited
}) {
  const [show, setShow] = useState(searchParams && true);

  const init = {
    productName: "",
    categoryId: 0,
    price: 0,
    thumbImage: "",
    images: [],
    salePercent: 0,
    quantity: 0,
    desc: "",
  };

  const [productItem, setProductItem] = useState(init);
  const [err, setErr] = useState("");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const {response, error} = useFetch("http://localhost:8080/api/products", {});


  const onClose = () => {
    setSearchParams({});
    setShow(false);
  };
    

  const onSave = (e) => {
    // e.preventDefault();

    fetch("http://localhost:8080/api/products", {
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
        // navigate("/admin/products");
      })
      .catch((err) => console.log(err));
  };

  const sendFile = async (fieldName, files) => {
    console.log(files);

    const url = "https://api.cloudinary.com/v1_1/dauzova4d/upload";

    const newArr = [];
    for (let i = 0; i < files[0].length; i++) {
      newArr.push(files[0][i]);
    }
    const promise = await Promise.all(
      newArr.map((file) => {
        const formData = new FormData();

        formData.append("file", file);
        formData.append("api_key", 528295471864498);
        formData.append("folder", "shop");
        formData.append("upload_preset", "xtitxday");

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
  };

  return (
    <>
      {/* <div
        className="modal"
        style={{ display: modalProduct ? "block" : "none" }}
      >
        <div className="body">
          <div className="modal-header">
            <h1
              className="modal-title fs-5 text-warning mb-5 border-bottom"
              id="staticBackdropLabel"
            >
              Add product
            </h1>
            <button
              type="button"
              className="btn-close"
              onClick={() => {
                setModalProduct(!modalProduct);
                setIsEdited(false);
              }}
              aria-label="Close"
            ></button>
          </div> */}
          <div className="d-flex flex-column col text-start">
            <div className="col d-flex gap-3 mb-2 justify-content-between">
              <label>Product Name</label>
              <input
                className="w-75"
                value={productItem?.productName}
                type="text"
                onChange={(e) =>
                  setProductItem({ ...productItem, productName: e.target.value })
                }
              ></input>
            </div>

            <div className="col d-flex gap-3 mb-2 justify-content-between">
              <label>Discount</label>
              <input
                className="w-75"
                value={productItem?.salePercent}
                type="number"
                onChange={(e) =>
                  setProductItem({ ...productItem, salePercent: e.target.value })
                }
              ></input>
            </div>

            <div className="col d-flex gap-3 mb-2 justify-content-between">
              <label>Price</label>
              <input
                className="w-75"
                value={productItem?.price}
                type="number"
                onChange={(e) =>
                  setProductItem({ ...productItem, price: e.target.value })
                }
              ></input>
            </div>

            <div className="col d-flex gap-3 mb-2 justify-content-between">
              <label>Quantity</label>
              <input
                className="w-75"
                value={productItem?.quantity}
                type="number"
                onChange={(e) =>
                  setProductItem({ ...productItem, quantity: e.target.value })
                }
              ></input>
            </div>

            <div className="col gap-5 mb-2 justify-content-between">
              <div className="d-flex justify-content-between col-12 mb-2 mt-2">
                <label>Thumbnail</label>
                <input
                  className="w-50"
                  type="file"
                  onChange={(e) => {
                    console.log(e.target.files);
                    const arr = [];
                    arr.push(e.target.files);
                    sendFile("thumbimage", arr);
                  }}
                ></input>
              </div>
              <div className="d-flex justify-content-between col-12 mt-2 mb-2">
                <label>Images</label>
                <input
                  className="w-50"
                  type="file"
                  multiple
                  onChange={(e) => {
                    console.log(e.target.files);
                    const arr = [];
                    arr.push(e.target.files);

                    sendFile("images", arr);
                  }}
                ></input>
              </div>
            </div>
            <div className="col d-flex gap-3 mb-2 justify-content-between">
              <label>Created user</label>
              <select
                className="w-75"
                value={productItem?.createdUser}
                onChange={(e) =>
                  setProductItem({ ...productItem, createdUser: e.target.value })
                }
              >
                <option value="0">select</option>
                {user?.map((e, index) => {
                  if (e.userType == "admin") {
                    return <option value={index + 1}>{e.userName}</option>;
                  }
                })}
              </select>
            </div>
            <div className="col d-flex gap-3 mb-2 justify-content-between">
              <label>Description</label>
              <textarea
                className="w-75"
                value={productItem?.description}
                onChange={(e) =>
                  setProductItem({ ...productItem, description: e.target.value })
                }
              ></textarea>
            </div>
            <button
              onClick={() => {
                onSave();
                // setModalProduct(false);
                navigate("admin/products");
              }}
              className="btn btn-primary"
            >
              save
            </button>
          </div>
        {/* </div>
      </div> */}
      {/* <Modal show={show} onHide={onClose}>
            <Modal.header closeButton>
                <Modal.title>{title}</Modal.title>
            </Modal.header>
            <Modal.body>
                <Form>
                    <Form.Group className="mb-3">
                        <FormLabel>Product Name</FormLabel>
                        <FormControl 
                            value={productItem.productName}
                            onChange={(e) => {
                                setProductItem({
                                    ...productItem,
                                    productName: e.target.value,
                                });
                            }}
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <FormLabel>Picture</FormLabel>
                        <FormControl 
                            onChange={(e) => {
                                console.log(e.target.files);

                                const url = "https://api.cloudinary.com/v1_1/dhwfof0wr/upload";

                                const formData = new FormData();

                                let file = e.target.files[0];
                                formData.append("file", file);
                                formData.append("api_key", "952991779626734");
                                formData.append("folder", "shop");
                                formData.append("upload_preset", "dhwfof0wr");

                                axios
                                    .post(url, formData)
                                    .then((res) => {
                                        console.log(res);

                                        setProductItem({
                                            ...productItem,
                                            thumbImage: res.data.secure_url,
                                        });
                                    })
                                    .catch((err) => console.log(err));
                            }}
                            type="file"
                            multiple
                        />
                    </Form.Group>
                </Form>
            </Modal.body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={()=> {
                        onClose();
                        onSave(productItem);
                    }}
                    >
                    Save
                </Button>
            </Modal.Footer>
        </Modal> */}
    </>
  );
}
