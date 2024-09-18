import IndividualGallery from '../Components/Gallery/IndividualGallery';
import { useState, useEffect } from 'react';
import axios from '../Services/AxiosSetup';

const dummy_data = [
  {
    event_name: 'Event First',
    gallery_description: 'Description Goes Here',
    pictures: [
      {
        id: 1,
        picture_link:
          'https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?t=st=1726494474~exp=1726495074~hmac=3e473b9ba5d4b965b956f73b6c20f85b1e8b43f78b7739c33ffd4265a901e415',
      },
      {
        id: 2,
        picture_link:
          'https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?t=st=1726494474~exp=1726495074~hmac=3e473b9ba5d4b965b956f73b6c20f85b1e8b43f78b7739c33ffd4265a901e415',
      },
      {
        id: 3,
        picture_link:
          'https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?t=st=1726494474~exp=1726495074~hmac=3e473b9ba5d4b965b956f73b6c20f85b1e8b43f78b7739c33ffd4265a901e415',
      },
    ],
    key: 1,
  },
  {
    event_name: 'Event Second',
    gallery_description: 'Description Goes Here',
    pictures: [
      {
        id: 4,
        picture_link:
          'https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?t=st=1726494474~exp=1726495074~hmac=3e473b9ba5d4b965b956f73b6c20f85b1e8b43f78b7739c33ffd4265a901e415',
      },
      {
        id: 5,
        picture_link:
          'https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?t=st=1726494474~exp=1726495074~hmac=3e473b9ba5d4b965b956f73b6c20f85b1e8b43f78b7739c33ffd4265a901e415',
      },
    ],
    key: 2,
  },
];

function PhotoGallery() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await axios.get('/gallery/all');
  //       setData(response.data.data);
  //     }

  //     fetchData().catch((err) => console.log(err));
  //   }, []);

  //   if (!data) return <div>Gallery is empty</div>;

  return (
    <div className='container flex flex-col gap-8'>
      {dummy_data.map((item) => {
        return (
          <IndividualGallery
            eventName={item.event_name}
            description={item.gallery_description}
            pictures={item.pictures}
            key={item.key}
          />
        );
      })}
    </div>
  );
}

export default PhotoGallery;
