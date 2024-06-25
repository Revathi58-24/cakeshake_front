import React, { useState, useEffect } from "react";
import axios from "axios";

export const Gallery = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);

  const handlePost = () => {
    axios.post("http://localhost:5001/users", { name, imageUrl })
      .then(() => { 
        alert("Data saved");
        setName("");
        setImageUrl("");
        handleread();
      })
      .catch((e) => { 
        console.log(`Error: ${e}`);
      });
  };

  const handleread = () => {
    axios.get("http://localhost:5001/users")
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch(() => {
        console.log("Error occurred in read");
      });
  };

  useEffect(() => {
    handleread();
  }, []);

  const handleEdit = (userid) => {
    setId(userid.id);
    setName(userid.name);
    setImageUrl(userid.imageUrl);
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:5001/users/${id}`, { name, imageUrl })
      .then(() => {
        alert("Data updated");
        setName("");
        setImageUrl("");
        setId(null);
        handleread();
      })
      .catch(() => {
        alert("Data not updated");
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5001/users/${id}`)
      .then(() => {
        alert("Data deleted");
        handleread();
      })
      .catch(() => {
        alert("Error occurred in delete");
      });
  };

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        id ? handleUpdate() : handlePost();
      }}>
        Name: 
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        /><br/>
        Image url:
        <input 
          type="text" 
          value={imageUrl} 
          onChange={(e) => setImageUrl(e.target.value)} 
        /><br/>
        <button type="submit">{id ? "Update" : "Post"}</button>
      </form>
      
      <ul>
        {data.map((i) => (
          <li key={i.id}>
            Name: {i.name}<br/>
            <img src={i.imageUrl} alt="cake" style={{width: '70px', height: '70px'}} />
            <br/>
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => handleDelete(i.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
