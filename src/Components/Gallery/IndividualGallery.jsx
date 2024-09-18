import SectionTitle from '../SectionTitle';

/* eslint-disable react/prop-types */
function IndividualGallery({ eventName, pictures, description }) {
  return (
    <div>
      <div className='flex flex-col gap-3 mt-8 lg:mt-12'>
        <SectionTitle title={eventName} />
        <h4 className='text-lg lg:text-xl font-sans mt-4 overflow-visible break-words'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          atque pariatur eligendi velit illum nulla doloribus eum odio harum
          expedita molestias unde, consequatur, fugiat iusto ipsa neque quae
          placeat quia voluptate repudiandae eaque laboriosam maiores!
          Voluptates eligendi adipisci, voluptate recusandae suscipit aspernatur
          repudiandae voluptatibus voluptas sunt, laboriosam rerum quisquam et.
        </h4>
      </div>
      {/* Ensure there is proper margin between text and grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
        {pictures.map((item) => {
          return (
            <div
              key={item.id}
              className='relative w-full h-64'
            >
              <img
                className='w-full h-full object-cover' // Fix to ensure images maintain aspect ratio and fit the container
                src={item.picture_link}
                alt=''
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IndividualGallery;
