import { getPost } from "@/lib/data";
import fs from "fs";
import md from "markdown-it";
import Head from "next/head";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(".md", ""),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { content, data } = await getPost(slug);

  return {
    props: {
      content,
      data,
    },
  };
}

export default function postPage({ content, data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="prose mx-auto">
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </>
  );
}
