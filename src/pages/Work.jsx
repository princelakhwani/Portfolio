import React from 'react';
import SelectedWork from '/src/component/work/SelectedWork.jsx';
import WorkGallery from '/src/component/work/WorkGallery.jsx';
import Footer from '../component/Footer';

const Work = () => {
  return (
    <>
      <section className="selected-works">
        <SelectedWork />
        <WorkGallery />
      </section>
      <Footer />
    </>
  );
};

export default Work;
