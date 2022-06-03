import React from 'react';
import  { RingLoader } from 'react-spinners';

export const Loading = () => (
  <div className="flex justify-center items-center ">
    <RingLoader type="Puff" color="#00BFFF" height={550} width={80} />
  </div>
);