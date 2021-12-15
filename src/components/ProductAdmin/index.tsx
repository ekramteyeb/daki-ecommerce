import { Card } from "react-bootstrap"
import CustomButton from "../Button"
import Carousel from "../Carousel"
import ProductType from '../../types/product'

import './style.scss'
import { Link } from "react-router-dom"
 type PropTypes = { 
   product : ProductType ,
   handleAdd?: () => void,
   handleLike? : () => void
} 
export default function Product({product:{
  id,
  name, 
  category,
  color,
  productCode, 
  price, 
  productionYear, 
  rating, 
  warranty, 
  modelType, 
  techInfo,
  image,
  amount,
  users
  
},
handleAdd,
handleLike
}:PropTypes){
  return (
    <div className='product__admin__div'>
      <Card className='product__admin__card'>
        <Carousel className="admin__carousel" image={image} height='22vh' />
        <Card.Body className="admin__card__body">
          <div className="admin__card__details">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            Price {price} € <br/>
              {/*  {rating} <i className="fa fa-star" aria-hidden="true"></i><br/> */}
              Available: {amount}
            </Card.Text>
          </div>
          <div className="admin__card__buttons">
            <Link to={`#`}><CustomButton color="info" text="Edit" /></Link>{'-'}
            <Link to={`/products/${id}`}><CustomButton color="info" text="Detail" /></Link>{'- '}
            <Link to={`#`}><CustomButton color="danger" text="Delet" /></Link>{'- '}
            <CustomButton color="success" onClick={handleAdd} width={80} text="cart"/>
          </div>
        </Card.Body>
      </Card>
    </div>
      
  )
}

/* <div className='product'>
       <Carousel image={image}/>
      <hr></hr>
      <h3>{name}</h3>
      <p>{category}</p>
      <p>{productCode}</p>
      <p>{price} euro </p>
      <p>Produced in : {productionYear}</p>
      <p>rating {rating }</p>
      <Button variant="info">{name}</Button>
    </div> */

