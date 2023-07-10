import { useEffect, useState } from "react";

export default function App() {
  const [perPage, setPerPage] = useState(10);
  const [users, setUsers] = useState([]);
  const [paginate, setPaginate] = useState("");

  function fetchUser() {
    fetch(`https://api.github.com/users?per_page=${perPage}&page=1`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.length)
        setUsers(res);
      });
  }



  useEffect(() => {
    fetchUser();
  }, []);
  useEffect(() => {
    fetchUser();
  }, [perPage]);

  const userView = users.map((user) => (
    <div className="user-card" key={user.id}>
      <img
        src={user.avatar_url}
        alt={user.login}
        style={{ width: 100, height: 100 }}
      />
      <a href="3" target="_blank">
        {user.login}
      </a>
    </div>
  ));

  return (
    <div>
      <div>
        <select
          name=""
          id=""
          value={perPage}
          onChange={(e) => setPerPage(e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
      users:
      <div className="first">{userView}</div>
      <div className="btn">
        <button className="btn-item" onClick={(e) => setPaginate()}>
          <a href={userView} target="_self">
            1
          </a>
        </button>
        <button className="btn-item">
          <a href={userView} target="_self">
            2
          </a>
        </button>
        <button className="btn-item">
          <a href="#" target="_self">
            3
          </a>
        </button>
        <button className="btn-item">
          <a href="#" target="_self">
            4
          </a>
        </button>
      </div>
    </div>
  );
}
