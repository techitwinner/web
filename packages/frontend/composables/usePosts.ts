import PocketBase from 'pocketbase';
import {ref} from 'vue';
import type {Post} from '~/types/post';

interface PostRecord extends Record<string, any> {
  id: string;
  title: string;
  description: string;
  slug: string;
  content: string;
  created: string;
  updated: string;
  coverImage?: string;
}


export function usePosts() {
  const config = useRuntimeConfig()

  const pb = new PocketBase(config.public.apiBaseUrl);
  const posts = ref<Post[]>([]);
  const post = ref<Post | null>(null);

  // Fetch all posts with pagination
  async function fetchPosts(page: number = 1, perPage: number = 50) {
    try {
      const result = await pb.collection('posts').getList<PostRecord>(page, perPage);
      posts.value = result.items.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        slug: item.slug,
        content: item.content,
        created: item.created,
        updated: item.updated,
        coverImage: item.coverImage
      }));
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  async function fetchAllPosts() {
    try {
      const results = await pb.collection('posts').getFullList<PostRecord>({
        sort: '-created',
      });
      posts.value = results.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        slug: item.slug,
        content: item.content,
        created: item.created,
        updated: item.updated,
        coverImage: item.coverImage
      }));
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  // Fetch a single post by slug
  async function fetchPost(slug: string) {
    try {
      post.value = await pb.collection('posts').getFirstListItem(`slug="${slug}"`);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  }

  return { posts, post, fetchPosts, fetchPost, fetchAllPosts };
}
