import React from "react";
import "./Adddata.css";
import timer from "./Timer";

const adddata = (props) => {
  return (
    <>
      <div className="Adddata">
        <div className="Timing">
          <h1>{props.time}</h1>
        </div>
        <div className="TITLE">
          <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Title"
            />
          </div>
        </div>
        <div className="DESCRIPTION">
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
        <input class="btn btn-primary" type="submit" value="Submit"></input>
      </div>
    </>
  );
};

export default adddata;
