// Select Component
import React from "react";

const Text = ({ label, onUpdate, value }) => {
  return (
    <>
      <div className="text-box">
        <span className="label">{label}</span>
        <textarea
          onChange={(evt) =>
            onUpdate(evt.target.value.replace(/(?:\r)/g, "\n\n"))
          }
          value={value}
        />
      </div>
    </>
  );
};

export default Text;
