export default function Footer() {
    return (
       <>
       <div className="my-4 app-container">
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4  items-start ">
      <div className="grid gap-3">
        <h1 className="text-slate-700/90 font-semibold">Product</h1> 
        <ul className="grid gap-2 items-start">
           
            <li className="font-semibold">Overview</li>
            <li className="font-semibold">Feastures</li>
            <li className="font-semibold">Solution</li>
            <li className="font-semibold">Tutorials</li>
            <li className="font-semibold">Pricing</li>
            <li className="font-semibold">Release</li>

        </ul>
       </div>
       <div className="grid gap-3">
        <h1 className="text-slate-700/90 font-semibold">Company</h1> 
        <ul className="grid gap-2 items-start">
           
            <li className="font-semibold">About us</li>
            <li className="font-semibold">Careers</li>
            <li className="font-semibold">Press</li>
            <li className="font-semibold">News</li>
            <li className="font-semibold">Media Kit</li>
            <li className="font-semibold">Contact</li>

        </ul>
       </div>
       <div className="grid gap-3">
        <h1 className="text-slate-700/90 font-semibold">Resourses</h1> 
        <ul className="grid gap-2 items-start">
           
            <li className="font-semibold">Blog</li>
            <li className="font-semibold">Newsletter</li>
            <li className="font-semibold">Event</li>
            <li className="font-semibold">Help center</li>
            <li className="font-semibold">Tutorial</li>
            <li className="font-semibold">Support</li>

        </ul>
       </div>
       <div className="grid gap-3">
        <h1 className="text-slate-700/90 font-semibold">Use Cases</h1> 
        <ul className="grid gap-2 items-start">
           
            <li className="font-semibold">Startups</li>
            <li className="font-semibold">Enterprise</li>
            <li className="font-semibold">Government</li>
            <li className="font-semibold">Saas center</li>
            <li className="font-semibold">Marketplace</li>
            <li className="font-semibold">Ecommerce</li>

        </ul>
       </div>
       <div className="grid gap-3">
        <h1 className="text-slate-700/90 font-semibold">Social</h1> 
        <ul className="grid gap-2 items-start">
           
            <li className="font-semibold">Twiter</li>
            <li className="font-semibold">Linkdin</li>
            <li className="font-semibold">Facebook</li>
            <li className="font-semibold">Github</li>
            <li className="font-semibold">AngleList</li>
            <li className="font-semibold">Dribble</li>

        </ul>
       </div>
       <div className="grid gap-3">
        <h1 className="text-slate-700/90 font-semibold">Legal</h1> 
        <ul className="grid gap-2 items-start">
           
            <li className="font-semibold">Term</li>
            <li className="font-semibold">Privacy</li>
            <li className="font-semibold">Cookies</li>
            <li className="font-semibold">Licences</li>
            <li className="font-semibold">Setting</li>
            <li className="font-semibold">Contact</li>

        </ul>
       </div>
       </div>
       <div className="h-0.5 bg-slate-300/70 my-7"></div>
       <div className="flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">United UI</h1>
        <p className="font-semibold text-xs">&copy; Copyright All reserve rights 2024.</p>
       </div>
       </div>
       </>
    );
}