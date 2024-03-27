import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
function ResultModal({ remainTime, targettime, onReset }, ref) {
  const userLost = remainTime <= 0;
  const score = Math.round(1 - (remainTime / (targettime * 1000)) * 100);
  const dialog = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
      {userLost ? <h2>You Lost</h2> : <h2>You Score:{score}</h2>}
      <p>
        Target time was <strong>{targettime} seconds</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{(remainTime / 1000).toFixed(2)} seconds left.</strong>
      </p>
      <form method="dialog">
        <button onClick={onReset}>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}

export default forwardRef(ResultModal);
