import fb from "../../images/footer/fb.svg";
import linkedin from "../../images/footer/linkedin.svg";
import twitter from "../../images/footer/twitter.svg";
import ArrowRight from '../../images/footer/arrow_right.svg';

const Footer = () => {
    return (
        <div className="bg-[#12141D] py-12 px-20 text-left text-white">
            <div className="sm:flex sm:justify-start">
                
                <div className="my-4 sm:w-2/4 -translate-y-3">
                    <p className="text-[38px]">Smart Community,</p>
                    <p className="mb-3 text-[38px]">Smart Life.</p>
                    <p className="mb-4 text-[20px]">You can start by sending us a message</p>
                    <div className="flex">
                        <button className="bg-[#8873EF] pl-4 pr-1 py-1 rounded-md text-[14px] flex items-center">
                            Contact Us
                            <span className="bg-[#9B8AF2] rounded-md ml-3 flex px-3 py-4">
                                <img src={ArrowRight} alt="arrow pointing to the right" />
                            </span>
                        </button>
                        <span className="text-[20px] ml-2 mt-2">smatcomafrica@gmail.com</span>
                    </div>    
                </div>


                <div className="my-4 sm:w-2/4 text-end">
                    <p className="mb-4 text-[16px]">Smatcom Africa is an emerging innovation and advocacy startup that specializes in helping business and community leverage on technology that would help enhance</p>
                    
                    <div className="flex flex-col items-end">
                        <p className="mb-2 text-[20px]">Connect with us</p>
                        <div className="flex">

                            <div className="px-3 py-2 rounded-sm bg-[#1B1E29]">
                                <img src={fb} alt="facebook logo" />
                            </div>
                            <div className="px-3 py-2 ml-2 rounded-sm bg-[#1B1E29]">
                                <img src={linkedin} alt="linkedin logo" />
                            </div>
                            <div className="px-3 py-2 ml-2 rounded-sm bg-[#1B1E29]">
                                <img src={twitter} alt="twitter logo" />
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;