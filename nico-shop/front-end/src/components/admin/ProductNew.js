import { useState } from "react"
import { Form } from "react-router-dom";

const ProductNew = ({ searchParams, setSearchParams, title, onSave }) => {
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

    const onClose = () => {
        setSearchParams({});
        setShow(false);
    };

    return (
        <Modal show={show} onHide={onClose}>
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
        </Modal>
    );
};