import { Formik, Form, Field } from "formik";
import s from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return alert("Please enter a value!");
    onSubmit(input);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        className={s.input}
        value={input}
        onChange={handleChange}
        placeholder="Search movies..."
        autoFocus
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
