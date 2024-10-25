import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [addValue, setAddValue] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    value === "" ? alert("Please add todo") : setAddValue([...addValue, value]);
    setValue("");
  };

  const handleDelete = (index, value) => {
    let confirmDelet = window.confirm(
      `Are you sure you want to delete this ⭕️ ${value} ⭕️ ?`
    );
    if (confirmDelet) {
      let newValue = [...addValue];
      newValue.splice(index, 1);
      setAddValue(newValue);
    }
  };

  const hadleAllDelete = () => {
    let confirmDelet = window.confirm("Are you confirm delet all todos?");
    confirmDelet && setAddValue([]);
  };

  const handleEdit = (index, value) => {
    setValue(value);
    let newValue = [...addValue];
    newValue.splice(index, 1);
    setAddValue(newValue);
  };

  return (
    <div className="main">
      <h1>TODO APP</h1>
      <form className="add" onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Add Your Todo"
        />
        <button>ADD</button>
      </form>

      {addValue.map((value, index) => {
        return (
          <div key={index} className="item">
            <h3>{value}</h3>
            <button onClick={() => handleDelete(index, value)}>Delete</button>
            <button id="edit" onClick={() => handleEdit(index, value)}>
              Edit
            </button>
          </div>
        );
      })}

      {addValue.length === 0 || addValue.length === 1 ? (
        <></>
      ) : (
        <button className="all" onClick={hadleAllDelete}>
          All Remove
        </button>
      )}
    </div>
  );
};

export default App;
