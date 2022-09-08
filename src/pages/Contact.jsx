import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        'service_3a044fw',
        'template_0zciilu',
        form.current,
        'user_Ci7xnA9CIlBfJMQnFLKtA'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message send success');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="grid grid-cols-1 gap-12 lg:gap-0 lg:grid-cols-2">
      <div className="text-center">
        <h1 className="uppercase font-[600] text-[22px] relative inline">
          Contact me
          <span className="h-[1px] w-[9px] bg-primary absolute left-1/2 -translate-x-1/2 -bottom-1/2"></span>
        </h1>
      </div>
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col">
          <label>Your Name (required)</label>
          <input
            name="name"
            {...register('name', {
              required: true,
              minLength: 3,
              maxLength: 100,
            })}
            className="py-2 px-2 border focus:border focus:border-gray-300 outline-none"
          />
          {errors.name?.type === 'required' && (
            <span className="text-red-500 mt-1">Your name is required</span>
          )}
          {errors.name?.type === 'minLength' && (
            <span className="text-red-500 mt-1">Your name min length is 3</span>
          )}
          {errors.name?.type === 'maxLength' && (
            <span className="text-red-500 mt-1">
              Your name max length is 100
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label>Your Email (required)</label>
          <input
            name="email"
            {...register('email', {
              required: true,
              minLength: 6,
              maxLength: 100,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            className="py-2 px-2 border focus:border focus:border-gray-300 outline-none"
          />
          {errors.email?.type === 'required' && (
            <span className="text-red-500 mt-1">Your email is required</span>
          )}
          {errors.email?.type === 'minLength' && (
            <span className="text-red-500 mt-1">
              Your email min length is 6
            </span>
          )}
          {errors.email?.type === 'maxLength' && (
            <span className="text-red-500 mt-1">
              Your email max length is 100
            </span>
          )}
          {errors.email?.type === 'pattern' && (
            <span className="text-red-500 mt-1">Your email is invalid</span>
          )}
        </div>
        <div className="flex flex-col">
          <label>Subject</label>
          <input
            name="subject"
            {...register('subject', {
              minLength: 3,
              maxLength: 500,
            })}
            className="py-2 px-2 border focus:border focus:border-gray-300 outline-none"
          />
          {errors.subject?.type === 'minLength' && (
            <span className="text-red-500 mt-1">
              Your subject min length is 3
            </span>
          )}
          {errors.subject?.type === 'maxLength' && (
            <span className="text-red-500 mt-1">
              Your subject max length is 500
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label>Your Message</label>
          <textarea
            name="message"
            rows="5"
            {...register('message', {
              minLength: 3,
              maxLength: 500,
            })}
            className="resize-none py-2 px-2 border focus:border focus:border-gray-300 outline-none"
          />
          {errors.message?.type === 'minLength' && (
            <span className="text-red-500 mt-1">
              Your message min length is 3
            </span>
          )}
          {errors.message?.type === 'maxLength' && (
            <span className="text-red-500 mt-1">
              Your message max length is 500
            </span>
          )}
        </div>
        <button className="uppercase text-[13px] bg-primary hover:bg-green-cyan duration-300 text-white rounded-full p-2 hover:text-black ">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
