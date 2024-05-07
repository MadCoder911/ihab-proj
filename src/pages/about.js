const About = () => {
  return (
    <div className="aboutbg flex flex-col items-center">
      <div className="div mt-[120px]"></div>
      <div className="container text-center w-[100%] justify-between">
        <div className="mb-[80px]">
          <h1 className="font-bold text-[40px] text-white mb-[40px]">
            Our Vision
          </h1>
          <p className="text-white text-[18px] text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            quam ad cumque rerum commodi, quas consequuntur ratione ut fugiat
            quasi temporibus dolor ab adipisci aliquam veritatis repellendus,
            odio in eius. Lorem ipsum{" "}
            <span className="hidden md:block">
              sit amet consectetur adipisicing elit. Blanditiis quam ad cumque
              rerum commodi, quas consequuntur ratione ut fugiat quasi
              temporibus dolor ab adipisci aliquam veritatis repellendus, odio
              in eius. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis quam ad cumque rerum commodi, quas consequuntur ratione
              ut fugiat quasi temporibus dolor ab adipisci aliquam veritatis
              repellendus, odio in eius.
            </span>
          </p>
        </div>
        <div>
          <h1 className="font-bold text-[40px] text-white mb-[40px]">
            Our Mission
          </h1>
          <p className="text-white text-[18px] text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            quam ad cumque rerum commodi, quas consequuntur ratione ut fugiat
            quasi temporibus dolor ab adipisci aliquam veritatis repellendus,
            odio in eius. Lorem ipsum dolor.{" "}
            <span className="hidden md:block">
              sit amet consectetur adipisicing elit. Blanditiis quam ad cumque
              rerum commodi, quas consequuntur ratione ut fugiat quasi
              temporibus dolor ab adipisci aliquam veritatis repellendus, odio
              in eius. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis quam ad cumque rerum commodi, quas consequuntur ratione
              ut fugiat quasi temporibus dolor ab adipisci aliquam veritatis
              repellendus, odio in eius.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
