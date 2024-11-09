import { Candidate } from "../interfaces/Candidate.interface";

interface CandidateCardProps {
    candidate: Candidate | null;
    handleNext: (save: boolean) => void;
    }

const CandidateCard:React.FC<CandidateCardProps> = ({candidate, handleNext}) => {
    if(!candidate) {
        return <div>No candidate found</div>;
    }
  return (
    <div>
      <div className="card">
        <div className="card-body">
            <img className="card-image" src={candidate.avatar_url} alt="avatar" />
          <h5 className="card-title"><a href={`${candidate.html_url}`}>{candidate.login}</a></h5>
          <p className="card-text">Location: {candidate.location}</p>
          <p className="card-text">Email: {candidate.email}</p>
          <p className="card-text">Company: {candidate.company}</p>
          <p className="card-text">Bio: {candidate.bio}</p>
        </div>
      </div>
      <button onClick={()=>handleNext(false)}>X</button>
      <button onClick={()=>handleNext(true)}>+</button>
    </div>
  );
}

export default CandidateCard;
