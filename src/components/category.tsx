import { Category } from "../../types";
import styles from "./category.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
interface ICategoryProps {
  category: Category[];
}
export default function Categories(props: ICategoryProps) {
  const refs = useRef(null);
  return (
    <div className={styles.container}>
      <FontAwesomeIcon
        width="15px"
        height="15px"
        onClick={() => (refs.current.scrollLeft -= 200)}
        icon={faArrowLeft}
      />
      <div ref={refs} className={styles.categories}>
        {props.category.map((category) => {
          return (
            <div className={styles.category} key={category.id}>
              <img alt={category.name} src={category.imageUrl} />
              <span>{category.name}</span>
            </div>
          );
        })}
      </div>
      <FontAwesomeIcon
        width="15px"
        height="15px"
        onClick={() => (refs.current.scrollLeft += 200)}
        icon={faArrowRight}
      />
    </div>
  );
}
