import React from 'react';
import icon from './img/icon.png';
import './App.css';
import "bulma/css/bulma.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faAmazon, faGithubAlt, faDiscord } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (

    <div className=" ">
      <div className=" App-header columns is-vcentered">
        <div className="p-6 column has-text-centered">
          <figure className="image  is-inline-block">
            <img src={icon} className="App-logo" alt="icon" />
          </figure>
          <p>ID: Siberiy4 </p>
        </div>

        <div className="column ">
          <div>
            <a href="https://twitter.com/siberiy4" target="_blank" rel="noopener noreferrer">
              <span className="icon-text">
                <span className="icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
                <span>Twitter</span>
              </span>
            </a>
          </div>

          <div>
            <a href="https://github.com/yo-kanyukari" target="_blank" rel="noopener noreferrer">
              <span className="icon-text">
                <span className="icon">
                  <FontAwesomeIcon icon={faGithubAlt} />
                </span>
                <span>GitHub</span>
              </span>
            </a>
          </div>

          <div>
            <a href="https://www.amazon.jp/hz/wishlist/ls/33THA53ST32R1?ref_=wl_share" target="_blank" rel="noopener noreferrer">
              <span className="icon-text">
                <span className="icon">
                  <FontAwesomeIcon icon={faAmazon} />
                </span>
                <span>Amazon</span>
              </span>
            </a>
          </div>

          <div>
            <span className="icon-text">
              <span className="icon">
                <FontAwesomeIcon icon={faDiscord} />
              </span>
              <span>Discord ID: siberiy4#1380</span>
            </span>
          </div>

          <div>
            <a href="https://discord.gg/FJcnXtCHfm" target="_blank" rel="noopener noreferrer">
              <span className="icon-text">
                <span className="icon">
                  <FontAwesomeIcon icon={faDiscord} />
                </span>
                <span>Discord Server</span>
              </span>
            </a>
          </div>

        </div>
      </div>
    </div>


  );
}

function copyToClip(text: string) {
  navigator.clipboard.writeText(text);
  alert(text + 'をクリップボードにコピーしました')
}

export default App;
