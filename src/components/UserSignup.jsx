import { useState } from "react";
import { createUser } from "../functions/user";

export const UserSignup = () => {
  const [name, setName] = useState("");
  const [parentId, setParentId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      await createUser(name, parentId);
      setName("");
      setParentId("");
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
  };

  return (
    <div className="user-signup-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Parent ID (optional):
          <input
            type="text"
            value={parentId}
            onChange={(e) => setParentId(e.target.value)}
          />
        </label>
        <button type="submit">Create User</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </div>
  );
};
