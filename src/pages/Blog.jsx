import { blogPosts } from "../data";
import img1 from "../assets/bloglatest1.png";
import img2 from "../assets/bloglatest2.png";
import { Link } from "react-router-dom";

const Blog = () => {
  const socials = [
    { id: 1, href: "#", text: "linkedin" },
    { id: 2, href: "#", text: "X-twitter" },
    { id: 3, href: "#", text: "instagram" },
  ];

  return (
    <section>
      <div className="mt-20 md:mt-[150px]">
        <div className="md:mb-20 flex flex-col items-center gap-5">
          <h2 className="mb-5 text-2xl lg:text-5xl ">Blog</h2>
          <div className="flex gap-[21px] capitalize ">
            {socials.map((social) => {
              return (
                <div key={social.id}>
                  <a href={social.href}>{social.text}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white my-[50px] px-5 py-7 rounded-2xl md:p-[50px] ">
          <h2 className="mb-10 text-2xl lg:text-5xl">Latest</h2>
          <div className="flex flex-col gap-10 md:grid md:grid-cols-2">
            <Link to="#">
              <div className="flex flex-col gap-10  lg:grid lg:grid-cols-2">
                {/* <div> */}
                <img src={img1} alt="blog-post image" />
                {/* </div> */}
                <div className="flex flex-col gap-3">
                  <div className="text-secondaryClr font-bold">FIN-TECH</div>
                  <p className="md:text-sm lg:text-xl 2xl:text-3xl ">
                    The story of how Dave took the long road to become a neobank
                  </p>
                  <div className="text-sm mt-auto">APR 4, 2023</div>
                </div>
              </div>
            </Link>

            <Link to="#">
              <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2">
                {/* <div> */}
                <img src={img2} alt="blog-post image" />
                {/* </div> */}
                <div className="flex flex-col gap-3">
                  <div className="text-secondaryClr font-bold">ADVERTISING</div>
                  <p className="md:text-sm lg:text-xl xl:text-3xl ">
                    How To Set Short and Long Term Career Goals
                  </p>
                  <div className="text-sm mt-auto ">MAR 28, 2023</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:mt-[50px] md:mb-[80px]">
          {blogPosts.map((blogPost) => {
            const { id, href, img, title, text } = blogPost;
            return (
              <Link key={id} to={href}>
                <div className="flex flex-col gap-5">
                  <img src={img} alt="blog-post image" />
                  <div className="text-secondaryClr font-bold ">{title}</div>
                  <p className="md:text-sm lg:text-xl  2xl:text-3xl ">{text}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Blog;
