import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import UserCard from "../../components/UserCard/UserCard";

const Users = () => {
  const router = useRouter();
  const [results, setResults] = useState({});
  useEffect(() => {
    if (router.query.id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${router.query.id}`)
        .then((response) => {
          setResults(response.data);
        });
    }
  }, [router]);
  return (
    <div className={`container py-5`}>
      <h2 className="mb-5 text-center">User Details</h2>
      <div>{results && <UserCard data={results} link={false} />}</div>
    </div>
  );
};

export default Users;
