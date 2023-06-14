import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function EditIllustration() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(0);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_SERVER_URL}/api/illustration/${id}`)
      .then((response) => {
        const oneIllustration = response.data;
        setName(oneIllustration.name);
        setPrice(oneIllustration.price);
        setDate(oneIllustration.date);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name, price, date };

    axios
      .put(`${import.meta.env.VITE_APP_SERVER_URL}/api/illustration/${id}`, requestBody)
      .then((response) => {
        navigate(`/illustration/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteIllustration = () => {
    axios
      .delete(`${import.meta.env.VITE_APP_SERVER_URL}/api/illustration/${id}`)
      .then(() => {
        navigate("/illustration");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Link to={`/illustration/${id}`}>
        Back
      </Link>
      
      <h3>Edit your illustration!</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label><br></br>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br></br>

        <label>Price</label><br></br>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        /><br></br>
        <label>Date</label><br></br>
        <input
          type="number"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        /><br></br>
        <Link to={`/illustration/${id}`}><button type="submit" onClick={handleFormSubmit}>Edit</button></Link>
      </form>
      <Link to={`/illustration`}>
  <button onClick={deleteIllustration}>Delete your illustration?</button>
</Link>

    </div>
  );
}

export default EditIllustration;
