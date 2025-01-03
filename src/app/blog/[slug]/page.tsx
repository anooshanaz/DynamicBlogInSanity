
import CommentSection from "@/components/CommentSection";
import { client, urlFor } from "@/lib/sanity";
import { fullBlog } from "@/sanity/lib/interface";
import { PortableText } from "next-sanity";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == $slug][0] {
      "currentSlug": slug.current,
      title,
      content,
      "imageUrl" : image.asset ->url
    }
  `;
  const data = await client.fetch(query, { slug });
  return data;
}

export default async function BlogArticle({ params }: { params: { slug: string } }) {
  const data: fullBlog = await getData(params.slug);

  if (!data) {
    return (
      <div className="mt-8">
        <h1 className="text-center text-2xl font-bold">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="mt-8 mb-8">
      <h1 className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
        {data.title}
      </h1>
      <img
       src={data.imageUrl}
       alt="image"
       width={600}
       height={600}
       className='rounded-t-lg h-[200px] object-cover flex items-center mt-10'
       />
      <div className="mt-16">
        <PortableText value={data.content} />
        <CommentSection postId={"CommentSection"}/>
      </div>
    </div>
  );
}
