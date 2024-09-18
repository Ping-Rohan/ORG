import { NavLink } from 'react-router-dom';
import SectionTitle from '../SectionTitle';

function Welcome() {
  const data = [];
  return (
    <div className='container mt-16'>
      <SectionTitle title={'हाम्रो बारेमा'} />
      <div className='grid  grid-cols-1 md:grid-cols-[1.5fr_1fr] md:grid-rows-1 gap-4 md:max-h-[300px] mt-12'>
        <div className='bg-gray-100'>
          <div className='px-6 pb-6 flex flex-col h-full'>
            <span className='font-semibold text-base md:text-xl'>
              {data?.name}
            </span>
            <div className='flex flex-col justify-between h-full'>
              <p className='font-serif lg:text-xl pt-8 text-base'>
                हालको नेपाल, एक संघीय लोकतान्त्रिक गणतन्त्र हो, जुन २००८ मा राजा
                ज्ञानेन्द्रको शासन अन्त्यसँगै गणतन्त्र घोषित भएको थियो। नेपालको
                संविधान २०१५ मा जारी गरिएको थियो, जसले देशलाई सात प्रदेशमा
                विभाजन गर्‍यो। राजनीतिक स्थायित्वका लागि संघर्ष जारी रहँदा,
                नेपालले विभिन्न क्षेत्रमा विकासको खोजी गरिरहेको छ। पर्यटन, कृषि,
                र जलविद्युत् नेपालका प्रमुख अर्थतन्त्रका आधारहरू हुन्। देशले
                २०१५ को विनाशकारी भूकम्पबाट पुनर्निर्माण गरिरहेको छ, र
                कोरोनाभाइरस महामारीले पनि चुनौती थपेको छ। तथापि, जनताको
                लोकतन्त्रप्रतिको आशा र विकासप्रतिको प्रतिबद्धता कायम छ।
                {data?.description?.substring(0, 400)} .....
              </p>
              <div className='text-end mt-4 md:mt-0 mb-4'>
                <NavLink
                  to='/aboutus'
                  className='bg-primary text-sm font-semibold px-4 py-2 text-white cursor-pointer md:text-base md:px-4 md:py-2'
                >
                  पुरा पढ्नुहोस{' '}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src='https://img.freepik.com/premium-vector/community-members-gather-lively-park-advocate-democracy-freedom-speech-showcasing-unity-through-various-expressive-activities_538213-133907.jpg?semt=ais_hybrid'
            alt=''
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
