import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { PiArrowFatLineRightFill } from "react-icons/pi";
import { useState } from "react";
import { toast } from "react-toastify";
const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    title: "",
    company: "",
    interest: "",
    howInfo: "",
    country: "",
    email: "",
    phone: "",
    message: "",
  });
  return (
    <section className="flex flex-col w-[100vw]">
      <div className="contactbg  flex flex-col items-center">
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
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              placeholder="First Name *"
              className="outline-none border-b border-b-neutral-400  w-[100%]"
            />
            <input
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              type="text"
              placeholder="Last Name *"
              className="outline-none border-b border-b-neutral-400  w-[100%]"
            />
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              type="text"
              placeholder="Title"
              className="outline-none border-b border-b-neutral-400  w-[100%]"
            />
            <input
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              type="text"
              placeholder="Company *"
              className="outline-none border-b border-b-neutral-400  w-[100%]"
            />
            <p>I am Interested In...</p>
            <select
              value={form.interest}
              onChange={(e) => setForm({ ...form, interest: e.target.value })}
              name=""
              id=""
              className="outline-none border-b border-b-neutral-400  w-[100%] placeholder:text-gray-400 "
            >
              <option value="" selected className="text-gray-400">
                Select
              </option>
              <option value="1">Datasphere</option>
              <option value="2">Digital Experience</option>
              <option value="3">Customer Experience</option>
              <option value="4">Health Care</option>
            </select>
            <p>How Did You Hear About Centro</p>
            <select
              value={form.howInfo}
              onChange={(e) => setForm({ ...form, howInfo: e.target.value })}
              name=""
              id=""
              className="outline-none border-b border-b-neutral-400  w-[100%] placeholder:text-gray-400 "
            >
              <option value="" selected className="text-gray-400">
                Select
              </option>
              <option value="1">Social Media</option>
              <option value="2">Event</option>
              <option value="3">Referral</option>
              <option value="4">Email</option>
              <option value="5">Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-[35px]  w-[100%] md:w-[50%]">
            <input
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
              type="text"
              placeholder="Country *"
              className="outline-none border-b border-b-neutral-400  w-[100%] placeholder:text-gray-400 "
            />
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="text"
              placeholder="Work Email Address"
              className="outline-none border-b border-b-neutral-400  w-[100%] placeholder:text-gray-400 "
            />
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              type="text"
              placeholder="Phone Number *"
              className="outline-none border-b border-b-neutral-400  w-[100%] placeholder:text-gray-400 "
            />
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              name=""
              id=""
              cols={10}
              rows={7}
              placeholder="Message"
              className="outline-none border-b  border-b-neutral-400  w-[100%] placeholder:text-gray-400 "
            ></textarea>
            <Link className="flex items-center" to={"/contact"}>
              <PiArrowFatLineRightFill className="mr-[10px] text-[25px] text-[#21c78f]" />{" "}
              <span
                className="font-[900] text-[20px]"
                //
                onClick={() => {
                  if (
                    !form.firstName ||
                    !form.lastName ||
                    !form.title ||
                    !form.company ||
                    !form.interest ||
                    !form.interest ||
                    !form.howInfo ||
                    !form.country ||
                    !form.email ||
                    !form.email.includes("@") ||
                    !form.email.includes(".com") ||
                    form.phone.length < 11 ||
                    form.message.length < 5
                  ) {
                    toast.error("Please fill all the input fields");
                  } else {
                    toast.success("We will contact you shortly");
                    setForm({
                      firstName: "",
                      lastName: "",
                      title: "",
                      company: "",
                      interest: "",
                      howInfo: "",
                      country: "",
                      email: "",
                      phone: "",
                      message: "",
                    });
                  }
                }}
              >
                Send Message
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default Contact;
