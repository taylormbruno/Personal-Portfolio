import React, { useState, useRef } from "react";
import Container from "../components/Container";
import projects from "./port.json";
import Jumbotron from "../components/Jumbotron";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Portfolio() {
    const [active, setActive] = useState(projects[0]);

    const scrollToRef = (ref) => window.scrollTo(0, ref);  
    const myRef = useRef(null);
    const executeScroll = () => scrollToRef(myRef);

    const changeProject = (event) => {
        event.preventDefault();
        let projIndex = event.target.dataset.proj;
        console.log(projIndex);
        setActive(projects[projIndex]);
        console.log(active);
        executeScroll();
    }

    // for carousel
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 }
      };
    return (
        <Container>
            <h3 id="portHeader" ref={myRef}>Projects</h3>
            <Jumbotron activeProject={active} />
            <Carousel  
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            centerMode={true}
            className=""
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            sliderClass=""
            slidesToSlide={1.25}
            swipeable
            // customDot ={<CustomDot />}
            >
               {projects.map(obj => {
                    return(
                        <div className="carousel-item active">
                            {/* <div onClick={executeScroll}> */}
                                <img 
                                src={obj.image} className="miniImg d-block" 
                                alt={obj.title} 
                                data-proj={obj.id} 
                                onClick={changeProject} />
                            {/* </div> */}
                        </div>
                    );
                })} 
            </Carousel>
        </Container>
    );
  }


export default Portfolio;
