import React from 'react'
import socialmedia from '../assets/social-media.png'
import videoediting from '../assets/video-edit.png'
import uiux from '../assets/ui-ux.png'
import graphicdesign from '../assets/graphic-design.png'

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className='service-card'>
      <img className='service-card-icon' src={icon} alt="" />
      <h3 className='service-card-title'>{title}</h3>
      <p className='service-card-description'>{description}</p>
      <a href="/home" className='service-card-link'>Details</a>
    </div>
  );
};

const Services = () => {
  return (
    <div className='services-container'>
      <h2 className='services-title'>Services</h2>
      <div className='services-grid'> 
        <ServiceCard
          icon={socialmedia}
          title="Lorem Ipsum"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
        />
        <ServiceCard
          icon={uiux}
          title="Lorem Ipsum"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
        />
        <ServiceCard
          icon={graphicdesign}
          title="Lorem Ipsum"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
        />
        <ServiceCard
          icon={videoediting}
          title="Lorem Ipsum"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
        />
      </div>
    </div>
  )
}

export default Services
