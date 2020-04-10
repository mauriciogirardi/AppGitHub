import React, { PropTypes } from "react";
import s from "./repos.css";
import Pagination from "../pagination";

const Repos = ({ className, title, repos, handlePagination }) => (
  <div className={s.reposContainer}>
    <div className={className}>
      <h2>{title}</h2>
      <ul>
        {repos.repos.map((repo, index) => (
          <li key={index}>
            <a className={s.repoA} href={repo.link} target="blank">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
      <Pagination
        total={repos.pagination.total}
        activePage={repos.pagination.activePage}
        onClick={handlePagination}
      />
    </div>
  </div>
);

Repos.defaultProps = {
  className: "",
};

Repos.propTypes = {
  className: PropTypes.string,
  handlePagination: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  repos: PropTypes.shape({
    repos: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    pagination: PropTypes.shape({
      total: PropTypes.number,
      activePage: PropTypes.number,
    }).isRequired,
  }),
};

export default Repos;
