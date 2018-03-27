import React from 'react';

import style from './FollowsPage.css';
import FollowsItem from './FollowsItem.jsx';

const FollowsContainer = ({ data, handleStar }) => {
  console.log(data)
  return (
    <div>
      { data ?
        data
          .map((match, index) => {
            return (
              <FollowsItem 
                index={index}
                decision={match.decision}
                starred={match.starred}
                onClick={handleStar}
                key={match.id}
                user1={match.user1_id}
                user2={match.user2_id}
                matchId={match.id}
                activevoting={match.activevoting}
                firstAccept={match.firstAccept}
                secondAccept={match.secondAccept}
                isSuccessful={match.isSuccessful}
                firstRejection={match.firstRejection}
                active={match.active}
                />
              )
          }) 
        : "No Match to Display!"
        
      }
    </div>
  )
};

export default FollowsContainer;
