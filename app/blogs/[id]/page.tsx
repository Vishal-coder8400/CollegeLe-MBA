'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { Container } from '@mantine/core';
import { SingleBlog } from '@/components';
import { RootState } from '@/lib/store/store';
import { Blog } from '@/utils/blogType';
import { clientBlogs } from '@/utils/sanity';

export default function HomePage() {
  const { id } = useParams();
  const { blogs } = useSelector((state: RootState) => state.blogs);
  const router = useRouter();
  const decodedId = id ? decodeURIComponent(id as string) : '';

  const [mainBlog, setMainBlog] = useState<Blog>();

  useEffect(() => {
    const fetchBlogByLink = async () => {
      try {
        const response = await clientBlogs.fetch(
          `*[_type == "blogs" && mainContent.blogLink == $blogLink][0]`,
          { blogLink: decodedId }
        );

        if (response) {
          setMainBlog(response);
        } else {
          router.push('/blogs');
        }
      } catch (error) {
        router.push('/blogs');
      }
    };

    if (decodedId) {
      fetchBlogByLink(); // Fetch the blog only if decodedId is available
    }
  }, [blogs, decodedId]);
  return (
    <>
      <Container size="lg" mt={40} mb={100}>
        <SingleBlog data={mainBlog} />
      </Container>
    </>
  );
}
