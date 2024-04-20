import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                    target="_blank"  rel="noreferrer"
                    href="https://github.com/Infinite-Null/NekoFlix/releases/download/v2/Nekoflix_v2.apk"
                    className="btn btn-custom btn-lg page-scroll"
                >
                  Download Now
                </a>{" "}
                {/*<div style={{height:"7px"}}/>*/}
                <a className="btn btn-custom btn-lg page-scroll" style={{
                  background: "rgb(45,51,90)",
                  color: "white",
                  padding: 15,
                  borderRadius: 10000,
                  marginLeft:5
                }} target="_blank"  rel="noreferrer" href={"https://github.com/Infinite-Null/NekoFlix"}>
                  Contribute Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
