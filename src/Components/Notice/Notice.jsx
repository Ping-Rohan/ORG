function Notice() {
  return (
    <div className='md:container flex items-center justify-center relative -z-10'>
      <div className='bg-red-600 p-2  min-w-[100px] md:min-w-[120px] text-white font-semibold text-sm md:text-base'>
        पछिल्लो समचार
      </div>
      <marquee className='bg-red-200 w-screen p-2 text-sm md:text-base'>
        यस संगठन को अनुसार कर्मचारीको आवश्यकता परेको सुचना यस संगठन को
        अनुसारकर्मचारीको आवश्यकता परेको सुचना यस संगठन को अनुसार कर्मचारीको
        आवश्यकता परेको सुचना यस संगठन को अनुसार कर्मचारीको आवश्यकता परेको सुचना
        यस संगठन को अनुसारकर्मचारीको आवश्यकता परेको सुचना यस संगठन को अनुसार
        कर्मचारीको आवश्यकता परेको सुचना{' '}
      </marquee>
    </div>
  );
}

export default Notice;
