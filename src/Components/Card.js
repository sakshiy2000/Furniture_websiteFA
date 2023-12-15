import React from 'react'
import LivingDumData from '../LivingDumData'
import { useState } from 'react'

const Card = () => {

    const [data, setData] = useState(LivingDumData);

    const FilterItems = (enteredCategory) => {
        const updatedItems = LivingDumData.filter((current) => {
            return current.name === enteredCategory;
        });
        console.log(updatedItems);
        setData(updatedItems);
    }
    return (
        <>



            <div className='order-tab container mt-5'>
                <div className='order-tab d-flex justify-content-around'>
                    <h1>Categories</h1>
                    <button className="btn btn-warning" onClick={() => setData(LivingDumData)}> All </button> 
                    <button className="btn btn-warning" onClick={() => FilterItems('Sofas')}> Sofas </button>
                    <button className="btn btn-warning" onClick={() => FilterItems('Chair')}> Chair </button>
                    <button className="btn btn-warning" onClick={() => FilterItems('Table')}> Table </button>
                </div>

            </div>


            <div className='container'>
                <div className='row'>
                    {
                        data.map((cval) => {

                            return (
                                <>
                                    <div className='col-md-4 mt-4'>
                                        <div class="card">
                                            <img src={cval.cover} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{cval.name}</h5>
                                                <hr/>
                                                <p> Prices:{cval.price}</p>
                                                {/* <p>Category:{cval.category}</p> */}
                                                <button class="btn btn-success">View Product</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }


                        )

                    }

                </div>
            </div>

        </>
    )
}

export default Card 