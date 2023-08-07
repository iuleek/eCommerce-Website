import styles from "./BottomBtn.module.css";
import Button from "@/components/button";
import Link from "next/link";

export default function BottomBtn({href}) {
  return (
    <div className={styles.bottom_btn}>
      <div className="container">
        <Link className={styles.linkBtn} href={href}>
          <Button
            style="btnLarge btnDark"
            text="Proceed to checkout"
            imgPosition="none"
          />
        </Link>
      </div>
    </div>
  );
}
