import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contactform = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="d-flex flex-column mt-5">
      <label htmlFor='name'>What's Your name?</label>
      <input type="text" name="name" className="bg-transparent border-top-0 border-start-0 border-end-0 border-bottom-3 border-white mb-3 text-white p-1" style={{outline: 'none' }}/>
      <label>What's your Email Address?</label>
      <input type="email" name="email" className="bg-transparent border-top-0 border-start-0 border-end-0 border-bottom-3 border-white mb-3 text-white p-1" style={{outline: 'none' }}/>
      <label htmlFor="project">Tell me about your project</label>
      <textarea name="project" id="project" className="bg-transparent border-top-0 border-start-0 border-end-0 border-bottom-3 border-white mb-3 text-white p-1"></textarea>
      <button type='submit' className="btn btn-outline-light rounded-3 subtn p-3 mt-3 border-3 hrtxt">Submit</button>
    </form>
  );
};