import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
    <h1 className="txtCol">Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
    <h4 className="created">Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">⭐</span></h4>


      <h5>Share your Roomname to let your friends join the chat</h5>
      <h5>"Express more by typing emoticons that convert to emojis <span role="img" aria-label="emoji">❤️"</span></h5>
      <h5>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h5>
     

      <h6 className="bottomright">Copyright <span>&#169;</span> by Gayatri-K</h6>
    </div>
    {
      users
        ? (
          <div>
           <h1 className="divider"><b> People currently chatting:</b></h1>
            <div className="activeContainer">
              <h4>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h4>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;