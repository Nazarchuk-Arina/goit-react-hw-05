import { Hearts } from "react-loader-spinner";

const Loader = () => {
  return (
    <Hearts
      height="180"
      width="180"
      color="#F76D6D"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
