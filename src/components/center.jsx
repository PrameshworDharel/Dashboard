import React, { useState, useEffect } from "react"
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import MyModal from "./profile/demo";
import { v4 as uuid } from 'uuid';


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
  const [data, setData] = useState([

  ]);
  const [formData, setFormData] = useState({
    id: uuid(),
    name: "",
    email: "",
    status: "",
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };


    fetchData();
  }, []);

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


  const senddata = async () => {
    try {
      const response = await axios.post("http://localhost:5000/users/", formData);
      setData([...data, response.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newData = {
        id: uuid(),
        name: formData.name,
        email: formData.email,
        Status: formData.status,
      };
      setData((prevData) => [...prevData, newData]);
      setFormData({
        id: uuid(),
        name: "",
        email: "",
        status: "",
      });
    }
    senddata()



    setIsAddModelOpen(false);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const updatedData = data.map((item) =>
        item.id === formData.id
          ? {
            ...item,
            name: formData.name,
            email: formData.email,
            Status: formData.status,
          }
          : item
      );


      setData(updatedData);

      setFormData({
        id: null,
        name: "",
        email: "",
        status: "",
      });

      setIsEditModelOpen(false);
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
      id: null,
      name: "",
      email: "",
      status: "",
    });
    setIsEditModelOpen(false);
  };

  const handleEditClick = (id) => {
    const selectedData = data.find((item) => item.id === id);
    setFormData({
      id: selectedData.id,
      name: selectedData.name,
      email: selectedData.email,
      status: selectedData.Status,
    });
    setIsEditModelOpen(true);
  };
  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
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
            <thead className="border">
              <tr className="flex justify-between p-3 ">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((val) => (
                <tr key={val.id} className="flex justify-between  p-2">
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.Status}</td>
                  <td className="flex gap-5">
                    <button onClick={() => handleEditClick(val.id)}>
                      <FaRegEdit />
                    </button>
                    <button onClick={() => handleDelete(val.id)} type="button" className="">
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
            <div className="w-[450px] p-10">
              <form onSubmit={handleEditSubmit}>
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
                    Update
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditModelOpen(false)}
                    className="bg-tertiary px-5 py-2"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </MyModal>
        </div>
      </div>
    </>
  );
};

export default Center;
