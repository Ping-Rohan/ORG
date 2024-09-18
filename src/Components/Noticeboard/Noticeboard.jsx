import { useEffect, useState, lazy, Suspense } from 'react';
import Menu from './Menu';

const Suchana = lazy(() => import('./Suchana'));
const Dastabej = lazy(() => import('./Dastabej'));
const Manual = lazy(() => import('./Manual'));
const RoadLaw = lazy(() => import('./RoadLaw'));
const News = lazy(() => import('./News'));
const Others = lazy(() => import('./Others'));

const CHILDRENS_TO_RENDER = {
  सूचना: <Suchana />,
  दस्तावेज: <Dastabej />,
  म्यानुयल: <Manual />,
  'सडक-सम्बन्धि-कानुन': <RoadLaw />,
  समाचार: <News />,
  अन्य: <Others />,
};

function NoticeBoard() {
  const [notice, setNotice] = useState('सूचना');

  useEffect(() => {
    console.log(notice);
  }, [notice]);

  return (
    <div className='container mt-4'>
      <Menu setNotice={setNotice} />
      <div className='min-h-[150px] max-h-[270px] bg-gray-100 p-6 overflow-y-hidden'>
        <Suspense fallback={<div>Loading...</div>}>
          {CHILDRENS_TO_RENDER[notice]}
        </Suspense>
      </div>
    </div>
  );
}

export default NoticeBoard;
