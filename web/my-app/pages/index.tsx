import {sanityClient, urlFor} from '../../../lib/sanity';
import Image from 'next/image';

type slug = {
  _type: string,
  current: string,
}

type asset = {
  _ref: string,
  _type: string
}

type image = {
  _type: string,
  asset: asset
}

type post = {
  author: string,
  header: string,
  slug: slug,
  _id: string,
  image: image,
}

type Props = {
  posts: post[];
}

const App = ({posts}: Props) => {
  console.log(urlFor(posts[0].image.asset._ref).url());
  return(
  <div>
    <ul>
      {posts.map(post => <li key={post._id}>
        <Image src={urlFor(post.image.asset._ref).url()} alt={post.header} width={500} height={500} />
      </li>)}
    </ul>
    <h1 className='underline text-3xl'>Hello</h1>
  </div>)
}

export async function getStaticProps() {
  const postsQuery = ` *[_type == 'post'] {
    header,
    _id,
    author,
    slug,
    image
  }`;

  const posts = await sanityClient.fetch(postsQuery);
  return { props : {posts}}
}

export default App;