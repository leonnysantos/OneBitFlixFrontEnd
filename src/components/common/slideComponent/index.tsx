import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import { CourseType } from "@/services/courseService";
import SlideCard from "../slideCard";
import { count } from "console";

interface props {
    course: CourseType[]
}

const SlideComponent = function ({ course }: props) {
    let slideCount = 0

    if (course.length > 4) {
        slideCount = 4
    } else if (course) {
        slideCount = course.length
    }

    return <>
        <div className="d-flex flex-column align-items-centes py-4">
            <Splide options={{
                type: "loop",
                perPage: slideCount,
                perMove: slideCount * 300,
                with: 1200,
                arrows: count.length > 4 ? true : false,
                drag: count.length > 4 ? true : false,
                pagination: false,
                breakpoints: {
                    1200: {
                        perPage: slideCount >= 2 ? 2 : 1,
                        width: slideCount >= 2 ? 600 : 300,
                        arrows: count.length > 2 ? true : false,
                        drag: count.length > 2 ? true : false
                    },
                    600: {
                        perPage: 1,
                        width: 300,
                        arrows: count.length > 1 ? true : false,
                        drag: count.length > 1 ? true : false,
                    },
                    300: {
                        width: 250
                    }
                }
            }}>
                {course?.map((course) => (
                    <SplideSlide key={course.id}>
                        <SlideCard course={course} />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    </>
}

export default SlideComponent