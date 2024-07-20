import Layout from "../Layout"
import Post from "../Post"
import { useParams } from "react-router-dom";
import posts from '../ api/posts';
import users from "../../api/users";

export default function AuthorPage() {

    let params = useParams();

    let user = users.find(function (user) {
        return user.username === params.username;
    });

    return (
        <Layout >
            <h1>Author Page</h1>
        </Layout>
    );

}