import { getAllPosts } from '@/lib/blog';
import NavbarContent from './NavbarContent';
import ArticleTicker from './ArticleTicker';

export default function Navbar() {
  const posts = getAllPosts();
  const articles = posts.slice(0, 20).map((p) => ({ slug: p.slug, title: p.title }));

  return (
    <div className="sticky top-0 z-50">
      <NavbarContent />
      <ArticleTicker articles={articles} />
    </div>
  );
}
