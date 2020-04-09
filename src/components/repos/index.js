import React, { PropTypes } from "react";
import s from "./repos.css";
import Pagination from "components/pagination";

const Repos = ({ className, title, repos }) => (
  <div className={s.reposContainer}>
    <div className={className}>
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
      <Pagination total={10} />
    </div>
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
