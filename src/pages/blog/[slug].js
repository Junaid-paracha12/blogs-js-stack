import Image from "next/image";

export default function ({post}) {
   
  return (
    <div>
      <div className="grid items-center justify-items-center gap-5">
        <Image
          src={post.imgsrc}
          width={3000}
          height={2000}
          alt="img"
          className="w-full h-[50vh] object-cover"
        />
        <h1 className="text-3xl text-black font-bold">{post.title}</h1>
        <p>{post.text}</p>
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  const res = await fetch("https://blogs-js-stack.vercel.app/api/blog");
  const data = await res.json();
  const paths = data.blogs.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths: paths,
    fallback: true, // false or "blocking"
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const res = await fetch('https://blogs-jsstack.vercel.app/blog');
  const data = await res.json();
  const post = data.blogs.find((post) => post.slug === slug);
 
  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  }
}

