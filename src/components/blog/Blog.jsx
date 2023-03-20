import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Blog1 from "../../assets/blog1.jpg";
import Blog2 from "../../assets/blog2.jpg";
import Blog3 from "../../assets/blog3.jpg";
import shapeOne from "../../assets/shape-1.png";
import './blog.css';

const Blog = () => {
    return(
        <section className="blog section" id="blog">
            <h2 className="section__title text-cs">Latest Blog</h2>
        <p className="section__subtitle">
            My <span>Articles and Advices</span>
        </p>

        <div className="blog__container container grid">
            <div className="blog__item card card-two">
                <span className="blog__date text-cs">March 16, 2023</span>
                <h3 className="blog__title">The Main Things for The Designer </h3>
                <p className="blog__description">The aesthetics of the product are the most obvious part of the design process and it’s ultimately the first thing that customers (and co-workers and clients) will notice about the way the product has been designed. Before people look at the specifications of the product, the way it feels to use or the way it performs its task, they will notice how it looks. This is quite often the deciding factor in a purchase....
                </p>

                <a href="" className="link">
                        Read more
                        <FaArrowRight className="link__icon"></FaArrowRight>
                    </a>

               <img src={Blog1} alt="" className="blog__img" />
            </div>

            <div className="blog__item card card-two">
                <span className="blog__date text-cs">March 16, 2023</span>
                <h3 className="blog__title">Follow Your Own Design Process </h3>
                <p className="blog__description">TAdditionally, ensure that mixed materials – either used in the product or ones that the product is like to come in contact with – are compatible. Materials such as steel and aluminium, when used together, can cause galvanic corrosion and corrode prematurely. Certain plastics and rubbers will be degraded quickly in oily and greasy environments.....
                </p>

                <a href="" className="link">
                        Read more
                        <FaArrowRight className="link__icon"></FaArrowRight>
                    </a>

               <img src={Blog2} alt="" className="blog__img" />
            </div>

            <div className="blog__item card card-two">
                <span className="blog__date text-cs">March 16, 2023</span>
                <h3 className="blog__title">Usability Secrets to Create Better Interface</h3>
                <p className="blog__description">TAdditionally, ensure that mixed materials – either used in the product or ones that the product is like to come in contact with – are compatible. Materials such as steel and aluminium, when used together, can cause galvanic corrosion and corrode prematurely. Certain plastics and rubbers will be degraded quickly in oily and greasy environments.....
                </p>

                <a href="" className="link">
                        Read more
                        <FaArrowRight className="link__icon"></FaArrowRight>
                    </a>

               <img src={Blog3} alt="" className="blog__img" />
            </div>
        </div>

        <div className="section__deco deco__right">
            <img src={shapeOne} alt="" className="shape" />
        </div>

        <div className="section__bg-wrapper">
            <span className="bg__title">Blog</span>
        </div>
        </section>
    )
}

export default Blog