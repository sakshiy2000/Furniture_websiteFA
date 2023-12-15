import React from 'react'
import DumData1 from '../DumData1'
 

const HomeAllCard = () => {
  return (
     <>
      <div className='container'>
                <div className='row'>
                    {
                        DumData1.map((cval) => {

                            return (
                                <>
                                    <div className='col-md-4 mt-4'>
                                        <div class="card">
                                            <img src={cval.cover} class="card-img-top" alt="..." />
                                             
                                            <div class="card-body">
                                                <h5 class="card-title">{cval.name}</h5>
                                                <hr/>
                                                <p> Prices:{cval.price}</p>
                                                {/* <hr/> */}
                                                {/* <p>Category:{cval.category}</p> */}
                                                <button class="btn btn-primary">View Product</button>
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

export default HomeAllCard