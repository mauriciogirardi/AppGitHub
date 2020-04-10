import React from "react";

import s from "./pagination.css";
const Dots = () => <span>...</span>;

const Page = ({ page, pageLink, onClick }) => {
  const Component = page === "..." ? Dots : "a";

  const handleClick = !onClick
    ? null
    : (e) => {
        e.preventDefault();
        onClick(page);
      };

  return (
    <Component href={pageLink} onClick={handleClick} className={s.pageA}>
      {page}
    </Component>
  );
};
export default Page;
