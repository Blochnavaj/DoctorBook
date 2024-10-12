 import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/App.Context';
import { assets } from '../assets/assets';

function Appointments() {
  const { docId } = useParams();
  const { doctors,currencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    <>
      {docInfo && (
        <div className='flex flex-col sm:flex-row gap-4 p-4'>
          {/* --------- Doctors Details --------  */}
          <div className='flex items-start'>
            <img src={docInfo.image} alt={docInfo.name} className='w-32 h-32 rounded-lg mr-4 bg-primary' />
            {/* Doctors Name, Degree, and Experience */}
            <div className='flex-1 border border-gray-300 rounded-lg p-6 bg-white'>
              <div className='flex items-center justify-between mb-2'>
                <p className='text-2xl font-medium text-gray-900'>{docInfo.name}</p>
                <img src={assets.verified_icon} alt="Verified" className='w-5' />
              </div>
              <div className='flex items-center gap-2 text-sm text-gray-600 mb-2'>
                <p>{docInfo.degree} - {docInfo.speciality}</p>
                <button className='py-0.5 px-2 border border-gray-300 rounded-full text-xs'>{docInfo.experience}</button>
              </div>
              {/* ------- Doctors About ------ */}
              <div>
                <p className='flex items-center gap-1 text-sm font-medium text-gray-900'>
                  About <img src={assets.info_icon} alt="Info" className='inline' />
                </p>
                <p className='text-gray-600 mt-1 text-sm'>{docInfo.about}</p>
              </div>
              <p className='text-gray-500 font-medium mt-4'> Appointment Fess :  <span className='text-gray-600'> {currencySymbol} {docInfo.fees}</span></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Appointments;
