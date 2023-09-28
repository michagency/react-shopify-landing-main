import SubHead from "../Atoms/subhead"
import Paragraph from "../Atoms/paragraph"

export default function TestimonialItem2() {
  return (
    <div className="flex flex-col gap-[50px] items-center md:flex-row md:items-end lg:gap-10 lg:items-center">
      <img
        className="w-[300px] md:w-8/12 lg:w-1/3"
        src="/Review-1.png"
        alt="testimonial"
      />
      <img
        className="w-[300px] md:w-8/12 lg:w-1/3"
        src="/Review-2.png"
        alt="testimonial"
      />
      <img
        className="w-[300px] md:w-8/12 lg:w-1/3"
        src="/Review.png"
        alt="testimonial"
      />
  
      
      
    </div>
  );
}
