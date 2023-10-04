/* 
1)-getPopular(items): Sorts and returns the top popular items based on average ratings and number of reviews.
2)-calculateAverageRating(item): Calculates the average rating for a given item based on its comments.
*/

/* Retrieves the popular items based on average rating and number of reviews. */
export function getPopular(items) {
  
  // Create a copy of the items array and sort it based on rating and number of reviews
  const sortedItems = items.slice().sort((a, b) => {
    const aAverageRating = calculateAverageRating(a);
    const bAverageRating = calculateAverageRating(b);

    // Handle items without any comments/reviews
    if (isNaN(aAverageRating)) {
      return 1; // Push item without comments to the end
    }
    if (isNaN(bAverageRating)) {
      return -1; // Push item without comments to the end
    }
 
    // First, compare by the average rating
    if (bAverageRating !== aAverageRating) {
      return bAverageRating - aAverageRating;
    }

    // If the average rating is the same, compare by the number of reviews
    const aTotalReviews = a.comments.length;
    const bTotalReviews = b.comments.length;

    return bTotalReviews - aTotalReviews;
  });

  // Extract the popular items
  const popularItems = sortedItems.map(item => ({
    ...item
  }));

  return popularItems;
}


/* Calculates the average rating for a item based on the comments */
export function calculateAverageRating(item) {
  const totalRating = item.comments.reduce((sum, comment) => sum + comment.rating, 0);
  const averageRating = totalRating / item.comments.length;
  return parseFloat(averageRating.toFixed(1));

}