import { createClient } from 'next-sanity'
import imageBuilderUrl from '@sanity/image-url'


export const client = createClient({
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:'production',
  apiVersion:'v2024-12-28',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

const builder = imageBuilderUrl(client)
export function  urlFor(source:any){
  return builder.image(source)
}

 