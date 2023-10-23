import React from "react";
import { TeamItem } from "../../components";
import { management } from "../../constants";

const Management = () => {
  const paragraphStyle = {
    display: "flex",
    fontSize: "1.6rem",
    gap: "0.5rem",
    alignItems: "center",
    textTransform: "none", // This line sets text-transform to "none"
  };

  return (
    <div className="team">
      <p style={paragraphStyle}>
        In order to achieve our vision, we need competent and skilled staff both
        at the management level and the field. Moreover, being cognizant of the
        value of having both world-class facilities and competent staff, we have
        focused on achieving both. Therefore, in order to offer a world-class
        learning experience, we have merged proper governance and administration
        with qualified staff. Our staff, both at the front office and field,
        exemplify our ethical values, meritocracy, and vision. Equally, they
        serve as overseers of player development and institutional growth to
        achieve our vision.
      </p>

      <br />

      <div className="box-container">
        {
          // Map over the management array to render each management member
          management.map((team) => {
            return (
              <TeamItem
                key={team.id}
                image={team.image}
                name={team.name}
                title={team.title}
                accounts={team.accounts}
                bio={team.bio}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default Management;
