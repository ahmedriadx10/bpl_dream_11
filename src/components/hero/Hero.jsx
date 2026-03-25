
import bannerImg from '../../assets/images/banner-main.png'


const Hero = () => {

  return (
    <section className={`max-w-7xl mx-auto my-10 w-[90%] py-16 rounded-3xl  bg-[url(/bg-shadow.png)] bg-neutral bg-cover bg-bottom-left md:bg-center`}>
      <div className='space-y-6'>
        <div className='flex justify-center'><img src={bannerImg} alt='Banner main image' /></div>
        <div className='text-center lg:w-[80%] mx-auto'>
          <h2 className='font-bold text-3xl lg:text-[40px] text-white mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
          <p className='font-medium text-xl lg:text-2xl text-white'>Beyond Boundaries Beyond Limits</p>
         
        </div>
         <div className='flex justify-center'><div className='p-1 rounded-xl border border-[#E7FE29]'><button className='btn bg-[#E7FE29] rounded-lg'>Claim Free Credit</button></div></div>
      </div>
    </section>
  );
};

export default Hero;