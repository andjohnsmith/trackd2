import React from 'react';

const Masthead = ({ image, head, sub }) => {
  return (
    <header className="masthead" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="page-heading">
              <h1>{head}</h1>
              <span className="subheading">{sub}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Masthead;
