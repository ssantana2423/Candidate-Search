import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";

const CandidateSearch = () => {
  const [search, setSearch] = useState([]);
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState({});
  useEffect(() => {
    async function fetchData() {
      if (search.length === 0) {
        const data = await searchGithub();
        setSearch(data);
      }
    }
    fetchData();
  });
  useEffect(() => {
    async function fetchData() {
      if (search.length > 0) {
        const data = await searchGithubUser(search[index].login);
        setUser(data);
      }
    }
    fetchData();
  }, [index, search]);
  console.log(search);
  console.log(user);
  function saveCandidate() {
    const storage = JSON.parse(localStorage.getItem("candidates")) || [];
    storage.push(user);
    localStorage.setItem("candidates", JSON.stringify(storage));
    setIndex(index + 1)
  }
  return (
    <div>
      <h1>CandidateSearch</h1>

      <div>
        <h2>{user.login ? user.login : "username not available"}</h2>
        <img src={user.avatar_url} alt={user.login} />
        <p>{user.bio ? user.bio : "userbio not available"}</p>
        <p>{user.location ? user.location : "userlocation not available"}</p>
        <p>{user.email ? user.email : "useremail not available"}</p>
        <p>{user.blog ? user.blog : "userblog not available"}</p>
        <p>
          {user.twitter_usernametwitter
            ? user.twitter_username
            : "usertwitterusername not available"}
        </p>
        <p>
          {user.public_repos
            ? user.public_repos
            : "userpublic_repos not available"}
        </p>
        <p>{user.followers ? user.followers : "userfollowers not available"}</p>
        <p>{user.following ? user.following : "userfollowing not available"}</p>
      </div>
      <div>
        <button onClick={() => saveCandidate()}> Save</button>
        <button onClick={() => setIndex(index + 1)}>Next</button>
      </div>
    </div>
  );
};
export default CandidateSearch;
