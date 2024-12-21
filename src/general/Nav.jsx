import {  useState } from 'react';
import logo from '../assets/freelanceLP.svg';
import Countdown, { zeroPad } from 'react-countdown-now';

const Nav = () => {
  const Renderer = ({ days, hours, minutes, seconds, completed }) => {
    const Completionist = () => <span>You are good to go!</span>;
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="flex space-x-2 border-2 border-orange-100 rounded-xl max-w-full p-2 px-4">
          <p className='text-2xl flex flex-col items-center font-extrabold'>{days}<span className="font-extralight text-base">Days</span></p>
          <p className='text-2xl'>:</p>
          <p className='text-2xl flex flex-col items-center font-extrabold'>{hours}<span className="font-extralight text-base">Hours</span></p>
          <p className='text-2xl'>:</p>
          <p className='text-2xl flex flex-col items-center font-extrabold'>{minutes}<span className="font-extralight text-base">Mins</span></p>
          <p className='text-2xl'>:</p>
          <p className='text-2xl flex flex-col items-center font-extrabold'>{zeroPad(seconds)}<span className="font-extralight text-base">Secs</span></p>
        </div>
      );
    }
  };

  const [date] = useState(new Date('2024-12-29T23:59:59'));
  return (
    <header>
      <nav className='flex justify-between items-center p-2 bg-transparent text-primary'>
        <img
          src={logo}
          alt="Freelance Launchpad logo"
          className="max-w-[50%]"
        />

        <article className="hidden md:flex flex-col place-items-center items-center gap-1 lg:gap-1">
          <h4 className='text-2xl'>Registration ends in:</h4>
          <Countdown date={date} renderer={Renderer} />
        </article>

        <button type="button" className="border-2 border-primary rounded-lg px-4 py-2 text-primary transition-all active:scale-95 hover:bg-primary hover:text-orange-100">
          Register Now
        </button>
      </nav>
      <article className="md:hidden flex-col my-10 lg:flex-row place-items-center items-center mx-auto w-fit gap-1">
        <p className=''>Registration ends in:</p>
        <Countdown date={date} renderer={Renderer} />
      </article>
    </header>
  );
}

export default Nav;