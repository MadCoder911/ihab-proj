import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { PiArrowFatLineRightFill } from "react-icons/pi";
const Contact = () => {
  return (
    <section className="flex flex-col">
      <div className="contactbg flex flex-col items-center">
        <div className="div mt-[180px]"></div>
        <div className="container w-[100%] flex flex-col items-center text-center md:items-start md:text-start">
          <h1 className="text-white font-bold text-[80px]  leading-none">
            Get In Touch
          </h1>
          <p className="text-white  text-[26px] md:m-0 mt-[20px]">
            Get Answer To Your Questions
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center min-h-[100vh]">
        <h1 className="font-bold text-[50px] mt-[40px] text-center">
          Send Us A Message
        </h1>
        <div className="flex mb-[100px] flex-col md:flex-row md:justify-around mt-[80px] container md:gap-[90px] gap-[35px] w-[100%] items-center md:items-start">
          <div className="flex flex-col gap-[35px]  w-[100%] md:w-[50%]">
            <input
              type="text"
              placeholder="First Name *"
              className="outline-none border-b border-b-neutral-400  w-[100%]"
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="outline-none border-b border-b-neutral-400  w-[100%]"
            />
            <input
              type="text"
              placeholder="Title"
              className="outline-none border-b border-b-neutral-400  w-[100%]"
            />
            <input
              type="text"
              placeholder="Company *"
              className="outline-none border-b border-b-neutral-400  w-[100%]"
            />
            <p>I am Interested In...</p>
            <select
              name=""
              id=""
              className="outline-none border-b border-b-neutral-400  w-[100%] placeholder:text-gray-400 "
            >
              <option value="" selected className="text-gray-400">
                Select
              </option>
              <option value="">Datasphere</option>
              <option value="">Digital Experience</option>
              <option value="">Customer Experience</option>
              <option value="">Health Care</option>
            </select>
            <p>How Did You Hear About Centro</p>
            <select
              name=""
              id=""
              className="outline-none border-b border-b-neutral-400  w-[100%] placeholder:text-gray-400 "
            >
              <option value="" selected className="text-gray-400">
                Select
              </option>
              <option value="">Social Media</option>
              <option value="">Event</option>
              <option value="">Referral</option>
              <option value="">Email</option>
              <option value="">Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-[35px]  w-[100%] md:w-[50%]">
            <input
              type="text"
              placeholder="Country *"
              className="outline-none border-b border-b-neutral-400  w-[100%] placeholder:text-gray-400 "
            />
            <input
              type="text"
              placeholder="Work Email Address"
              className="outline-none border-b border-b-neutral-400  w-[100%] placeholder:text-gray-400 "
            />
            <input
              type="text"
              placeholder="Phone Number *"
              className="outline-none border-b border-b-neutral-400  w-[100%] placeholder:text-gray-400 "
            />
            <textarea
              name=""
              id=""
              cols={10}
              rows={7}
              placeholder="Message"
              className="outline-none border-b  border-b-neutral-400  w-[100%] placeholder:text-gray-400 "
            ></textarea>
            <Link className="flex items-center" to={"/contact"}>
              <PiArrowFatLineRightFill className="mr-[10px] text-[25px] text-[#21c78f]" />{" "}
              <span className="font-[900] text-[20px]">Send Message</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default Contact;
