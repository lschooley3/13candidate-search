import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await searchGithub();
      setCandidates(data);
      const userData = await searchGithubUser(data[currentIndex].login);
      setCurrentCandidate(userData);
    };
    fetchData();
  }, []);

  const handleNext = async (save:boolean) => {
    if (save) {
      const currentCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      currentCandidates.push(currentCandidate);
      localStorage.setItem('savedCandidates', JSON.stringify(currentCandidates));
      // Save the current candidate to local storage
    }
    if (currentIndex < candidates.length -1) {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    const userData = await searchGithubUser(candidates[newIndex].login);
    setCurrentCandidate(userData);
    } else {
      setCurrentIndex(0);
      const data = await searchGithub();
      setCandidates(data);
      const userData = await searchGithubUser(data[currentIndex].login);
      setCurrentCandidate(userData);

  };
}

  return (
    <>
    <h1>Candidate Search</h1>
    <CandidateCard candidate={currentCandidate} handleNext={handleNext} />

    </>
  )
};

export default CandidateSearch;
