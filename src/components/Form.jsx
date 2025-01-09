import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { InfinitySpin } from 'react-loader-spinner';
import { useForm } from '@formspree/react';
import * as Yup from 'yup';
import { MdCancel } from 'react-icons/md';	
import { motion, AnimatePresence } from 'framer-motion';
import { toggle, formStatus } from '../redux/popSlice';

const passkey = import.meta.env.VITE_FORMSPREE_PASSKEY;
const errorVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

const Form = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Kindly enter a valid email address'),
  });

  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.pop.isOpen);
  const [loading, setLoading] = useState(false);
  const [state, handleSubmit] = useForm(passkey);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      try {
        setLoading(true);
        setTimeout(() => (handleSubmit(values), 5000));
        setLoading(false);
        dispatch(formStatus());
        formik.resetForm();
        dispatch(toggle());
      } catch (err) {
        console.log('Form submission error:', err);
        setLoading(false);
      }
    },
    validateOnChange: false,
    validateOnBlur: true,
  });

  useEffect(() => {
    formik.resetForm({
      values: {
        name: '',
        email: '',
      },
    });
  }, [formik]);

  useEffect(() => {
    const timer = setTimeout(() => {
      formik.setErrors({});
    }, 3000);

    return () => clearTimeout(timer);
  }, [formik, formik.errors]);

  if (loading) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="form"
        onClick={() => console.log('remove')}
        className="min-h-screen flex w-full z-[100] items-center justify-center fixed top-0 left-0 bg-opacity-85"
      >
        <InfinitySpin visible width="200" color="#FF914D" ariaLabel="infinity-spin-loading" />
      </motion.section>
    )
  }

  return (
    <>
      <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="form"
      onClick={() => dispatch(toggle())}
      className={`min-h-screen flex w-full z-[100] items-center justify-center fixed top-0 left-0 bg-opacity-75 ${isOpen ? 'hidden' : 'block'} bg-primary`}
    >
      <motion.div className="container mx-auto w-[90%] md:w-1/2 grid min-h-[45vh] mt-4 gap-10 bg-orange-100 p-2" onClick={(e) => e.stopPropagation()}>
        <MdCancel className="absolute left-5 md:left-10 top-20 lg:top-14 text-3xl cursor-pointer text-white" onClick={() => dispatch(toggle())} />
        <form className="flex flex-col justify-center gap-2 bg-primary rounded-3xl p-6" onSubmit={formik.handleSubmit}>
          <h1 className="font-[700] text-white text-[24px] text-center">Secure Your Spot Now!!!</h1>
          <h4 className="font-[500] text-center text-orange-100">Limited Seats Available for the First 300</h4>
          <article className="flex flex-col gap-7 mt-3">
            <div className="inputDiv w-full md:w-3/4 lg:w-1/2 mx-auto relative">
              <input
                type="text"
                name="name"
                placeholder="Your First Name"
                className="w-full appearance-none rounded-md py-3 pl-3 pr-7 text-base text-black placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-100 sm:text-sm/6"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <AnimatePresence>
                {formik.touched.name && formik.errors.name ? (
                  <motion.div
                    key="name-error"
                    variants={errorVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="text-orange-200 text-[14px] absolute"
                  >
                    {formik.errors.name}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <div className="inputDiv w-full md:w-3/4 lg:w-1/2 mx-auto relative">
              <input
                type="email"
                name="email"
                placeholder="Your Valid Email address"
                className="input w-full appearance-none rounded-md py-3 pl-3 pr-7 text-base text-black placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-100 sm:text-sm/6"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <AnimatePresence>
                {formik.touched.email && formik.errors.email ? (
                  <motion.div
                    key="email-error"
                    variants={errorVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="text-orange-200 text-[14px] absolute"
                  >
                    {formik.errors.email}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </article>

          <button
            type="submit" className="border-solid border transition-all text-white hover:text-primary rounded-lg w-full md:w-3/4 lg:w-1/2 p-3 mt-5 mx-auto hover:bg-orange-100 active:scale-90 font-bold"
            disabled={state.submitting}  
          >
            {loading ? <InfinitySpin visible width="30" color="#61b5ff" ariaLabel="infinity-spin-loading" /> : 'Reserve my spot'}
          </button>
        </form>
      </motion.div>
    </motion.section>
    </>
  );
}

export default Form;
