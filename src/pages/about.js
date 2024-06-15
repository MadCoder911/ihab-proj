const About = () => {
  return (
    <div className="aboutbg flex flex-col items-center">
      <div className="div mt-[120px]"></div>
      <div className="container text-center w-[100%] justify-between">
        <div className="">
          <h1 className="font-bold text-[40px] text-white mb-[40px]">
            Our Vision
          </h1>
          <p className="text-white text-[18px] text-start">
            To be the leading RCM billing partner for healthcare providers
            nationwide, recognized for our innovative technology, exceptional
            service, and unwavering commitment to compliance.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-[40px] text-white mb-[40px]">
            Our Mission
          </h1>
          <p className="text-white text-[18px] text-start">
            To empower healthcare providers with efficient and accurate medical
            billing solutions, maximizing their revenue recovery while ensuring
            seamless patient experiences.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-[40px] text-white mb-[40px]">
            Our Goals
          </h1>
          <p className="text-white text-[18px] pb-[100px] text-start">
            Launching a virtual Revenue Cycle Management (RCM) company dedicated
            to overseeing the financial intricacies of healthcare facilities,
            clinics, and individual practitioners
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
