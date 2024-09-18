/* eslint-disable react/prop-types */
function SectionTitle({ title }) {
  return (
    <div className='relative'>
      <h3 className='font-semibold text-xl lg:text-3xl text-primary break-words relative'>
        {title}
      </h3>
      <div className='absolute left-0 right-0 h-[1px] bg-red-600 top-full mt-1'></div>
    </div>
  );
}

export default SectionTitle;
