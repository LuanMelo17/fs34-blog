import { useParams } from "react-router-dom"
import Layout from "../components/Layout";
import Post from "../components/Post";

export default function PostPage() {
  let params = useParams();
  console.log(params.postSlug);

  return (
    <Layout>
      <Post>
      <h1>Slug do Post: {params.postSlug}</h1>
      </Post>
    </Layout>
  )
}