import React from "react";
import PropTypes from "prop-types";

import "./index.css";

interface SearchProps {
  query?: string;
  // children?: any;
  _onSearch: (args: any) => void;
  count?: number;
}

const Search = (props: SearchProps) => {
  return (
    <div className="podcast-search">
      <span>{props.count}</span>
      <input
        placeholder="Filter podcasts"
        onChange={props._onSearch}
        type="search"
        value={props.query}
      />
    </div>
  );
};

Search.displayName = "ISearch";

Search.defaultProps = {
  className: "",
};

Search.propTypes = {
  className: PropTypes.string,
  extra: PropTypes.node,
};

export default Search;
