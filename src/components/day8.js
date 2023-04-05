import React, { useState, useEffect } from 'react';

function Msg() {
  const [message, setMessage] = useState("Hi girl!!");

  useEffect(() => {
    console.log("useEffect called");
    setTimeout(() => {
      setMessage("just like a flower, your beauty radiates to the morning son");
    }, 2000);
  }, []);

  return (
    <center><div>
      <h1>{message}</h1>
    </div></center>
  );
}

export default Msg;