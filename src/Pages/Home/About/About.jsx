import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="my-20 min-h-screen">
      <div className="hero-content flex-col lg:flex-row bg-base-200 py-10">
        <div className="relative lg:w-1/2">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2 mt-20 lg:mt-0">
          <h1 className="text-3xl text-orange-600 font-bold">About Us</h1>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="py-6">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <button className="btn bg-orange-600 hover:bg-orange-700 text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
