import React from 'react';
import Banner from '../Banner/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import FeedBack from '../FeedBack/FeedBack';

const Home = () => {
    const services = useLoaderData()

    const {servicesData,feedBackData} = services

    return (
        <div className=''>
            <Banner></Banner>
            <div className='grid gap-6 grid-cols-4'>
                {
                    servicesData.slice(0,4).map(service=><ServiceCard service={service}></ServiceCard>)
                }
             
            </div>
            <button className='mx-auto block btn btn-primary mt-4'>
            <NavLink to="/allTreatments" >Show more</NavLink>
            </button>

            <FeedBack feedBackData={feedBackData}></FeedBack>

            

        </div>
    );
};

export default Home;