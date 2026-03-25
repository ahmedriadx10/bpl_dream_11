import footerLogo from '../../assets/images/logo-footer.png'
const Footer = () => {
  return (
  
<section className="border bg-[#06091a] pt-30">

<div className=''><img src={footerLogo} alt="footer logo" className='mx-auto'/></div>

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
<div className='border-t border-[rgba(255,255,255,0.22)] py-7'>
 
  <p className='text-neutral-500 text-center'>@2026 Your Company All Rights Reserved.</p>
</div>
</section>
    
  );
};

export default Footer;