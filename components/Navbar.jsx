import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

const Navbar = () => {
  const hand = () => {
    alert("successful!");
  };

  return (
    <>
      <div className="bg">
        <div class="navbar ">
          <div class="container mt-3  ">
            <div class="row">
              <div class="col-xl-6 col-md-6 col-sm-6 col-6  ">
                <h1 class="logo">NETFLIX</h1>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                <Link to={"/login"}>
                  <button class="btn_signout">Sign In</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12  ">
            <div className="mt-5">
              <div id="hero">
                <h2 className="text1">Unlimited movies,TV</h2>
                <div className="text2">show,and more</div>
                <p>Watch anywhere.Cancel anytime.</p>
                <p>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </p>

                <input type="text" class="input" placeholder="Email address" />

                <button class="btn4 ml-2" onClick={hand}>
                  Get Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
