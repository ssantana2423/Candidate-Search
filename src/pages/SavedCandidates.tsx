import { useState, useEffect } from "react";
const SavedCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("candidates")) || [];
    setCandidates(data)
  }, []);
  console.log(candidates)
  return (
    <>
      <h1>Potential Candidates</h1>
      <div>
        {candidates.map((candidate, index) => {
          return (
            <div key={index}>
              <h2>{candidate.login ? candidate.login : "username not available"}</h2>
              <img src={candidate.avatar_url} alt={candidate.login} />
              <p>{candidate.bio ? candidate.bio : "userbio not available"}</p>
              <p>{candidate.location ? candidate.location : "userlocation not available"}</p>
              <p>{candidate.email ? candidate.email : "useremail not available"}</p>
              <p>{candidate.blog ? candidate.blog : "userblog not available"}</p>
              <p>{candidate.twitter_username ? candidate.twitter_username : "usertwitterusername not available"}</p>
              <p>{candidate.public_repos ? candidate.public_repos : "userpublic_repos not available"}</p>
              <p>{candidate.followers ? candidate.followers : "userfollowers not available"}</p>
              <p>{candidate.following ? candidate.following : "userfollowing not available"}</p>
            </div>
          )
        })}
        </div>
    </>
  );
};

export default SavedCandidates;
