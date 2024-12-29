
import { client, urlFor } from "@/lib/sanity";
import { fullBlog } from "@/sanity/lib/interface";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == $slug][0] {
      "currentSlug": slug.current,
      title,
      content,
      titleImage
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
    <div className="mt-8">
      <h1 className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
        {data.title}
      </h1>
      {/* <Image
        src={urlFor(data.titleImage).url()}
        alt="image"
        width={800}
        height={800}
        className="rounded-lg mt-8 border"
      /> */}
      <div className="mt-16">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
