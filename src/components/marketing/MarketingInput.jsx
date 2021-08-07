import React, { useRef, useState } from "react";
import { db } from "../../firebase";
function MarketingInput() {
  const takaRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await db.collection("marketing").add({
        taka: parseInt(takaRef.current.value),
        date: new Date().toDateString(),
      });

      console.log("add sucsessfully");
    } catch {
      console.log("add failed");
    }
    setLoading(false);
    takaRef.current.value = null;
  };

  return (
    <div className="col-md-4 marketing__input mt-2">
      <div className="marketing__title">
        <span>Taka</span>
        <span>Update</span>
      </div>
      <form onSubmit={handleUpdate} className="marketing__form">
        <input type="number" name="taka" ref={takaRef} />
        <button
          type="submit"
          disabled={loading}
          className="btn marketing__update"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default MarketingInput;
