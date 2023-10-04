/**
 * Returns the three latest items from the given array of items.
 * @param {Array} items - The array of items to sort and extract from.
 * @returns {Array} - The three latest items.
 */
export const latestItems = (items) => {
  // Sort items based on date in descending order
  const sortedItems = items.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  // Extract the three latest items as copies
  const latestItems = sortedItems.slice(0, 3);
  return latestItems;
};
