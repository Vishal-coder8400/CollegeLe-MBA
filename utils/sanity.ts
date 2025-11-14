import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});
export const clientBlogs = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_BLOGS_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_BLOGS_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_BLOGS_API_VERSION,
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
  return builder.image(source);
}

const builderBlogs = imageUrlBuilder(clientBlogs);
export function urlForBlogs(source: any) {
  return builderBlogs.image(source);
}

export default client;
