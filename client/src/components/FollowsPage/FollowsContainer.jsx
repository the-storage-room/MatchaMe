import React from 'react';

import style from './FollowsPage.css';
import FollowsItem from './FollowsItem.jsx';

const FollowsContainer = ({ type, data, handleStar }) => {
  console.log(data)
  return (
    <div>
      { data ?
        data
          .map((match) => {
            return (
              <FollowsItem 
                decision={match.decision}
                starred={match.starred}
                onClick={handleStar}
                key={match.id}
                user1={match.user1_id}
                user2={match.user2_id}
                />
              )
          }) 
        : "No Match to Display!"
        
      }
    </div>
  )
};

export default FollowsContainer;
