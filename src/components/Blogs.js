import Image from "next/image";
import Link from "next/link";



  export default  function Blogs({title,btn1,btn2,data}) {
    
    return (
        <>
        <div>
        <div className="flex items-center justify-between my-6 ">
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold">{title}</h1>
              <span>  <button className="button-style">
                    {btn1}
                </button>
                </span>
            </div>
         <div className="grid items-start grid-cols-3 gap-11">
          {data?.map((b, i) => (
            <Link href={`/blog/${b.slug}`}>
              <div
                className="border gap-3 flex flex-col items-start bg-white rounded-lg"
                key={i}
              >
                <div key={i} className="flex flex-col gap-4">
                  <Image
                    src={b.imgsrc}
                    width={5000}
                    height={500}
                    className="h-[40vh] rounded-2xl w-full object-cover"
                    alt="img"
                  />
                  <div className="flex items-center gap-10">
                    <h1 className="text-lg md:text-xl font-bold">{b.title}</h1>
                    <Image
                      src={b.iconsrc}
                      width={20}
                      height={20}
                      alt="icon"
                      className=""
                    />
                  </div>
                  <p className="text-xs md:text-sm font-semibold">
                    {b.shorttext}
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      src={b.imgsrc}
                      width={50}
                      height={50}
                      className="w-7 h-7 rounded-full object-cover"
                      alt="img"
                    />
                    <span className="flex items-center">
                      <p className="text-sm font-semibold">{b.name}</p>
                      <p className="text-sm font-semibold">{b.date}</p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <span className="my-4 flex justify-center mt-9">
        <button className="button-style">
            {btn2}
        </button>
        </span>
        </div>
        </>
    );
}