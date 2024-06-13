"use client"
import 'leaflet/dist/leaflet.css';

import  './plan.scss';
import dynamic from 'next/dynamic';

const MapContent = dynamic(() => import('./MapContent'), {
  ssr: false,
});
const Plan = () => {
  return (
    <div className='plan' id='plan'>
         <h1>
            Plan de localisation
        </h1>
        <div className="planContent">
          <MapContent/>
        </div>
    </div>
  )
}

export default Plan