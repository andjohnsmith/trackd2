import React, { Fragment } from 'react';
import image from '../../images/create.jpg';
import Masthead from '../layout/Masthead';

const Create = () => {
  return (
    <Fragment>
      <Masthead
        image={image}
        head="Create"
        sub="Get started on a brand new tracklist."
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <p>
              Want to make a new list? Fill out the tracklist's name, the
              author, and a short description of it to get started!
            </p>
            <form action="#" method="post">
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Tracklist Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tracklist Name"
                    id="name"
                  />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Author</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Author"
                    id="author"
                  />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Description</label>
                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Description"
                    id="message"
                  ></textarea>
                </div>
              </div>
              <br />
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="sendMessageButton"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Create;
