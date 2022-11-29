import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [singleData, setSingleData] = useState({id: id, text: ''});

  useEffect(() => {
    fetch(`http://localhost:3000/todos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleData({...data});
      });
    }, []);

  const updateData = (e) => {
    e.preventDefault();
    const myData = {
      id: id,
      text: singleData.text,
    };
    const fetchOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData),
    };
    fetch(`http://localhost:3000/todos/${id}`, fetchOptions);
  };

  return (
    <form onSubmit={updateData}>
      <input
        id="text"
        name="text"
        type="text"
        placeholder="Enter Text"
        value={singleData.text}
        onChange={(e) => setSingleData({...singleData, text: e.target.value})}
      />
      <input type="submit" value="Update" />
    </form>
  );
}

export default Update;
