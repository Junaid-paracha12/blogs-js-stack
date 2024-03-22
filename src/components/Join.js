export default function Join({title,text,btn}) {
    return (
       <>
       <div className="text-center grid items-center gap-4 px-7 my-5">
        <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
        <p className="text-sm md:text-base font-semibold">{text}</p>
        <span>
        <button className="button-style">
            {btn}
        </button>
        </span>
       </div>
       </>
    );
}