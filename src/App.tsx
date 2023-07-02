import React from 'react';
import "./App.css";
import Footer from './components/footer/Footer';
import NavBar from './components/nav_bar/NavBar';
import play from './images/home/Icon.svg';
import pattern from './images/home/Pattern.png';
import plus from './images/home/plus.svg';
import union from './images/home/Union.svg';
import ArrowLeft from './images/home/arrow_left.svg';
import ArrowRight1 from './images/home/arrow_right1.svg';
import ArrowRight2 from './images/home/arrow_right2.svg';
import who_we_are from './images/home/who_we_are.png';
import Count from './images/home/Count.png'
import partner from './images/home/Partner.png';
import ArrowUp from './images/home/arrow_up.svg';
import member1 from './images/home/member1.png';
import member2 from './images/home/member2.png';
import member3 from './images/home/member3.png';
import member4 from './images/home/member4.png';

function App() {
  return (
    <div>

      <div>
        
        <NavBar />
        <div className='px-12 pt-28 bg-[#F4F6FB] bg-img flex'>
          <div className='w-[53%] p-12'>
            <p className='text-[60px] text-[#081D20]'>Smart <span className='text-[#8873EF]'>Community</span>,</p>
            <p className='mb-8 text-[60px] text-[#081D20]'>Smart <span className='text-[#8873EF]'>Life</span>.</p>
            <p className='mb-8 text-[20px]'>We are enthusiastic about increasing technology usage in the african community and believe that by embracing technology, we can enhance communication, increase access to information, and streamline many of our daily duties.</p>
            
            <div className='flex'>

              <button className="bg-[#8873EF] pl-4 pr-1 py-[6px] rounded-md text-[14px] flex items-center">
                How We Work
                <span className="bg-[#9B8AF2] rounded-md ml-3 mr-1 flex p-3">
                    <img src={ArrowRight1} alt="arrow pointing to the right" />
                </span>
              </button>
              <button className='ml-3 bg-[#9B8AF2] p-4 rounded-full'>
                <img src={play} alt="play icon" />
              </button>
              <span className='mt-4 ml-2 text-[#8873EF]'>Play Video</span>

            </div>
            
          </div>

          <div className='p-12'>
            <img src={pattern} alt="circular pattern" />
          </div>
        </div>

        <div className='px-12 bg-[#FFFFFF] flex justify-center py-16'>

          <div className='mr-2 p-12 bg-[#F4F6FB] flex flex-col justify-center items-center'>
            <div className='w-[30px] h-[30px] rounded-sm bg-[#C2B8F7] flex justify-center'>
              <img src={plus} alt="plus icon"  />
            </div>
            <p className='text-[52px] text-[#8873EF]'>1.5M</p>
            <p className='text-[18px]'>Projected Beneficiaries</p>
          </div>

          <div className='ml-2 mr-2 p-12 bg-[#F4F6FB] flex flex-col justify-center items-center'>
            <div className='w-[30px] h-[30px] rounded-sm bg-[#C2B8F7] flex justify-center'>
              <img src={plus} alt="plus icon" />
            </div>
            <p className='text-[52px] text-[#8873EF]'>1.5M</p>
            <p className='text-[18px]'>Projected Beneficiaries</p>
          </div>

          <div className='ml-2 mr-2 p-12 bg-[#F4F6FB] flex flex-col justify-center items-center'>
            <div className='w-[30px] h-[30px] rounded-sm bg-[#C2B8F7] flex justify-center'>
              <img src={plus} alt="plus icon" />
            </div>
            <p className='text-[52px] text-[#8873EF]'>1.5M</p>
            <p className='text-[18px]'>Projected Beneficiaries</p>
          </div>

          <div className='ml-2 p-12 bg-[#F4F6FB] flex flex-col justify-center items-center'>
            <div className='w-[30px] h-[30px] rounded-sm bg-[#C2B8F7] flex justify-center'>
              <img src={union} alt="union icon" />
            </div>
            <p className='text-[52px] text-[#8873EF]'>1.5M</p>
            <p className='text-[18px]'>Projected Beneficiaries</p>
          </div>

        </div>


        <div className='flex'>

          <div className='bg-[#081D20] w-[55%] pl-10 py-24'>
            <p className='text-[#FFFFFF] text-[52px]'>Smart <span className='text-[#8873EF]'>Community</span>,</p>
            <p className='text-[#FFFFFF] text-[52px]'>Smart <span className='text-[#8873EF]'>Life</span>.</p>

            <div className=''>

              <div className='w-[45%]'>
                <div className='flex justify-between py-2'>
                  <p className='text-[20px]'>Who We Are</p>
                  <span className='rounded-sm bg-[#5a5a5a] p-2 justify-center'>
                    <img src={ArrowRight1} alt="arrow pointing to right" />
                  </span>
                </div>
                <hr className='text-[#FFFFFF]' />
              </div>

              <div className='w-[45%]'>
                <div className='flex justify-between py-2'>
                  <p className='text-[14px]'>What We Do</p>
                  <span className='rounded-sm p-2 bg-[#5a5a5a] flex justify-center'>
                    <img src={ArrowRight1} alt="arrow pointing to right" />
                  </span>
                </div>
                <hr className='text-[#FFFFFF]'/>
              </div>

              <div className='w-[45%]'>
                <div className='flex justify-between py-2'>
                  <p className='text-[14px]'>Our Vision</p>
                  <span className='rounded-sm p-2 bg-[#5a5a5a] flex justify-center'>
                    <img src={ArrowRight1} alt="arrow pointing to right" />
                  </span>
                </div>
                <hr className='text-[#FFFFFF]'/>
              </div>

              <div className='w-[45%]'>
                <div className='flex justify-between py-2'>
                  <p>Our Mission</p>
                  <span className='rounded-sm p-2 bg-[#5a5a5a] flex justify-center'>
                    <img src={ArrowRight1} alt="arrow pointing to right" />
                  </span>
                </div>
                <hr className='text-[#FFFFFF]'/>
              </div>
              
              <div className='w-[45%]'>
                <div className='flex justify-between py-2'>
                  <p>Our Core Values</p>
                  <span className='rounded-sm p-2 bg-[#5a5a5a] flex justify-center'>
                    <img src={ArrowRight1} alt="arrow pointing to right" />
                  </span>
                </div>
                <hr className='text-[#FFFFFF]'/>
              </div>
  
            </div>
          </div>

          <div className='w-[45%]'>
            <img src={who_we_are} alt="Contains text describing who we are" />
          </div>

        </div>


        <div className='p-12 text-center'>

          <p className='mb-8 text-[52px]'>Our <span className='text-[#8873EF]'>Team</span></p>
          <p className='mb-12 text-[20px] m-auto w-[68%]'>We are enthusiastic about increasing technology usage in the african community and believe that by embracing technology, we can enhance communication</p>
          <div className='flex mb-6'>
            <img src={member1} alt="team member 1" className='mr-2' />
            <img src={member2} alt="team member 2" className='ml-2 mr-2' />
            <img src={member3} alt="team member 3" className='ml-2 mr-2' />
            <img src={member4} alt="team member 4" className='ml-2' />  
          </div>  

          <div>

            <div className='flex items-end'>
              <div className='w-[52%] flex justify-end'>

                <span className='rounded-sm p-2 flex justify-center mr-4 bg-[#C2B8F7]'>
                  <img src={ArrowLeft} alt="arrow pointing to right" />
                </span>
                <span className='rounded-sm p-2 flex justify-center bg-[#C2B8F7]'>
                  <img src={ArrowRight2} alt="arrow pointing to right" />
                </span>

              </div>

              <div className='ml-36'>
                <img src={Count} alt="A count for the scrolling" />
              </div>

            </div>

          </div>     
        </div>

        
        <div className='pt-12 pb-6 bg-[#F4F6FB] flex justify-center'>

          <div className='w-[50%]'>
            <p className='text-[52px]'>We Work With The</p>
            <p className='text-[52px]'>Best <span className='text-[#8873EF]'>Partners</span></p>
            <p className='w-[80%] text-[20px]'>We are enthusiastic about increasing technology usage in the african community and believe that by embracing technology, we can enhance communication</p>
          </div>

          <div className='w-[40%]'>
            <div className='flex mb-12'>
              <img src={partner} alt="partner's logo" className='mr-6' />
              <img src={partner} alt="partner's logo" className='ml-6' />
            </div>

            <div className='flex mt-12'>
              <img src={partner} alt="partner's logo" className='mr-6' />
              <img src={partner} alt="partner's logo" className='ml-6' />
            </div>
            
            <div className='flex justify-end'>
              <img src={ArrowUp} alt="Arrow Up" className='rounded-md -translate-y-7 px-5 py-4 bg-[#C2B8F7]' />
            </div>
          </div>
          
          
        </div>
        
      </div>

      <Footer />
    </div>
  );
}

export default App;