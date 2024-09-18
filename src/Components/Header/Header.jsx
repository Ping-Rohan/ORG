function Header() {
  return (
    <header className='container justify-center flex gap-3 w-full mt-4 lg:w-1/2'>
      {/* left logo */}
      <div className='h-[80px] w-[80px] md:h-[100px] md:w-[100px]'>
        <img
          src='/nego-logo.jpg'
          alt=''
          className='w-full h-full object-contain'
        />
      </div>
      {/* middle part  */}
      <div className='font-serif text-secondary'>
        <h1 className='font-bold text-sm text-center md:text-2xl sm:text-base'>
          नेपाल निजामती कर्मचारी संगठान{' '}
        </h1>
        <h1 className='font-sans font-bold text-[12px] text-center md:text-lg sm:text-base'>
          NEPAL GOVERNMENT EMPLOYEES&apos; ORGANIZATION
        </h1>
        <div className='font-bold font-serif text-sm text-center md:text-2xl mt-2 sm:text-base'>
          जिल्ला कार्य समिति, बुटवल{' '}
        </div>
      </div>
      {/* right logo */}
      <div className='h-[80px] w-[80px] md:h-[100px] md:w-[100px]'>
        <img
          src='/nego-logo2.png'
          alt=''
          className='h-full w-full object-contain'
        />
      </div>
    </header>
  );
}

export default Header;
