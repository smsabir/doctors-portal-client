import React from 'react';
import featured from '../../../images/featured.png';
const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 ">
                        <img className="img-fluid" src={featured} alt=""/>
                    </div>
                    <div className="col-md-7 mt-4 align-self-center">
                        <h2>Exception Dental <br/> Care, on Your Terms</h2>
                        <p className="text-secondary my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem eligendi corporis autem sit quibusdam alias accusamus! Sequi fuga possimus quis, quisquam nisi architecto nesciunt aspernatur. Sequi fuga possimus quis, quisquam nisi architecto nesciunt aspernatur. Sequi fuga possimus quis, quisquam nisi architecto nesciunt aspernatur.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;