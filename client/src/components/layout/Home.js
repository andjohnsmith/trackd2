import React, { Fragment } from 'react';
import image from '../../images/home.jpg';
import Masthead from './Masthead';

const Home = () => {
  return (
    <Fragment>
      <Masthead
        image={image}
        head="trackd"
        sub="Get started on a brand new tracklist."
      />
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-md-8 mx-auto">
            <p>
              Serving as a social media blog for music-listening list-makers,
              Trackd is a great place to consolidate your thoughts on whatever
              the most noteworthy tracks of a genre, subgenre, or given topic
              are.
            </p>
            <p>
              To start your list, head over to the Create tab and put in the
              name and a description of your new list. You can then add however
              many songs you think should be given the spotlight.
            </p>
            <p>
              You can view all your time-stamped curations in the Tracklists tab
              in their own chronological list. With all your past lists stored
              in order, you might even consider Trackd to be your own personal
              music-listening diary!
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
