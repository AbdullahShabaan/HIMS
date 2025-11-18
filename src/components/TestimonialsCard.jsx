const TestimonialsCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col mx-10 my-5" dir="auto">
      <div className="flex flex-col text-center items-center gap-2">
        <div className="w-20 h-20 rounded-full overflow-hidden bg-white">
          <img
            src={testimonial?.image}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <span className="text-sm text-gray-500">{testimonial.job}</span>
        </div>
      </div>

      <div>
        <p className="line-clamp-4 mt-2 text-center">
          &rdquo; {testimonial.message} &rdquo;
        </p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
