const Footer = () => {
  return (
    <footer className="pt-8 py-24">
      <ul className="flex items-center justify-center gap-8 text-[0.7rem] sm:text-[0.8rem] ">
        <li>
          <a className="hover:text-green-cyan duration-300" href="#Facebook">
            Facebook
          </a>
        </li>
        <li>
          <a className="hover:text-green-cyan duration-300" href="#Instagram">
            Instagram
          </a>
        </li>
        <li>
          <a className="hover:text-green-cyan duration-300" href="#Github">
            Github
          </a>
        </li>
        <li>
          <a className="hover:text-green-cyan duration-300" href="#youtube">
            Youtube
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
