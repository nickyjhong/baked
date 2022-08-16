import React from "react";

export class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <h3 className="contact-heading">Our Bakers:</h3>
        <div className="members-container">
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="https://avatars.githubusercontent.com/u/101421813?v=4" />
              </div>
              <div className="contentBx">
                <h4>Nicole Hong</h4>
              </div>
              <div className="sci">
                <div className="github">
                  <a href="https://github.com/nickyjhong">
                    Github
                  </a>
                </div>
                <div className="linkedin">
                  <a href="https://www.linkedin.com/in/nicolejhong/">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="https://avatars.githubusercontent.com/u/41312534?v=4" />
              </div>
              <div className="contentBx">
                <h4>Cherry Xu</h4>
              </div>
              <div className="sci">
                <div className="github">
                  <a href="https://github.com/mscherryxu">
                    Github
                  </a>
                </div>
                <div className="linkedin">
                  <a href="https://www.linkedin.com/in/cherry-xu-rd-cdn/">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF40Wuek0HEcw/profile-displayphoto-shrink_200_200/0/1584683546842?e=1665619200&v=beta&t=0paII6E8NHIhjjOqwt7ppmuwPcmHltZW8WLrzZN-5po" />
              </div>
              <div className="contentBx">
                <h4>Amy Wong</h4>
              </div>
              <div className="sci">
                <div className="github">
                  <a href="https://github.com/amyawong">
                    Github
                  </a>
                </div>
                <div className="linkedin">
                  <a href="https://www.linkedin.com/in/amyawong/">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEQ-OfyTk-7cg/profile-displayphoto-shrink_200_200/0/1561991819331?e=1665619200&v=beta&t=O_-Y2Z2Jnn3XmnTRAmNM8E7rFjEvmTgDras8XMyIXMc" />
              </div>
              <div className="contentBx">
                <h4>Chris Tomshack</h4>
              </div>
              <div className="sci">
                <div className="github">
                  <a href="https://github.com/Ctomshack">
                    Github
                  </a>
                </div>
                <div className="linkedin">
                  <a href="https://www.linkedin.com/in/christomshack/">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
