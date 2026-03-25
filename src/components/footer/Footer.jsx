import footerLogo from '../../assets/images/logo-footer.png'
const Footer = () => {
  return (
  
<section className="border bg-[#06091a] mt-40">

<div className='max-w-7xl w-[90%] mx-auto border border-base-100 rounded-3xl p-6 bg-[rgba(255,255,255,0.2)] -mt-40 mb-9 '>
  <div className='py-22 bg-[url(/bg-shadow.png)] bg-center bg-cover bg-no-repeat bg-base-300 rounded-3xl'>
  <div className='max-w-xl w-[90%] text-center mx-auto space-y-4'>
    <h6 className='font-bold text-[32px]'>Subscribe to our Newsletter</h6>
    <p className='font-medium text-lg text-neutral-700'>Get the latest updates and news right in your inbox!</p>
    <div className='flex gap-2 justify-center'>
      <input className='input rounded-lg ' type="email" placeholder='Enter your email'/
      ><button className='btn bg-linear-[90deg,#E05C51,#FE9F30] border-none rounded-lg'>Subscribe</button>
    </div>
  </div>
  </div>
</div>

{/* footer logo */}
<div className=''><img src={footerLogo} alt="footer logo" className='mx-auto'/></div>

{/* footer area */}
<footer className="footer sm:footer-horizontal  text-base-content p-10 max-w-7xl mx-auto  justify-between">
<div className='max-w-72'>
  <h6 className='footer-title text-base-200'>About Us</h6>
  <p className='text-neutral-500'>We are a passionate team dedicated to providing the best services to our customers.</p>
</div>
  <nav className='text-neutral-500'>
    <h6 className="footer-title text-base-200">Company</h6>
 <ul className='list-disc space-y-2'>
  <li>   <a className="link link-hover">About us</a>
</li>
<li>    <a className="link link-hover">Contact</a>
  </li>
  <li>  <a className="link link-hover">Jobs</a>
    </li>
    <li><a className="link link-hover">Press kit</a></li>
 </ul>
  </nav>

  <form className='text-base-200'>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="w-80">
      <label className='text-neutral-500'>Subscribe to our newsletter for the latest updates.</label>
      <div className="join mt-2.5">
        <input
          type="text"
          placeholder="username@site.com"
          className="input  rounded-r-none rounded-lg placeholder: text-neutral/80" />
        <button className="btn btn-ghost text-neutral bg-linear-[75deg,#FE9F30,#E05C51] rounded-l-none rounded-lg border-0">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
{/* divider with copyright */}
<div className='border-t border-[rgba(255,255,255,0.22)] py-7'>
 
  <p className='text-neutral-500 text-center'>@2026 Your Company All Rights Reserved.</p>
</div>
</section>
    
  );
};

export default Footer;