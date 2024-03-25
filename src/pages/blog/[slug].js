import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function ({ post }) {
  console.log(post);
  return (
    <>
      <Navbar />
    <div className="w-4/5 md:w-2/3 lg:w-1/2 mx-auto  my-20">
    
      <div className="flex flex-col gap-5">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-bold">{post.title}</h1>
      <div className="flex items-center gap-3">
        <Image
          src={post.imgsrc}
          width={30}
          height={20}
          alt="img"
          className="w-12 h-12 rounded-full object-cover"
        />
        <span>
          <p className="font-semibold">{post.name}</p>
          <p className="text-sm font-semibold text-slate-800/90">{post.date}</p>
        </span>
        </div>
        <div>
      <Image
          src={post.imgsrc}
          width={3000}
          priority
          height={2000}
          alt="img"
          className="h-[50vh] w-full  object-cover rounded-md"
        />
      </div>
      <span className="my-5"><h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">{post.heading}</h1></span>
      <span>
        <p className="text-base font-medium text-slate-900/90">{post.discribtion}</p>
      </span>
      <span className="my-4 flex justify-center mt-9">
          <button className="button-style">{post.btn1}</button>
        </span>
      </div>
      
    </div>
    <Footer />
    </>
  );
}
export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/blog");
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
  const res = await fetch("http://localhost:3000/api/blog");
  const data = await res.json();
  const post = data.blogs.find((post) => post.slug === slug);

  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  };
}
