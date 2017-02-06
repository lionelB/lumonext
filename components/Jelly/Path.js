import React from "react";

const Path = ({path, style}) => (
  <path d={path} {...style} />
)

Path.propTypes = {
  style: React.PropTypes.object,
  path: React.PropTypes.string
}

export default Path;
