import React from 'react'
import '../Item/Item.css'

function Item(props) {
    return (
        <div className="item">
            <img src={props.image} alt="image" />
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-prices-new">
                    {props.new_price}
                </div>
            </div>
            <div className="item-price-old">
                {props.old_price}
            </div>
        </div>
    )
}

export default Item