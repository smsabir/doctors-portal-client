import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';
const MakeAppointment = () => {
    return (
        <section className="appointment-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5 me-3">
                        <h5 style={{color: '#1cc7c1'}}>APPOINTMENT</h5>
                        <h2 className="my-4">Make an appointment <br/>Today</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo magni ipsam quibusdam maiores placeat eveniet, maxime ad! Delectus, minima cum.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;