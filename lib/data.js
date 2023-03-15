import fs from "fs";
import matter from "gray-matter";

export function getPosts() {
  // Get All Posts
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const content = fs.readFileSync(`posts/${fileName}`, "utf8");
    const { data } = matter(content);
    return {
      slug,
      data,
    };
  });
  // Sort Posts by date
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
export function getPostSlug(){
  const files = fs.readdirSync('posts');
  return files.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/,'')
      }
    }
  })
}
export async function getPost(slug){
  const file = fs.readFileSync(`posts/${slug}.md`, 'utf8');
  const {data,content} = matter(file);

  return {
    content,
    data
  }
}