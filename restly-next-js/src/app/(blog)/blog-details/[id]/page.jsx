import Wrapper from "@/layout/wrapper";
import { blogData } from "@/data";
import BlogDetailsMain from "@/components/blog-details";

export const metadata = {
  title: "Blog Details Page - Restly",
};

const BlogDetailsPage = async ({ params }) => {
  const { id } = await params;
  const item = blogData.find((b) => Number(b.id) === Number(id));
  return (
    <Wrapper>
      {item ? (
        <BlogDetailsMain blogItem={item} />
      ) : (
        <h3 className="text-center mt-100">Blog Not Found with id {id}</h3>
      )}
    </Wrapper>
  );
};

export default BlogDetailsPage;
