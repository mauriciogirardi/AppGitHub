import React, { PropTypes } from "react";
import Search from "components/search";
import UserInfo from "components/use-info";
import Actions from "components/actions";
import Repos from "components/repos";

import s from "./app_content.css";

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  handlePagination,
  getRepos,
  getStarred,
}) => (
  <div className={s.container}>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />

    {isFetching && <div> Carregando.....</div>}

    {!!userinfo && <UserInfo userinfo={userinfo} />}

    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.repos.length && (
      <Repos
        className="repos"
        title="Repositórios:"
        repos={repos}
        handlePagination={(cliked) => handlePagination("repos", cliked)}
      />
    )}
    {!!starred.repos.length && (
      <Repos
        className="starred"
        title="Favoritos:"
        repos={starred}
        handlePagination={(cliked) => handlePagination("starred", cliked)}
      />
    )}
  </div>
);

const reposPropTypesShape = {
  repos: PropTypes.array.isRequired,
  pagination: PropTypes.object,
};

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.shape(reposPropTypesShape).isRequired,
  starred: PropTypes.shape(reposPropTypesShape).isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handlePagination: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
};

export default AppContent;
