/* eslint-disable react/prop-types */
function IndividualAdvertiser({ advertiser }) {
  return (
    <div className='border-r-2 h-[150px] md:h-auto'>
      <img
        src={advertiser}
        alt=''
        className='object-cover h-full w-full'
      />
    </div>
  );
}

export default IndividualAdvertiser;
