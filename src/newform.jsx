import "./form.css";
import { useEffect, useState } from "react";

export const Newform = () => {
  const [nameval, setName] = useState("");
  const [showname, setshowname] = useState([]);
  function handlename(namedata) {
    setName(namedata);
  }
  function handleSubmit() {
    let oldname = JSON.parse(localStorage.getItem("name")) || [];
    const editIndex = localStorage.getItem("editIndex");
    console.log(editIndex);

    if (editIndex !== null) {
        console.log(editIndex); 
      oldname[editIndex] = nameval;
      localStorage.removeItem("editIndex");
    } else {
      oldname.push(nameval);
    }
    localStorage.setItem("name", JSON.stringify(oldname));
    setName("");
    console.log(oldname);

    setshowname(oldname); 
  }

  function stopsubmit(e) {
    e.preventDefault();
  }
  useEffect(() => {
    let oldname = JSON.parse(localStorage.getItem("name")) || [];
    setshowname(oldname);
  }, []);

  const handleUpdate = (index, name) => {
    setName(name); // Set value in input
    localStorage.setItem("editIndex", JSON.stringify(index)); // Temporarily store the index
  };

  const handleDelete = (selectedVal) => {
    const deleteitem = showname.filter((curr) => selectedVal !== curr);
    setshowname(deleteitem);
    console.log(selectedVal);
    localStorage.setItem("name", JSON.stringify(deleteitem));
  };

  return (
    <>
      <div className="parent">
        <form action="" onSubmit={stopsubmit}>
          <input
            type="text"
            placeholder="name"
            value={nameval}
            onChange={(e) => handlename(e.target.value)}
          />
          <button type="submit" className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <ul>
          {showname?.length > 0 &&
            showname?.map((name, index) => (
              <>
                <div className="lists">
                  <li>name: {name}</li>
                  <div className="btns">
                    <button
                      className="update"
                      onClick={() => handleUpdate(index, name)}
                    >
                      Update
                    </button>
                    <button
                      className="delete"
                      onClick={() => handleDelete(name)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            ))}
        </ul>
      </div>
    </>
  );
};
