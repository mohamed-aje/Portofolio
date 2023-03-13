import React, { useState } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div className=" italic hover:not-italic  font-semibold	 tracking-tight hover:tracking-wide leading-4 dark:text-white	">
      {currentTime}
    </div>
  );
};

export default Clock;
