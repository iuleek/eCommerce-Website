import Link from "next/link";
import styles from "./Step.module.css";

export default function Step({ stepNumber, label, active, href }) {
  const isActive = active === stepNumber;
  return (
    <div>
      <Link className={styles.stepper_link} href={href}>
        <div className={`${styles.stepper_item} ${isActive && styles.stepper_active}`}>
          <span>{stepNumber}</span>
          <p>{label}</p>
        </div>
      </Link>
      <span className={styles.divider}></span>
    </div>
  );
}
