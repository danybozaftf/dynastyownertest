export interface CommitInfo {
  sha: string
  node_id: string
  commit: {
    message: string
    committer: {
      name: string
      email: string
      date: string
    }
  }
}

export interface CommitSummary {
  sha: string
  node_id: string
  committer: {
    name: string
    email: string
    date: string
  }
  message: string
}
