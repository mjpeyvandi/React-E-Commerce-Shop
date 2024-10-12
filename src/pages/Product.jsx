import React from 'react'
import { useLocation } from 'react-router-dom'

export const Product = () => {
  const location = useLocation()
  const {id} = location.state
  return (
    <div>Product</div>
  )
}
