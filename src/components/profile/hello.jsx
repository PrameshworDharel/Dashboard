import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import MyModal from "./profile/demo";

const CardCenter = [
  {
    title: "$3.456K",
    percentage: "0.43%",
    Total: "Total views",
  },
  {
    title: "$3.456K",
    percentage: "0.43%",
    Total: "Total Profit",
  },
  {
    title: "$3.456K",
    percentage: "0.43%",
    Total: "Total Product",
  },
  {
    title: "$3.456K",
    percentage: "0.43%",
    Total: "Total Users",
  },
];

const Center = () => {
  const [isEditModelOpen, setIsEditModelOpen] = useState(false);
  const [isAddModelOpen, setIsAddModelOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    status: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [data, setData] = useState([
    {
      id: 1,
      name: "Prameshwor Dharel",
      email: "2058dharel@gmail.com",
      Status: "Pending",
    },
    {
      id: 2,
      name: "Prameshwor Dharel",
      email: "2058dharel@gmail.com",
      Status: "Pending",
    },
    {
      id: 3,
      name: "Prameshwor Dharel",
      email: "2058dharel@gmail.com",
      Status: "Pending",
    },
  ]);

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    }
    if (!formData.status.trim()) {
      errors.status = "Status is required.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newData = {
        id: data.length + 1,
        name: formData.name,
        email: formData.email,
        Status: formData.status,
      };

      setData((prevData) => [...prevData, newData]);

      setFormData({
        name: "",
        email: "",
        status: "",
      });

      setIsAddModelOpen(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancelEdit = () => {
    setFormData({
      name: "",
      email: "",
      status: "",
    });
    setIsEditModelOpen(false);
  };

  return (
    <>
      <div className="bg-primary text-Dark">
        <div className="p-10 flex justify-between">
          {CardCenter.map((center, index) => (
            <div key={index} className="p-5 shadow-xl">
              <h1>{center.title}</h1>
              <div className="flex gap-10 mt-10">
                <h1>{center.Total}</h1>
                <h1 className="font-bold">{center.percentage}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mr-48 mt-5">
          <button
            className="bg-Dark text-primary px-2 py-1"
            onClick={() => setIsAddModelOpen(!isAddModelOpen)}
          >
            Add
          </button>
        </div>
        <MyModal
          isOpen={isAddModelOpen}
          closeModal={() => setIsAddModelOpen(false)}
        >
          <div className="w-[450px] p-10">
            <form onSubmit={handleAddSubmit}>
              <div className="">
                <label className="mb-4">Name</label>
                <input
                  type="text"
                  name="name"
                  className="ml-10 px-3 py-3"
                  value={formData.name}
                  onChange={handleChange}
                />
                {formErrors.name && (
                  <span className="text-Red ml-20 mt-2">{formErrors.name}</span>
                )}
              </div>
              <div className="mt-5">
                <label className="mb-4">Gmail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="ml-10 px-3 py-3"
                />
                {formErrors.email && (
                  <span className="text-Red ml-20 mt-2">{formErrors.email}</span>
                )}
              </div>
              <div className="mt-5">
                <label className="mb-4">Status</label>
                <input
                  type="text"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="ml-10 px-3 py-3"
                />
                {formErrors.status && (
                  <span className="text-Red ml-20 mt-2">{formErrors.status}</span>
                )}
              </div>

              <div className="flex gap-2 mt-10">
                <button
                  type="submit"
                  className="bg-tertiary ml-32 px-5 py-2"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddModelOpen(false)}
                  className="bg-tertiary px-5 py-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </MyModal>

        <div className="mt-10 flex justify-center">
          <table className="bg-shadow border w-[900px]">
            <thead>
              <tr className="flex justify-between p-3">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val) => (
                <tr key={val.id} className="flex justify-between p-2">
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.Status}</td>
                  <td className="flex gap-5">
                    <button
                      onClick={() => setIsEditModelOpen(!isEditModelOpen)}
                    >
                      <FaRegEdit />
                    </button>
                    <button
                      type="button"
                      className=""
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <MyModal
            isOpen={isEditModelOpen}
            closeModal={() => setIsEditModelOpen(false)}
          >
           
          </MyModal>
        </div>
      </div>
    </>
  );
};

export default Center;
