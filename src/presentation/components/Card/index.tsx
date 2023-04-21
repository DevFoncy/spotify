import React from "react";
import PropTypes from "prop-types";

import "./index.css";

interface CardProps {
  className?: string;
  children?: any;
  onClick?: () => void;
  image?: string;
  title?: string;
  author?: string;
  description?: string;
}

const Card = (props: CardProps) => {
  return (
    <div
      onClick={props?.onClick}
      className={`card-container ${props.className}`}
    >
      <div>
        <img src={props.image} alt="" />
      </div>
      <h1> {props.title}</h1>
      <h2>Author: {props.author}</h2>
      {props?.description && (
        <div className="card-container-description">
          <hr />
          <b> Description: </b>
          <p>{props?.description}</p>
        </div>
      )}
    </div>
  );
};

Card.displayName = "ICardContainer";

Card.defaultProps = {
  className: "",
};

Card.propTypes = {
  className: PropTypes.string,
  extra: PropTypes.node,
};

export default Card;
