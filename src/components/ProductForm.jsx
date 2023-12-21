import { useState, useEffect } from "react";

function ProductForm() {
  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState();
  const [description, setdescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const formData = {
        name,
        price: parseInt(price),
        image,
        description,
      };
      alert(JSON.stringify(formData, null, 2));
      setSubmitted(false); // reset เพื่อไม่ให้ alert ซ้ำ
    }
  }, [submitted, name, price, image, description]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={(event) => {
              setname(event.target.value);
            }}
            required
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={image}
            onChange={(event) => {
              setimage(event.target.value);
            }}
            required
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={price}
            onChange={(event) => {
              setprice(event.target.value);
            }}
            required
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={description}
            onChange={(event) => {
              setdescription(event.target.value);
            }}
            required
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
