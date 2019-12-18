import axios from "axios";

export const getCommits = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://api.github.com/repos/danybozaftf/dynastyownertest/commits")
      .then(response => {
        console.log({ response });
      })
      .catch(err => reject(err));
  });
};
