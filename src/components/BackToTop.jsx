import { useEffect, useState } from 'react';
import { TiArrowUpThick } from '../assets/icons';
import { SCROLL_Y_DEFAULT } from '../constants';
const BackToTop = () => {
  const [isShowIcon, setIsShowIcon] = useState(false);
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= SCROLL_Y_DEFAULT) {
        setIsShowIcon(true);
      } else {
        setIsShowIcon(false);
      }
    });
  }, []);
  return (
    <>
      {isShowIcon ? (
        <div
          onClick={handleBackToTop}
          className="fixed bottom-8 right-8 text-gray-400  w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:text-white hover:bg-primary cursor-pointer duration-300"
        >
          <TiArrowUpThick className="text-[28px]" />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default BackToTop;
