import {sanityClient, urlFor} from '../../../lib/sanity';

type slug = {
  _type: string,
  current: string,
}

type post = {
  author: string,
  header: string,
  slug: slug,
  _id: string,
}

type Props = {
  posts: post[];
}

const App = ({posts}: Props) => {
  return(
  <div>
    <ul>
      {posts.map(post => <li key={post._id}>{post.header} {post.author}</li>)}
    </ul>
  </div>)
}

export async function getStaticProps() {
  const postsQuery = ` *[_type == 'post'] {
    header,
    _id,
    author,
    slug
  }`;

  const posts = await sanityClient.fetch(postsQuery);
  return { props : {posts}}
}

export default App;