function Contact() {
  return (
    <section className="grid grid-cols-1 gap-12 lg:gap-0 lg:grid-cols-2">
      <div className="text-center">
        <h1 className="uppercase font-[600] text-[22px] relative inline">
          Contact me
          <span className="h-[1px] w-[9px] bg-primary absolute left-1/2 -translate-x-1/2 -bottom-1/2"></span>
        </h1>
      </div>
      <form className="flex flex-col gap-8">
        <div className="flex flex-col">
          <label>Your Name (required)</label>
          <input className="py-2 px-2 border focus:border focus:border-gray-300 outline-none" />
        </div>
        <div className="flex flex-col">
          <label>Your Email (required)</label>
          <input className="py-2 px-2 border focus:border focus:border-gray-300 outline-none" />
        </div>
        <div className="flex flex-col">
          <label>Subject</label>
          <input className="py-2 px-2 border focus:border focus:border-gray-300 outline-none" />
        </div>
        <div className="flex flex-col">
          <label>Your Message</label>
          <input className="py-2 px-2 border focus:border focus:border-gray-300 outline-none" />
        </div>
        <button className="uppercase text-[13px] bg-primary hover:bg-green-cyan duration-300 text-white rounded-full p-2 hover:text-black ">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
