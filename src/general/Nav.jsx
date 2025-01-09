import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Props from 'prop-types';
import logo from '../assets/freelanceLP.svg';
import Countdown, { zeroPad } from 'react-countdown-now';
import { toggle } from '../redux/popSlice';
import Success from '../components/Success';
import Form from '../components/Form';

const Nav = () => {
  const dispatch = useDispatch()
  const { success } = useSelector((state) => state.pop);
  const [date] = useState(new Date('2025-01-17T23:59:59'));
  const[isOpen, setIsOpen] = useState(false);

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

  return (
    <header>
      <nav className='flex justify-between items-center p-2 md:p-0 bg-transparent md:my-10 text-primary'>
        <img
          src={logo}
          alt="Freelance Launchpad logo"
          className="max-w-[50%]"
        />

        <article className="hidden md:flex flex-col place-items-center items-center gap-1 lg:gap-1">
          <h4 className='text-2xl'>Registration ends in:</h4>
          <Countdown date={date} renderer={Renderer} />
        </article>

        <button onClick={() => {dispatch(toggle()); setIsOpen(true)}} type="button" className="border-2 border-primary rounded-lg px-4 py-2 text-primary transition-all active:scale-95 hover:bg-primary hover:text-orange-100">
          Register Now
        </button>
      </nav>
      <article className="md:hidden flex-col my-10 lg:flex-row place-items-center items-center mx-auto w-fit gap-1">
        <p className=''>Registration ends in:</p>
        <Countdown date={date} renderer={Renderer} />
      </article>
      {isOpen && (<Form />)}
      {success && (<Success />)}
    </header>
  );
}

Nav.propTypes = {
  days: Props.number.isRequired,
  hours: Props.number.isRequired,
  minutes: Props.number.isRequired,
  seconds: Props.number.isRequired,
  completed: Props.bool.isRequired,
};

export default Nav;