import { getAllPosts } from '@/lib/blog';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const posts = getAllPosts();
    
    // Return only the data needed for the component
    const latestPosts = posts.slice(0, 20).map(post => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      image: post.image,
      language: post.language,
      date: post.date,
    }));

    return NextResponse.json(latestPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
