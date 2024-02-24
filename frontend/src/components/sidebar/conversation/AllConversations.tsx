import React from 'react';
import Conversation from './Conversation';
import useConversationState from '../../../hooks/useGetConversation';

const AllConversations: React.FC = () => {
  let { loading, conversation } = useConversationState();



  return (
    <>
      {loading ? (
        <div className='loading loading-infinity'></div>
      ) : (
        <>
          {conversation.map((ele: any) => (
            <Conversation
              key={ele._id}
              firstName={ele.firstName}
              gender={ele.gender}
              lastName={ele.lastName}
              profilePic={ele.profilePic}
              _id={ele._id}
              emoji={ele.emoji}
            />
          ))}
        </>
      )}
    </>
  );
};

export default AllConversations;
