import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'public/md');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  date?: string;
  language: 'es' | 'en';
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // Extract title from first heading
      const titleMatch = content.match(/^#\s+(.+)$/m);
      const title = titleMatch ? titleMatch[1] : slug;

      // Extract image from markdown
      const imageMatch = content.match(/!\[.*?\]\((\.\.\/img\/.*?)\)/);
      const image = imageMatch ? imageMatch[1].replace('../img/', '/img/') : undefined;

      // Create excerpt from first paragraph
      const paragraphMatch = content.match(/\n\n(.+?)(?:\n\n|$)/);
      const excerpt = paragraphMatch ? paragraphMatch[1].substring(0, 200) + '...' : '';

      // Determine language from content
      const language: 'es' | 'en' = /[áéíóúñ¿¡]/i.test(content) ? 'es' : 'en';

      return {
        slug,
        title,
        excerpt,
        content,
        image,
        date: data.date || new Date().toISOString(),
        language,
      };
    })
    .sort((a, b) => (a.date && b.date ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0));

  return allPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const allPosts = getAllPosts();
  return allPosts.find(post => post.slug === slug);
}

export function getPostsByLanguage(language: 'es' | 'en'): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.language === language);
}
