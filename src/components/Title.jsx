import React from "react";

export default function Title(prop) {
  return (
    <div className="container-fluid">
      <h3 className="mx-auto title">{prop.title}</h3>
    </div>
  );
}
