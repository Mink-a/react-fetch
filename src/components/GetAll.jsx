import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GetAll() {
  const [itemList, setItemList] = useState([]);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/todos`)
      .then((res) => res.json())
      .then((data) => {
        setItemList([...data]);
      });
  }, [isDelete]);

  const onClickDelete = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, { method: "DELETE" }).then(
      () => {
        setIsDelete((prev) => !prev);
        console.log("delete success!!");
      }
    );
  };

  const allItems = itemList.map((item) => (
    <li key={item.id}>
      {item.text} ---
      <Link to={`/edit/${item.id}`}>Edit</Link> ---
      <span onClick={() => onClickDelete(item.id)}>Delete</span>
    </li>
  ));

  return (
    <>
      <Link to={"/add"}>Add New</Link>
      <ul>{allItems}</ul>
    </>
  );
}

export default GetAll;
