import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Join from "@/components/Join";
import Navbar from "@/components/Navbar";

export default function page({ data }) {
  console.log(data);

  return (
    <>
      <div className="app-container my-2 flex flex-col gap-8">
       <Navbar />
        <Hero
          imgsrc={"/hero.jpg"}
          title={"Featured"}
          subtitle={
            "Switching From Photography to UX Design: Everything You Need to Know With Viola LeBlane"
          }
          text={
            "Viola LeBlance is a 23-year-old photographer and product designer from Toronto,Ontario.She has worked with Spotify,Nike,Chews,Makr,and Square.Sophia Munn asked her a few questions about her work."
          }
        />
        <Blogs
          title={"Recent blog posts"}
          data={data}
          btn1={"View all posts"}
          btn2={"loading more.."}
        />

        <Join
          title={"Let's get started on something great"}
          text={"Join over 4,000+ startups already growing with Untitled."}
          btn={"Start your 7-day free trail"}
        />
       <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("http://localhost:3000/api/blog");
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data: data.blogs } };
}
