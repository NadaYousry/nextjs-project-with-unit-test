import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NextLogo from "../../assets/images/nextLogo.png";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [userData, seUserData] = useState("");
  useEffect(() => {
      seUserData(JSON.parse(localStorage.getItem("user")));
  }, [router.pathname]);
  return (
    <div className={styles.navbar}>
      <div className={`imageContainer`}>
        <Image className={`nextLogo`} src={NextLogo} alt="Next logo" />
      </div>
      <div className={styles.navContent}>
        {userData ? (
          <span className={styles.loginButton}>{userData?.email}</span>
        ) : router.pathname === "/Login" ? (
          <></>
        ) : (
          <Link href="/Login">
            <a className={styles.loginButton}>Login</a>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
