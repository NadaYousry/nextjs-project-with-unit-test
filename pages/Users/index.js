import React, { useEffect, useState } from "react";
import UserCard from "../../components/UserCard/UserCard";
import axios from "axios";
const Users = () => {
  const [results, setResults] = useState([]);
  const fetchingData = async (url) => {
    await axios.get(url).then((response) => {
      setResults(response.data);
    });
    return results;
  };

  useEffect(() => {
    fetchingData("https://jsonplaceholder.typicode.com/users" );
  }, []);

  return (
    <div className={`container py-5`}>
      <h2 className="mb-5 text-center">Users List</h2>
      <div className={`row`}>
        {results.map((data) => {
          return (
            <div key={data.id} className="col-lg-6 col-12" data-testid="data">
              <UserCard data={data} link={true} />
            </div>
          );
        })}
      </div>
      {results?.length === 0 && <div data-testid="loading">loading ...</div>}
    </div>
  );
};

export default Users;
