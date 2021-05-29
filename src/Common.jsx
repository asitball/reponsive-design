import React from 'react';
import headerImg from './images/header.svg';
import {Link} from 'react-router-dom';
const Common = (props) => {
    return (
        <>
            <section id="header" className='d-flex align-items-center flex-column'>
                 <div className="container-fluid">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row d-flex align-items-center ">
                                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 flex-column">
                                    <h1>{props.name} <br /> <strong className="text-info">Thapa Tech</strong></h1>
                                        <h2 className="my-3"> We are theteam of talented developer making websites</h2>
                                        <div className="mt-3">
                                            <Link to={props.visit} className="btn btn-outline-info">{props.btnname}</Link>
                                        </div>

                                    </div>
                                    <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                        <img className='img-fluid animated' src={props.imgsrc} alt="" />

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
            </section>
        </>
    );
};

export default Common;