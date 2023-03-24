import React from "react";
import "./details.css";

const Details = () => {
  return (
    <div className="details-page">
      <div className="side-bar">
        <div className="side-bar-option">
          <p className="profile-op">Profile</p>
          <hr className="side-bar-hr" />
          <p className="profile-op">Posts</p>
          <hr className="side-bar-hr" />
          <p className="profile-op">Gallery</p>
          <hr className="side-bar-hr" />
          <p className="profile-op">ToDo</p>
        </div>
      </div>

      <div className="main">
        <div className="profile">
          <h2>Profile</h2>
          <div className="profile-name-sec">
            <div className="profile-img"></div>
            <div className="profile-name">Leanne Graham</div>
          </div>
        </div>
        <hr />

        <div className="profile-content">
          <div className="pro-info">
            <div className="pro-img"></div>
            <h3 className="pro-heading">Leanne Graham</h3>
            <h3 className="pro-user">
              <pre>
                {" "}
                <span className="spa">Username : </span>Bret
              </pre>
            </h3>
            <h3 className="pro-email">
              <pre>
                {" "}
                <span className="spa">e-mail : </span>Sincere@april.biz
              </pre>
            </h3>
            <h3 className="pro-phone">
              <pre>
                {" "}
                <span className="spa">Phone : </span>9999999999
              </pre>
            </h3>
            <h3 className="pro-website">
              <pre>
                {" "}
                <span className="spa">Website : </span>leannegraham.com
              </pre>
            </h3>
            <hr className="pro-hr" />
            <h3 className="pro-company">
              <span className="spa">Company</span>
            </h3>
            <h3 className="pro-name">
              <pre>
                {" "}
                <span className="spa">Name : </span>Romaguera-crona
              </pre>
            </h3>
            <h3 className="pro-catch">
              <pre>
                <span className="spa">catchphrase : </span>Multi-layered
                client-server neural
              </pre>
            </h3>
            <h3 className="pro-bs">
              <pre>
                {" "}
                <span className="spa">bs : </span>harness real-time e-market
              </pre>
            </h3>
          </div>

          <div className="pro-address">
            <h3 className="pro-add">
              <span className="spa">Address:</span>
            </h3>
            <h3 className="pro-street">
              <pre>
                {" "}
                <span className="spa">Street : </span>Kulas Light
              </pre>
            </h3>
            <h3 className="pro-suite">
              <pre>
                {" "}
                <span className="spa">Suite : </span>Apt. 556
              </pre>
            </h3>
            <h3 className="pro-city">
              <pre>
                {" "}
                <span className="spa">City : </span>Gwenborough
              </pre>
            </h3>
            <h3 className="pro-zipcode">
              <pre>
                {" "}
                <span className="spa">Zipcode : </span>955665-1221
              </pre>
            </h3>
            <div className="map">
              {/* <iframe
                className="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.6810172457!2d73.72287834853687!3d18.52489042244042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1679503480106!5m2!1sen!2sin"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </div>
            <div className="chats">
              <p className="chats-para">Chats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
