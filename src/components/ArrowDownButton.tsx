import IconButton, { IconButtonProps } from "./IconButton";
import React from "react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArrowDownButton: React.FC<IconButtonProps> = ({ children, ...props }) => {
  return (
    <IconButton {...props}>
      <FontAwesomeIcon icon={faArrowDown} />
    </IconButton>
  );
};

export default ArrowDownButton;
