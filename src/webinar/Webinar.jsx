import { useCallback, useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import { useDispatch, useSelector } from 'react-redux';
// import { Thumb } from './EmblaCarouselArrowButton'
import { motion } from 'framer-motion';
import heroMob from '../assets/hero_mob.svg';
import deskHero from '../assets/hero_desk.svg';
import Form from '../components/Form';
import { toggle } from '../redux/popSlice';
import Success from '../components/Success';

const options = {
  loop: true,
  draggable: true, 
  align: 'center',
  containScroll: 'keepSnaps',
};

const benefits = [
  'How to overcome the fear of freelancing',
  '5 secrets to getting at least 1 client weekly',
  'Effective client acquisition strategies',
  'Building a thriving freelance career',
  'Legal awareness & tactics',
  'How to introduce yourself and get a response',
  'Utilizing time-saving freelance tools',
  'Using AI to 5X your productivity',
];

const offers = [
  {
    id: 1,
    title: 'Freelance Starter Pack',
    description: 'Get access to our exclusive starter pack (essential templates, checklists, and other resources) to kickstart your freelance career.',
  },
  {
    id: 2,
    title: 'Launchpad Community',
    description: 'Exclusive access to a community of freelancers, mentors, and experts to help you grow.',
  },
  {
    id: 3,
    title: 'Early Bird Discount',
    description: 'Be the first to know of our 2-week accelerator program, to learn advanced freelance skills, build a portfolio, and get job referrals.',
  },
  {
    id: 4,
    title: '1-on-1 Consultation',
    description: 'Get a 30-minute free 1-on-1 post-webinar consultation with an expert to help you get started on your freelance journey.',
  },
  {
    id: 5,
    title: 'Slides/Recordings',
    description: 'Get access to the slides and recordings of the webinar to review and learn at your own pace.',
  },
  {
    id: 6,
    title: 'Pre-Webinar Checklist',
    description: 'Get a checklist of things to do before the webinar to prepare yourself for the best experience.',
  },
  {
    id: 7,
    title: 'Pre-Webinar Q & A',
    description: 'Ask questions about what you hope the webinar would focus on.',
  },
];

const Webinar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  });
  const dispatch = useDispatch();
  const success = useSelector((state) => state.pop.success);
  const [open, setOpen] = useState(false);

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    emblaMainApi.on('select', onSelect).on('reInit', onSelect);
  
    return () => {
      emblaMainApi.off('select', onSelect).off('reInit', onSelect);
    };
  }, [emblaMainApi, onSelect]);

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <section className="flex flex-col items-center justify-center lg:flex-row md:mt-[60px] gap-5">
        <article className="flex flex-col items-center md:items-start justify-center gap-4">
          <h1 className="text-[7vw] md:text-[40px] lg:text-[54px] lg:leading-[60px] font-extrabold max-w-[90%] text-center md:text-left">From Job Seeker to Digital Nomad: Your 2025 Leap into Freelance Freedom</h1>
          <p className="text-lg lg:text-2xl lg:leading-10 max-w-[90%] text-center md:text-left">
            Join our exclusive webinar to discover the secrets to conquer your fears, master your skills,
            find clients, present yourself, and build a thriving freelance career.
          </p>
          <button onClick={() => {dispatch(toggle()); setOpen(true)}} className="border-0 my-2 lg:text-2xl md:py-4 md:w-[90%] bg-orange-100 rounded-lg px-4 py-3 text-primary font-bold transition-all active:scale-95 hover:bg-primary md:place-self-start hover:text-orange-100">
            Register Now
          </button>
        </article>
        <img
          src={heroMob}
          alt="A thriving freelancer"
          className="w-full my-10 md:hidden"
        />
        <img
          src={deskHero}
          alt="A thriving freelancer"
          className="w-full my-10 hidden md:flex"
        />
      </section>
      <section className="flex w-full flex-col lg:mt-[60px] items-center lg:items-start justify-center gap-5 md:grid lg:grid-cols-2">
        <article className="flex flex-col items-center lg:items-start gap-4 md:grid">
          <h2 className="text-2xl lg:text-3xl font-extrabol self-start">What you&apos;ll learn:</h2>
          <ul className="flex flex-col items-start gap-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.580078 7.84063C2.94912 10.2531 5.24611 12.425 7.45412 15.1719C9.85471 10.6781 12.3117 6.16875 16.3658 1.28531L15.2735 0.814377C11.8502 4.23125 9.19064 7.46563 6.87971 11.3094C5.27268 9.94688 2.67553 8.01875 1.08975 7.02813L0.580078 7.84063Z" fill="#F97216"/>
                </svg>
                <p className="lg:text-2xl lg:leading-12">{benefit}</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="embla flex flex-col items-center justify-center overflow-hidden gap-4 my-14 md:mt-10 lg:mt-0 border rounded-lg border-orange-100 w-full px-5 py-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-center">Perks for the First 100 attendees:</h2>
          <article className="flex items-center justify-center my-4 px-5 py-3 viewport" ref={emblaMainRef}>
            <motion.ul className="embla__container px-4 flex gap-4">
              {offers.map((offer, index) => (
                <li key={index} className="flex flex-col bg-primary items-center gap-2 w-full p-6 lg:p-8 embla__slide">
                  <h3 className="text-lg font-bold text-orange-100 text-center">{offer.title}</h3>
                  <p className="max-w-full text-white text-center md:text-[18px]">{offer.description}</p>
                </li>
              ))}
            </motion.ul>
          </article>

          <article className="flex justify-center gap-4 my-1 py-6" ref={emblaThumbsRef}>
            <motion.ul className="flex gap-1">
              {offers.map((_, index) => (
                <li
                  key={index}
                  onClick={() => onThumbClick(index)}
                  className={`flex flex-col border-2 border-primary embla-thumbs__slide rounded cursor-pointer items-center gap-2 w-[10px] p-5 ${'embla-thumbs__slide'.concat(
                  index === selectedIndex ? 'embla-thumbs__slide--selected bg-primary scale-110' : ''
                )}`}>
                  <h3 className={`text-sm font-semibold text-primary text-[1.5vh] text-center ${index === selectedIndex && 'text-white'}`}>{index + 1}</h3>
                </li>
              ))}
            </motion.ul>
          </article>
          <button onClick={() => {dispatch(toggle())}} className="border-0 my-2 bg-orange-100 rounded-lg px-4 py-3 text-primary font-bold transition-all active:scale-95 hover:bg-primary hover:text-orange-100">
            Reserve my spot
          </button>
        </article>
      </section>
      <small className='flex items-center text-center justify-center gap-1 text-orange-100'>
        &copy;
        <span className='text-primary text-lg'>
          {`${currentYear} All Rights Reserved, Freelance LaunchPad`}
        </span>
      </small>
      {open && (<Form />)}
      {success && (<Success />)}
    </div>
  );
}

export default Webinar;
