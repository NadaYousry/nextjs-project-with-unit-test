import React, { useState } from "react";
import styles from "./UserCard.module.css";
import { useRouter } from "next/router";

const UserCard = ({ data, link }) => {
  const router = useRouter();
  const [switchChecked, setSwitchChecked] = useState(true);
  const changeSwitchButton = (e) => {
    setSwitchChecked(!switchChecked);
  };
  return (
    <>
      {data && (
        <div
          className={`${styles.cardContainer} ${link ? styles.clickable : ""}`}
          onClick={() => {
            link && router.push(`Users/${data?.id}`);
          }}
        >
          <div className="row">
            <div className="col-10">
              {router.pathname === "/Users/[id]" && (
                <>
                  <p>
                    <span className={styles.title}>ID: </span>
                    {data.id}
                  </p>
                  <p>
                    <span className={styles.title}>Email: </span>
                    {data.email}
                  </p>
                </>
              )}
              <p>
                <span className={styles.title}>Name: </span>
                {data.name}
              </p>
              <p>
                <span className={styles.title}>Phone: </span>
                {data.phone}
              </p>

              {router.pathname === "/Users/[id]" && (
                <p>
                  <span className={styles.title}>Company: </span>
                  {data.company?.name}
                </p>
              )}
            </div>

            <div className="col-2 d-flex justify-content-start flex-column align-items-center">
              {router.pathname === "/Users/[id]" && (
                <>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      data-testid="switcher"
                      checked={switchChecked}
                      onChange={changeSwitchButton}
                    />
                  </div>
                  <p className={`${styles.activeText} my-4`}>
                    {switchChecked ? "Active User" : "Inactive User"}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default UserCard;
