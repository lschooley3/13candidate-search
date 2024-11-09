import { Candidate } from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  return (
    <>
      <h1>Potential Candidates</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {JSON.parse(localStorage.getItem("savedCandidates") || "[]").length === 0 ? (
            <tr>
              <td colSpan={7}>No candidates saved</td>
            </tr>
          ) : (
            JSON.parse(localStorage.getItem("savedCandidates") || "[]").map((candidate: Candidate, index:number) => (
              <tr key={index}>
                <td>
                  <img src={candidate.avatar_url} alt="avatar" />
                </td>
                <td>
                  <a href={candidate.html_url}>{candidate.login}</a>
                </td>
                <td>{candidate.location}</td>
                <td>{candidate.email}</td>
                <td>{candidate.company}</td>
                <td>{candidate.bio}</td>
                <td>
                  <button
                    onClick={() => {
                      const savedCandidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
                      const newCandidates = savedCandidates.filter((c: Candidate) => c.login !== candidate.login);
                      localStorage.setItem("savedCandidates", JSON.stringify(newCandidates));
                      window.location.reload();
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
