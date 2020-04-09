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
  getRepos,
  getStarred
}) => (
  <div className={s.app_content}>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />

    {isFetching && <div> Carregando.....</div>}

    {!!userinfo && <UserInfo userinfo={userinfo} />}

    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length && (
      <Repos className="repos" title="Repositórios:" repos={repos} />
    )}

    <div className={s.reposContainer}>
      {!!starred.length && (
        <Repos className="starred" title="Favoritos:" repos={starred} />
      )}
    </div>
  </div>
);

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
};

export default AppContent;
