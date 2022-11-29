import React, { useState } from "react";

function Create() {
  const [text, setText] = useState("");

  // Add function
  const postData = (e) => {
    e.preventDefault();
    const myData = {
      id: Date.now(),
      text: text,
    };
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData),
    };
    fetch(`http://localhost:3000/todos`, fetchOptions);
    setText('')
  };

  return (
    <form onSubmit={postData}>
      <input
        id="text"
        name="text"
        type="text"
        placeholder="Enter Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="submit" value="Add"/>
    </form>
  );
}

export default Create;
