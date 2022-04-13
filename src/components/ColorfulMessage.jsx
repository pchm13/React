import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };

  // コンポーネントで囲った文字列を表示させるprops.children
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
