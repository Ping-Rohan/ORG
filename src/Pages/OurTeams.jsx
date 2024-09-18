import IndividualMember from '../Components/Hero/IndividualMember';
import SectionTitle from '../Components/SectionTitle';

function OurTeams() {
  return (
    <div className='container mt-12'>
      <SectionTitle title={'हाम्रो कार्यसमिति '} />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16 mt-12'>
        <IndividualMember />
        <IndividualMember />
        <IndividualMember />
        <IndividualMember />*
        <IndividualMember />
        <IndividualMember />
        <IndividualMember />
        <IndividualMember />
        <IndividualMember />
      </div>
    </div>
  );
}

export default OurTeams;
