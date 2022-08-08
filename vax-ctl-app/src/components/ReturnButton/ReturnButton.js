import styles from "./ReturnButton.module.css";
import Link from "next/link";
import { titles } from "../../mocks/config";

const ReturnButton = () => {
  return (
    <Link href="/">
      <div className={styles.container}>
        <span className="material-icons">arrow_back_ios</span>
        {titles.RETURN_TO_HOMEPAGE}
      </div>
    </Link>
  );
};

export default ReturnButton;
