import React from 'react';
import { Link } from 'react-router-dom';
const Card = (props) => {
    const {imgsrc, title} = props.data;
    return (
            <>
                <div className='col-md-4 col-10 mx-auto'>
                        <div class="card">
                            <img src={imgsrc} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{title}</h5>
                                <Link to='service' class="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                </div>
            </>
    );
};

export default Card;