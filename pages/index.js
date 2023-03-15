// import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
import Link from "next/link";
import {getPosts} from "@/lib/data";
import Head from "next/head";

// const inter = Inter({ subsets: ['latin'] })

export function getStaticProps() {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
}
export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Abdelrahman Shaheen</title>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
        {posts?.map(({ slug, data }) => (
            <div
                key={slug}
                className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              <Link href={`/post/${slug}`}>
                <Image width={700} height={500} src={`/${data.image}`} alt={data.title}/>
                <h1 className='p-4'>{data.title}</h1>
              </Link>
            </div>
        ))}
      </div>
    </>
  );
}
