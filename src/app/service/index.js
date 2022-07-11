import React from 'react'
import ServiceHeader from "../../components/service_components/ServiceHeader"
import Service1 from "../../components/service_components/Service1";
import Service2 from "../../components/service_components/Service2"
import Service3 from "../../components/service_components/Service3";
import Service4 from "../../components/service_components/Service4"


const Services = () => {
  return (
    <div>
      <ServiceHeader/>
      <Service1/>
      <Service2/>
      <Service3/>
      <Service4/>
    </div>
  )
}

export default Services
