var glob = require("glob-fs")({ gitignore: true });
var md = require("markdown-it")();

import path from "path";
import fs from "fs";
import matter from "gray-matter";

export const getBlogPostsData = async () => {
  // path where the MDX files are
  const files = glob.readdirSync("./public/articles/*/**.mdx");

  const postsData = files.map((file) => {
    // grab the metadata
    const name = path.join("./" + file);
    const source = fs.readFileSync(name, "utf8");
    const { content, data } = matter(source);
    let htmlcontent = md.render(content);

    // remove the ".mdx" from the filename
    const slug = file.replace(/\.mdx?$/, "");

    let post = {
      ...data,
    };
    
    return {
      ...post,
      content: htmlcontent,
      slug,
    };
  });

  return postsData;
};
