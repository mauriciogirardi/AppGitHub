import React, { PropTypes } from "react";
import s from "./repos.css";

const Repos = ({ className, title, repos }) => (
  <div className={className} className={s.repos}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link} target="blank">
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

Repos.defaultProps = {
  className: "",
  repos: []
};

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
};

export default Repos;
