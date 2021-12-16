import { useQuery } from 'react-query'
import axios from 'axios'

export default function usePost(postId) {
  return useQuery(postId && ['post', postId], () =>
    axios.get(`/api/posts/${postId}`).then((res) => res.data)
  )
}
