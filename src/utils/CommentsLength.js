/**
 * Counts the number of comments and their replies recursively.
 * @param {Array} comments - The array of comments.
 * @returns {number} The total count of comments and replies.
 */

export function countCommentsAndReplies(comments) {
  
  let count = 0;

  comments.forEach(comment => {
    count++; // Add 1 for the comment itself
    if (comment.replies && comment.replies.length > 0) {
      count += countCommentsAndReplies(comment.replies); // Add count of replies recursively
    }
  });

  return count; 

}