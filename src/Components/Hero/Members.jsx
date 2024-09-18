import IndividualMember from './IndividualMember';

function Member() {
  return (
    <div className='p-4 h-full bg-gray-200'>
      <div className='grid grid-rows-[1fr_1fr_1fr] grid-cols-1 h-full gap-10 md:gap-1 p-6 md:p-2 xl:px-6'>
        <IndividualMember />
        <IndividualMember />
        <IndividualMember />
      </div>
    </div>
  );
}

export default Member;
