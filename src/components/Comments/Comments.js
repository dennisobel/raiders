import React from 'react';
import './Comments.css';

import { Comment } from '../../components';
import { countCommentsAndReplies } from '../../utils';
 

 
const Comments = (props) => {
   
  // Extracting the comments prop from the props
  const { comments } = props;

  // Initializing the totalComments variable
  let totalComments = 0;

  // Checking if comments exist
  if (comments) {
    // Calling the countCommentsAndReplies function to count the comments and replies
    totalComments = countCommentsAndReplies(comments);
  }

  return (
    
    <div className='comments'>

      {/* Display the total number of comments */}
      {comments.length > 0 ? (
        <h4>{totalComments} {comments.length > 1 ? 'Comments' : 'Comment'}</h4>
      ) : null}

      <div className='box-container'>
        
        {/* Render each comment */}
        {comments.map((comment) => {
          return (
            <div className='main' key={comment.id}>
              {/* Render the main comment */}
              <Comment
                key={comment.id}
                image={comment.image}
                name={comment.name}
                date={comment.date}
                rating={comment.rating}
                content={comment.content}
              />

              {/* Render the replies to the main comment */}
              {comment.replies &&
                comment.replies.map((reply) => {
                  return (
                    <div className='replies' key={comment.id}>
                      <Comment
                        key={reply.id}
                        image={reply.image}
                        name={reply.name}
                        date={reply.date}
                        content={reply.content}
                      />
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;