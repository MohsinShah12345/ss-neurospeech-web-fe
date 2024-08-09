import React, { useState } from "react";
import "./SegmentedBar.scss";
import { Segmented, Button } from "antd";

function SegmentedBar({ defaultPage }) {
  const [key1, setKey1] = useState(false);
  const [key2, setKey2] = useState(true);
  const [key3, setKey3] = useState(false);

  const onSegmentChange = (value) => {
    console.log("ON Segment Change: ", value);
  };
  const handleClick = (key) => {
    if (key === "key1") {
      setKey1(true);
      setKey2(false);
      setKey3(false);
    } else if (key === "key2") {
      setKey1(false);
      setKey2(true);
      setKey3(false);
    } else if (key === "key3") {
      setKey1(false);
      setKey2(false);
      setKey3(true);
    }
  };
  return (
    <div className="segmented-bar-wrapper">
      <div className="segmented-bar">
        <div className="segmented-menu">
          <Button
            shape="round"
            size="large"
            onClick={() => handleClick("key1")}
            className={key1 ? "clicked-btn" : ""}
          >
            Dashboard
          </Button>
          <Button
            shape="round"
            size="large"
            onClick={() => handleClick("key2")}
            className={key2 ? "clicked-btn" : ""}
          >
            Neurospeech
          </Button>
          <Button
            shape="round"
            size="large"
            onClick={() => handleClick("key3")}
            className={key3 ? "clicked-btn" : ""}
          >
            Neuropost
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SegmentedBar;
