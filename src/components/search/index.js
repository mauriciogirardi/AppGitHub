import React, { PropTypes } from "react";
import s from "./search.css";

const Search = ({ isDisabled, handleSearch }) => (
  <div className={s.search}>
    <input
      type="search"
      placeholder="Digite o nome do usuário no GitHub!"
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default Search;
