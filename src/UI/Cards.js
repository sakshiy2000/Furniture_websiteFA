import React from 'react'
import classes from './Cards.module.css'

const Cards = (props) => {
    return (
        <>
                {/* <div classname={`col-md-4 mt-4 ${classes.Cards}`} */}
                    <div className={`${classes.Cards}`}>
                        <img src={props.cover} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <hr/>
                            <p>Price:{props.price}</p>
                            {/* <p>Category:{props.category}</p> */}
                            <button className="btn btn-primary">View Product</button>

                        </div>
                    </div>
                {/* </div> */}
            
        </>
    )
}

export default Cards;