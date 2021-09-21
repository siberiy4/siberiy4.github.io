import React from 'react';
import icon from './img/icon.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faAmazon, faGithubAlt, faDiscord } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (

    <div className=" hero is-fullheight is-default is-bold">

      <div className="hero-body has-background-success-light">
        <div className="App-text container has-text-centered">
          <div className="columns is-vcentered">
            <div className="column is-7 ">
              <figure className="image is-5by4">
                <img src={icon} className="App-logo" alt="icon" />
              </figure>
              <div className="title is-2 ">ID: Siberiy4 </div>
            </div>
            <div className="buttons are-medium column is-4 is-offset-1 ">

              <div >
                <button className="my-5 button is-info is-fullwidth">
                  <a className="has-text-warning-light" href="https://twitter.com/siberiy4" target="_blank" rel="noopener noreferrer">
                    <span className="icon-text has-text-centered">
                      <span className="icon">
                        <FontAwesomeIcon icon={faTwitter} />
                      </span>
                      <span>Twitter</span>
                    </span>
                  </a>
                </button>
              </div>

              <div>
                <button className="my-5 button is-dark is-fullwidth">
                  <a className="has-text-warning-light" href="https://github.com/yo-kanyukari" target="_blank" rel="noopener noreferrer">
                    <span className="icon-text">
                      <span className="icon">
                        <FontAwesomeIcon icon={faGithubAlt} />
                      </span>
                      <span>GitHub</span>
                    </span>
                  </a>
                </button>
              </div>

              <div>
                <button className="my-5 button is-warning is-fullwidth">
                  <a className="has-text-black-ter" href="https://www.amazon.jp/hz/wishlist/ls/33THA53ST32R1?ref_=wl_share" target="_blank" rel="noopener noreferrer" >
                    <span className="icon-text">
                      <span className="icon">
                        <FontAwesomeIcon icon={faAmazon} />
                      </span>
                      <span>Amazon</span>
                    </span>
                  </a>
                </button>
              </div>

              <div>
                <button id="discord" className="my-5 button is-link is-fullwidth" onClick={()=>copyToClip("siberiy4#1380")}>
                  <span className="icon-text">
                    <span className="icon">
                      <FontAwesomeIcon icon={faDiscord} />
                    </span>
                    <span>Discord:  siberiy4#1380</span>
                  </span>
                </button>
              </div>

              <div>
                <button className="my-5 button is-link is-fullwidth">
                  <a className="has-text-warning-light" href="https://discord.gg/FJcnXtCHfm" target="_blank" rel="noopener noreferrer">
                    <span className="icon-text">
                      <span className="icon">
                        <FontAwesomeIcon icon={faDiscord} />
                      </span>
                      <span>Discord Server</span>
                    </span>
                  </a>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



function copyToClip(text: string) {
  navigator.clipboard.writeText(text);
  const target = document.querySelector<HTMLElement>('#discord');
  const before = target!.innerHTML;
  if (target) {
    target.innerHTML = 'コピーしました';
  }

  setTimeout(() => {
    if (target) {
      target.innerHTML = before;
    } }, 1000);
}

export default App;
