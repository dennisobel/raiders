import { cricketTeams } from "../constants";

/**
 * Get the logo URL of a cricket team based on the team name.
 * @param {string} teamName - The name of the cricket team.
 * @returns {string|null} The logo URL of the team, or null if no matching team is found.
 */
export function getTeamLogo(teamName) {

  // Iterate through the list of cricket teams
  for (let i = 0; i < cricketTeams.length; i++) {
    // Check if the current team's name matches the provided team name
    if (cricketTeams[i].name === teamName) {
      // Return the logo URL of the team
      return cricketTeams[i].logo;
    }
  }

  // If no matching team is found, return null
  return null;
}