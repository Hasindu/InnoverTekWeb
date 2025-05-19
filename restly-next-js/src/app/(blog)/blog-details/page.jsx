import Wrapper from "@/layout/wrapper";
import { blogData } from "@/data";
import BlogDetailsMain from "@/components/blog-details";

export const metadata = {
  title: "Blog Details Page - Restly",
};

const BlogDetailsPage = () => {
  const item = blogData[0];
  return (
    <Wrapper>
      <BlogDetailsMain blogItem={item} />
    </Wrapper>
  );
};

export default BlogDetailsPage;
