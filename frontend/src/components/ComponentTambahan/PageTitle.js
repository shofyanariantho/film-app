import React from "react";

const PageTitle = (props) => {
  return (
    <div className="card-header">
      <h1 className="text-center">{props.title}</h1>
    </div>
  );
};

PageTitle.defaultProps = {
  title: "Default Title",
};

export default PageTitle;