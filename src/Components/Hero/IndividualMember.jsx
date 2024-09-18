/* eslint-disable react/prop-types */
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
function IndividualMember({ designation, name, phone, email, image }) {
  const fallbackImage =
    'https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg';
  console.log(image);
  return (
    <div className='flex items-center gap-8 md:gap-4 lg:gap-4 flex-col md:flex-row'>
      <div className='h-[80px] w-[80px]  xl:h-[100px] xl:w-[100px] flex-shrink-0'>
        <img
          src='https://thumbs.wbm.im/pw/small/39573f81d4d58261e5e1ed8f1ff890f6.jpg'
          alt=''
          className='h-full w-full object-cover rounded-full'
        />
      </div>
      <div>
        <h3 className=' text-center md:text-start font-semibold  text-xl xl:text-3xl text-primary break-all'>
          प्रशासकीय अधिकृत
        </h3>
        <div className='flex flex-col'>
          <h4 className=' text-center md:text-start text-xl xl:text-[26px] font-semibold text-red-600'>
            श्री राम शर्मा
          </h4>
          <div className='flex gap-2 items-center justify-center md:justify-start'>
            <span className='bg-primary p-1'>
              <FaPhoneAlt className=' text-white text-base xl:text-xl' />
            </span>

            <p className='font-sans text-gray-900 text-xl md:text-base xl:text-xl break-all'>
              984123456744
            </p>
          </div>

          <div className='flex gap-2 items-center justify-center md:justify-start mt-1'>
            <span className='bg-primary p-1 mt-2'>
              {' '}
              <MdEmail className='text-white text-base xl:text-xl' />
            </span>

            <span className='text-gray-900 font-sans text-xl md:text-base xl:text-xl break-all'>
              ram@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualMember;
