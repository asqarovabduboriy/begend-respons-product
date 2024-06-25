import React, { useEffect } from "react";
import { useGetvaleinput } from "../../hook/useGetInputvalue";
import { useCreateProductMutation } from "../../context/api/productsApi";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  price: "",
  oldPrice: "",
  category: "",
  units: "",
  description: "",
  info: "",
};

const CreateProduct = () => {
  const { formdata, handleChange, setformdata } = useGetvaleinput(initialState);
  const [createProduct, { loading, isSuccess, error, data }] = useCreateProductMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("title", formdata.title);
    form.append("price", formdata.price);
    form.append("oldPrice", formdata.oldPrice);
    form.append("category", formdata.category);
    form.append("units", formdata.units);
    form.append("description", formdata.description);
    form.append("info", JSON.stringify({}));

    createProduct(form);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product created successfully");
      setformdata(initialState);
    }
    if (error) {
      toast.error("Error creating product");
    }
  }, [isSuccess, error]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login_form">
        <h1>CreateProduct</h1>
        <div className="wrapper_input">
          <div>
            <label>Title</label>
            <input
              placeholder="Enter Title"
              type="text"
              name="title"
              value={formdata?.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              placeholder="Enter Price"
              type="text"
              name="price"
              value={formdata?.price}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="wrapper_input">
          <div>
            <label>OldPrice</label>
            <input
              placeholder="Enter OldPrice"
              type="text"
              name="oldPrice"
              value={formdata?.oldPrice}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Category</label>
            <input
              placeholder="Enter Category"
              type="text"
              name="category"
              value={formdata?.category}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="wrapper_input">
          <div>
            <label>Units</label>
            <input
              placeholder="Enter Units"
              type="text"
              name="units"
              value={formdata?.units}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Info</label>
            <input
              placeholder="Enter Info"
              type="text"
              name="info"
              value={formdata?.info}
              onChange={handleChange}
            />
          </div>
        </div>
        <label>Description</label>
        <input
          placeholder="Enter Description"
          type="text"
          name="description"
          value={formdata?.description}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateProduct;
