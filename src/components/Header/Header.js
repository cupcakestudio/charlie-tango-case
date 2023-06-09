import logo from "@/assets/edc-logo.svg";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import StepBar from "src/components/stepBar.jsx";

export function Header() {
  return (
    <header className="wrapper_header">
      <Link href="/" aria-label="EDC">
        <Image
          className={styles.logo}
          src={logo.src}
          width={64}
          height={64}
          alt="EDC"
          priority
        />
      </Link>
    </header>
  );
}
