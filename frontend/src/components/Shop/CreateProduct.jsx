import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../static/data";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const CreateProduct = () => {
  const { seller } = useSelector((state) => state.seller);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };
  return (
    <div className="800px:w-[50%] w-[90%] bg-white shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] text-Poppins text-center">Create Product</h5>
      {/* Create Product */}

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <br />
        <div>
          <label className="pb-2">
            Name <span className="text-[red] ">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your product name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Description */}
        <br />
        <div>
          <label className="pb-2">
            Description <span className="text-[red] ">*</span>
          </label>
          <input
            type="text"
            name="description"
            value={description}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your product description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/* Category */}
        <br />
        <div>
          <label className="pb-2"></label>
          Category <span className="text-[red] ">*</span>
          <select
            name=""
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            id=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value={"Choose a category"}> Choose a category</option>
            {categoriesData &&
              categoriesData.map((i, index) => {
                return (
                  <option value={i.title} key={index}>
                    {i.title}
                  </option>
                );
              })}
          </select>
        </div>

        {/* Tags */}
        <br />
        <div>
          <label className="pb-2">
            Tags <span className="text-[red] "></span>
          </label>
          <input
            type="text"
            name="tags"
            value={tags}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your product tags"
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        {/* Original Price */}
        <br />
        <div>
          <label className="pb-2">
            Original Price <span className="text-[red] "></span>
          </label>
          <input
            type="number"
            name="price"
            value={originalPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your product price"
            onChange={(e) => setOriginalPrice(e.target.value)}
          />
        </div>
        {/* Price (with Discount) */}
        <br />
        <div>
          <label className="pb-2">
            Price (with Discount) <span className="text-[red] ">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={originalPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your product discount  price"
            onChange={(e) => setDiscountPrice(e.target.value)}
          />
        </div>
        {/* Product Stock */}
        <br />
        <div>
          <label className="pb-2">
            Product Stock <span className="text-[red] ">*</span>
          </label>
          <input
            type="number"
            name="stock"
            value={stock}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your product discount  stock"
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        {/* Upload Images */}
        <br />
        <div>
          <label className="pb-2">
            Upload Images <span className="text-[red] ">*</span>
          </label>
          <input
            type="file"
            id="upload"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <label htmlFor="upload">
            <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
          </label>
          <div className="flex w-full">
            {images &&
              images.map((i, index) => {
                return (
                  <img
                    src={URL.createObjectURL(i)}
                    key={i}
                    alt=""
                    className="h-[120px] w-[120px] object-cover m-2"
                  />
                );
              })}
          </div>
        </div>

        <br />
        <div>
          <input
            type="submit"
            value={"Create"}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            name=""
            id=""
          />
        </div>
      </form>
    </div>
  );
};
