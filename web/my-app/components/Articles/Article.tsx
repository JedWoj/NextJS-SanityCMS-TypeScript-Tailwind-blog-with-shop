import { post } from "./post-type";
import Image from "next/image";
import { urlFor } from "../../../../lib/sanity.js";
import PortableText from "react-portable-text";
import Return from "../UI/Return";

const Article = ({ post }: { post:post[] }) => {
    const singlePost = post.at(0);

    return (
        <article className={`container mx-auto my-6 min-h-[100vh] border rounded shadow-2xl relative`}>
            <header className={`mx-12 xl:mx-32 2xl:mx-64 text-center overflow-hidden h-[80vh]`}>
                <h1 className="py-12 text-3xl lg:text-5xl gradient--text">
                    {singlePost?.header}
                </h1>
                <figure className='h-4/5 relative'>
                    <Image layout='fill' objectFit='cover' className='rounded-t-md' src={urlFor(singlePost?.image.asset._ref).url()} alt={singlePost?.header} />
                </figure>
            </header>
            <section className="mx-12 mt-6 xl:mx-32 2xl:mx-64 text-justify mb-12 gradient--text font-semibold">
                <PortableText content={singlePost!.content} />
            </section>
            <Return dest="/blog" />
        </article>
    )
}

export default Article;