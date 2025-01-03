
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { client}from "@/sanity/lib/client";
import Link from "next/link";

export const revalidate = 30


export async function getData() {
  const query = `*[_type == 'blog'] | order(_createAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    "imageUrl" : image.asset ->url
    }
    `
  const data = await client.fetch(query)
  return data
  
}


export default async function Home() {
    const data = await getData();
    console.log(data)
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-10 mb-8">
      {data.map((post:any, idx:any) => (
        <Card key={idx}> 
      <img
       src={post.imageUrl}
       alt="image"
       width={500}
       height={500}
       className='rounded-t-lg h-[200px] object-cover'
       />
       <CardContent className="mt-5">
        <h3 className="text-lg line-clamp-2 font-bold">
          {post.title}
        </h3>
        <p className="text-sm line-clamp-2 mt-2 text-gray-600 dark:text-gray-400">
          {post.smallDescription}
        </p>
        <Button asChild className="w-full mt-7">
      <Link href={`/blog/${post.currentSlug}`}>
      Read More
      </Link>
        </Button>
       </CardContent>
        </Card>
      ))}
    </div>
    
  );
}

