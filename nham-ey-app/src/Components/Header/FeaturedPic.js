import React from "react";
import "./FeaturedPic.css";

const FeaturedPic = () => {
  return (
    <div className="feature">
      <div className="container">
        <div className="row">
          <div className="col s12 l4 offset-l8">
            <div className="card">
              <div className="container center-align">
                <form action="">
                  <h2 className="card-title left-align">Login</h2>
                  <div className="input-field">
                    <input type="text" id="user" />
                    <label htmlFor="user">Enter your username...</label>
                  </div>
                  <div className="input-field">
                    <input type="password" id="pass" />
                    <label htmlFor="pass">Enter your password...</label>
                  </div>
                  <div className="input-field left-align">
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Remember my username</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Remember my password</span>
                      </label>
                    </p>
                  </div>
                  <button className="btn">Submit</button>
                  <button className="btn">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPic;
