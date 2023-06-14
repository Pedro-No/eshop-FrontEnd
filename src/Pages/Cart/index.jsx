import { useState, useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/auth.context.jsx";

function Cart() {
  const [items, setItems] = useState([]);
  const [bought, setBought] = useState([]);
  const { user } = useContext(AuthContext);

  const getCartItems = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/${user._id}/cart`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setItems(response.data.items);
      console.log("here", response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (itemId) => {
    axios
      .put(`${import.meta.env.VITE_APP_SERVER_URL}/api/${user._id}/paid/${itemId}`)
      .then(function (response) {
        setBought(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  const removeFromCart = (itemId) => {
    axios
      .put(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/${
          user._id
        }/cart/del/${itemId}`
      )
      .then((response) => {
        setItems((prevItems) =>
          prevItems.filter((item) => item._id !== itemId)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="illustration-list">
      {items.length === 0 && <p>Your cart is empty</p>}
      {items &&
        items.map((item) => (
          <div key={item._id} className="illustration-card">
            <img src={item.imageUrl} alt={item.name} />
            <div className="illustration-card-text">
              <p>{item.name} {item.price}€</p>
            </div>
            <div className="illustration-card-links">
              <a onClick={() => removeFromCart(item._id)}>remove</a>
              <a onClick={() => handleClick(item._id)}>buy</a>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Cart;
