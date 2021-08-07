import React, { useState } from "react";
import { db } from "../../firebase";
import MarketingEdit from "./MarketingEdit";
function MarketingDisplay(props) {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleDelete = async () => {
    await db.collection("marketing").doc(props.id).delete();
    await console.log("delete sucessfully");
  };
  return (
    <div className="marketing-display">
      <div className={edit ? "d-none" : "marketing__value"}>
        <span>{props.index}</span>
        <span>{props.date}</span>
        <span>{props.taka}</span>
        <span className="edit" onClick={handleEdit}>
          Edit
        </span>
        <span className="delete" onClick={handleDelete}>
          Delete
        </span>
      </div>
      {edit && <MarketingEdit id={props.id} handleEdit={handleEdit} />}
    </div>
  );
}

export default MarketingDisplay;
