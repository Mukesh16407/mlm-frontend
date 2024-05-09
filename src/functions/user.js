import axios from "axios";

export const CreateUser = async (name, parentId) => {
  try {
    const response = await axios.post(
      `https://metastic-world.onrender.com/api/createUser`,
      {
        name,
        parentId,
      }
    );
    console.log("User created:", response.data);
  } catch (error) {
    console.error("Error creating user:", error.response.data.error);
  }
};

export const distributeEarnings = async (userId, amount) => {
  try {
    const response = await axios.post(
      `${import.meta.env.REACT_APP_API}/api/distributeEarnings`,
      {
        userId,
        amount,
      }
    );
    console.log("Earnings distributed:", response.data.message);
  } catch (error) {
    console.error("Error distributing earnings:", error.response.data.error);
  }
};
