// TODO: Create an interface for the Candidate objects returned by the API

export interface Candidate {
  login: string;
  avatar_url: string;
  html_url: string;
  location: string;
  bio: string;
  email: string;
  company: string;
}
