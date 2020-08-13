import React, { Fragment } from 'react';
import image from '../../images/tracklists.jpg';
import Masthead from '../layout/Masthead';

const Lists = () => {
  return (
    <Fragment>
      <Masthead
        image={image}
        head="Tracklists"
        sub="The page to admire your curatorial prowess."
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            {/* <div th:each="tracklist : ${tracklists}">
            <div className="post-preview">
              <a th:href="@{/tracklists/{id}(id = ${tracklist.id})}">
                <h2 className="post-title" th:text="${tracklist.name}"></h2>
                <h3 className="post-subtitle" th:text="${tracklist.description}"></h3>
              </a>
              <p className="post-meta">Posted by
                <span style="color:black;" th:text="${tracklist.author}"></span>
                on <span th:text="${tracklist.date}"></span></p>
            </div>
            <hr>
          </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Lists;
