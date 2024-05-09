import axios from "axios";

export const CreateUser = async (name, parentId) => {
  try {
    const response = await axios.post(
      `https://metastic-world.onrender.com/api/users`,
      {
        name,
        parentId,
      }
    );
    console.log("User created:", response.data);
    getAllUsers();
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error.response.data.error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
};

export const distributeEarnings = async (userId, amount) => {
  try {
    const response = await axios.post(
      "https://metastic-world.onrender.com/api/distribute",
      {
        userId,
        amount,
      }
    );
    console.log("Earnings distributed:", response.data.message);
    return response.data;
  } catch (error) {
    console.error("Error distributing earnings:", error.response.data.error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(
      "https://metastic-world.onrender.com/api/users"
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
