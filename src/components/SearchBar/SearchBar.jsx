import { Formik, Form, Field } from "formik";
import s from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ onChangeQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    if (values.query === "") {
      return toast.error("Please enter a search query!", {
        duration: 3000,
        position: "top-right",
      });
    }
    onChangeQuery(values.query);
  };
  return (
    <header className={s.form}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="query"
            placeholder="Search images and photos"
            className={s.input}
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
