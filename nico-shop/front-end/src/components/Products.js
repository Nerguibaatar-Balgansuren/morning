import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Products() {
    const navigate = useNavigate();
  return (
    <div>
        <h2>Product List</h2>
        <button>Add Product</button>
    </div>
  )
}
