import axios from 'axios'
import { CommitInfo, CommitSummary } from '../common'

export const getCommits = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://api.github.com/repos/danybozaftf/dynastyownertest/commits')
      .then(response => {
        const commits: CommitSummary[] = []
        const commitsInfoList = response.data as CommitInfo[]
        commitsInfoList.forEach(commitsInfo => {
          const commit: CommitSummary = {
            committer: commitsInfo.commit.committer,
            message: commitsInfo.commit.message,
            node_id: commitsInfo.node_id,
            sha: commitsInfo.sha
          }
          commits.push(commit)
        })
        resolve(commits)
      })
      .catch(err => reject(err))
  })
}
