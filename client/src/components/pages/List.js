import React, { Fragment } from 'react';
import image from '../../images/single.jpg';
import Masthead from '../layout/Masthead';

const List = () => {
  return (
    <Fragment>
      <Masthead image={image} head="trackd" sub="The place to log music." />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-8 mx-auto">
            {/* <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Artist</th>
              </tr>
            </thead>
            <tbody>
              <tr th:each="t : ${tracklist.tracks}">
                <td th:text="${t.title}"></td>
                <td th:text="${t.artist}"></td>
              </tr>
            </tbody>
          </table>
          <hr>
          <p>The list feeling a little short? Use the form below.</p>     
          <form action="#" th:action="@{/tracklists/{id}/tracks(id = ${tracklist.id})}" method="post">
            <div className="control-group">
              <div className="form-group floating-label-form-group controls">
                <label>Title</label>
                <input type="text" className="form-control" placeholder="Title" id="title" th:field="${track.title}">
                <p th:if="${#fields.hasErrors('track.title')}" th:errors="*{track.title}" className="help-block text-danger">Title Error</p>
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls">
                <label>Artist</label>
                <input type="text" className="form-control" placeholder="Artist" id="artist" th:field="${track.artist}">
                <p th:if="${#fields.hasErrors('track.artist')}" th:errors="*{track.artist}" className="help-block text-danger">Artist Error</p>
              </div>
            </div>
            <br>
            <div className="form-group">
              <button type="submit" className="btn btn-primary" id="sendMessageButton">Add</button>
            </div>
          </form> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default List;
