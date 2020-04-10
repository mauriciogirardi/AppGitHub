import React, { PropTypes } from "react";
import s from "./use_info.css";

const UserInfo = ({ userinfo }) => (
  <div className={s.user_info}>
    <img src={userinfo.photo} />

    <div className={s.repoFollowersFollowing}>
      <h1>
        <a
          className={s.nameUser}
          href={`https://github.com/${userinfo.login}`}
          target="blank"
        >
          {userinfo.username}
        </a>
      </h1>

      <ul>
        <li className={s.resFoll}>- Repositórios: {userinfo.repos}</li>
        <li className={s.resFoll}>- Seguidores: {userinfo.followers}</li>
        <li className={s.resFoll}>- Seguindo: {userinfo.following} </li>
      </ul>
    </div>
  </div>
);

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }),
};

export default UserInfo;
