import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const weekday = now.toLocaleString("en-US", { weekday: "short" });
      const day = now.getDate();
      const month = now.toLocaleString("en-US", { month: "short" });

      const time = now.toLocaleString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      setDateTime(`${weekday} ${day} ${month} ${time}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{dateTime}</div>;
};

export default DateTime;
