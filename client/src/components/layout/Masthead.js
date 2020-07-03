import React from 'react';

const Masthead = ({ image, head, sub }) => {
  return (
    <header class="masthead" style={{ backgroundImage: `url(${image})` }}>
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="page-heading">
              <h1>{head}</h1>
              <span class="subheading">{sub}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Masthead;
