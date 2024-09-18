import Member from './Members';

function Hero() {
  return (
    <div className='container'>
      <div className='grid grid_cols[1fr] md:grid-cols-[1.5fr_1fr] lg:grid-cols-[2fr_1fr] md:grid-rows-1 gap-4 mt-4 '>
        <div className='h-full w-full'>
          <img
            src='https://assets.rumsan.net/clients/recordnepal/QmUYJRBTPvHVuvtcz4Lz86TUzp43PCyWQTwcnALuxDkfAg'
            alt=''
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <Member />
        </div>
      </div>
    </div>
  );
}

export default Hero;
