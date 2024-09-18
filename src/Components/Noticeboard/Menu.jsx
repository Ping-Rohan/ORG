import SectionTitle from '../SectionTitle';

// eslint-disable-next-line react/prop-types
function Menu({ setNotice }) {
  return (
    <div className='mt-16'>
      <SectionTitle title={'सुचना पाटि'} />

      <ul className='flex gap-6 border-b-2 border-b-blue-300 bg-gray-100 p-6 text-base flex-wrap md:gap-8 md:text-lg mt-12'>
        <li
          className='cursor-pointer'
          onClick={() => setNotice('सूचना')}
        >
          सूचना{' '}
        </li>
        <li
          className='cursor-pointer'
          onClick={() => setNotice('दस्तावेज')}
        >
          दस्तावेज{' '}
        </li>
        <li
          className='cursor-pointer'
          onClick={() => setNotice('म्यानुयल')}
        >
          म्यानुयल{' '}
        </li>
        <li
          className='cursor-pointer'
          onClick={() => setNotice('सडक-सम्बन्धि-कानुन')}
        >
          सडक सम्बन्धि कानुन{' '}
        </li>
        <li
          className='cursor-pointer'
          onClick={() => setNotice('समाचार')}
        >
          समाचार{' '}
        </li>
        <li
          className='cursor-pointer'
          onClick={() => setNotice('अन्य')}
        >
          अन्य{' '}
        </li>
      </ul>
    </div>
  );
}

export default Menu;
