import s from "./LoadMore.module.css";

export default function LoadMore({ onLoad }) {
  return (
    <div>
      <button className={s.btn} type="button" onClick={onLoad}>
        Load More
      </button>
    </div>
  );
}
