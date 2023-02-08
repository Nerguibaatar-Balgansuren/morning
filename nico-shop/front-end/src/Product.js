import React from 'react'
import Button from "reac-bootstrap/Button";
import { Form } from 'react-router-dom';


export default function Product() {
    const init = {
        price: "",

    }
    const [ProductItem, setProductItem] = useState(init);
  return (
    <div>
        <Form>
            <Form.Group>

            </Form.Group>
            <Form.Group>
                <From.Label>
                    Category
                </From.Label>
                <Form.group>
                    
                </Form.group>
            </Form.Group>
            
        </Form>
    </div>
  )
}
