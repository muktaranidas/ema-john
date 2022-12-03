import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserContext, { AuthContext } from "../contexts/UserContext";

// "name": "Photo Illustration by Kim Bubello",
//     "seller": "Samsung; Nintendo; Sony; Amazon",
//     "price": 420,
//     "stock": 20,
//     "ratings": 4,
//     "ratingsCount": 3725,
//     "img": "https://api.time.com/wp-content/uploads/2017/11/sony_a7r_mark_ii-top-10-best-gadgets.jpg",
//     "shipping": 1,
//     "quantity": 0

const AddProduct = () => {
  const { user } = UserContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const seller = form.seller.value;
    const stock = form.stock.value;
    const ratings = form.ratings.value;
    const shipping = form.shipping.value;
    const quantity = form.quantity.value;
    const ratingsCount = form.ratingsCount.value;
    console.log(
      name,
      price,
      seller,
      email,
      ratings,
      stock,
      shipping,
      ratingsCount,
      quantity
    );

    const addProduct = {
      email,
      name,
      seller,
      price,
      ratings,
      stock,
      ratingsCount,
      shipping,
      quantity,
    };
    console.log(addProduct);

    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate(from, { replace: true });
        // if (data.acknowledged) {
        //   //   setTreatment(null);
        //   //   toast.success("Booking Confirmed");
        //   //   refetch();
        // } else {
        //   //   toast.error(data.message);
        // }
      });
  };

  return (
    <div>
      <div className="my-12">
        <form onSubmit={handleSubmit}>
          {/* <h3 className="form-title  ">Add Your Product</h3> */}
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-control">
            <label htmlFor="stock">Stock</label>
            <input type="number" name="stock" required />
          </div>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required />
          </div>
          <div className="form-control">
            <label htmlFor="price">Price </label>
            <input type="number" name="price" required />
          </div>
          <div className="form-control">
            <label htmlFor="seller">Seller </label>
            <input type="text" name="seller" required />
          </div>
          <div className="form-control">
            <label htmlFor="ratings">Ratings </label>
            <input type="number" name="ratings" required />
          </div>
          <div className="form-control">
            <label htmlFor="ratingsCount">ratingsCount </label>
            <input type="number" name="ratingsCount" required />
          </div>
          <div className="form-control">
            <label htmlFor="shipping">shipping </label>
            <input type="number" name="shipping" required />
          </div>
          <div className="form-control">
            <label htmlFor="quantity">quantity </label>
            <input type="number" name="quantity" required />
          </div>
          <input className="btn-submit" type="submit" value="Add Product" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
