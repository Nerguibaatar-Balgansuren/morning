import { useState } from "react"
import { Form } from "react-router-dom";

const UserNew = ({ searchParams, setsearchParams, title, onSave}) => {
    const [shoe, setShow] = useState(searchParams && true);

    const init = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        email: "",
    };
    const [userItem, setUserItem] = useState(init);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isValid, setIsValid] = useState([]);

    const onClose = () => {
        setsearchParams({});
        setShow(false);
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <FormLabel>Lastname</FormLabel>
                        <FormControl
                            value={userItem.lastname}
                            onChange={(e) => {
                                setUserItem({ ...userItem, lastname: e.target.value});
                            }}
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <FormLabel>FirstName</FormLabel>
                        <FormControl
                            value={userItem.firstname}
                            onChange={(e) => {
                                setUserItem({ ...userItem, firstname: e.target.value});
                            }}
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <FormLabel>Username</FormLabel>
                        <FormControl 
                            value={userItem.username}
                            onChange={(e) => {
                                setUserItem({ ...userItem, username: e.target.value });
                            }}
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={userItem.password}
                            onChange={(e) => {
                                console.log(e.target.value);
                                setUserItem({ ...userItem, password: e.target.value });

                                const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])/g);
                                const regex1 = new RegExp(/(?=.*[!@#$%^&*])(?=.*[0-9])/g);
                                const regex2 = new RegExp(/(?=.{8.})/g);

                                const para = e.target.value;

                                console.log(regex.test(para));

                                const newArr = [];
                                newArr.push(
                                    regex.test(para),
                                    regex1.test(para),
                                    regex2.test(para)
                                );

                                setIsValid(newArr);
                            }}

                            type="text"
                        />
                        <div>
                            <ul>
                                <li style={{ color: isValid[0] ? "green" : "grey"}}>
                                     Must contain uppercase and lowercase letters
                                </li>
                                <li style={{ color: isValid[0] ? "green" : "grey"}}>
                                     Must contain numbers and special characters
                                </li>
                                <li style={{ color: isValid[0] ? "green" : "grey"}}>
                                     Must contain 8 or more characters
                                </li>
                            </ul>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl 
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <FormLabel>e-mail</FormLabel>
                        <FormControl 
                            value={userItem.email}
                            onChange={(e) => {
                                setUserItem({ ...userItem, email: e.target.value});
                            }}
                            type="email"
                        /> 
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        onClose();
                        onSave(userItem);
                    }}
                >
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
};