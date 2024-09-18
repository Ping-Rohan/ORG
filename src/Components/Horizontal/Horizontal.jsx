import IndividualAdvertiser from './IndividualAdvertiser';
import { useState, useEffect } from 'react';
import axios from '../../Services/AxiosSetup';
import SectionTitle from '../SectionTitle';

const dummy_data = [
  {
    id: 1,
    picture_link:
      'https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-background_1258-126523.jpg?size=626&ext=jpg',
  },
  {
    id: 2,
    picture_link:
      'https://img.freepik.com/free-photo/blue-sky-with-clouds-summer_1150-9633.jpg?size=626&ext=jpg',
  },
  {
    id: 3,
    picture_link:
      'https://img.freepik.com/free-photo/colorful-geometric-abstract-texture_23-2148909610.jpg?size=626&ext=jpg',
  },
];

function Horizontal() {
  const [data, setData] = useState([dummy_data]);

  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await axios.get('/advertisement/all');
  //       setData(response.data.data);
  //     }

  //     fetchData().catch((err) => console.log(err));
  //   }, []);

  if (!data.length) return null;

  return (
    <div className='container mt-16'>
      <SectionTitle title={'हाम्रा सहयोगीहरु'} />

      <div className='grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4 md:h-[250px] overflow-y-hidden mt-12'>
        {dummy_data.map((ads) => {
          return (
            <IndividualAdvertiser
              advertiser={ads.picture_link}
              key={ads.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Horizontal;
