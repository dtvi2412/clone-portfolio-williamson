import React from 'react';
import { BackToTop, Footer, Header } from '../components';
import PropTypes from 'prop-types';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="px-[15px] lg:px-[45px] my-8">{children}</div>
      <BackToTop />
      <Footer />
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DefaultLayout;
