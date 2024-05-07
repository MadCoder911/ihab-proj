const Login = () => {
  return (
    <section className="flex flex-col">
      <div className="contactbg flex flex-col items-center">
        <div className="absolute top-[50%] left-[50%] lg:w-[30%] w-[80%] translate-x-[-50%] flex flex-col gap-[30px] translate-y-[-50%] p-[50px] rounded-md bg-[#ffffff6c]">
          <input
            type="text"
            placeholder="Username"
            className="bg-transparent text-white placeholder:text-[#ffffff] outline-none border-b border-nuetral-40 pb-[7px] w-[100%]"
          />
          <input
            type="text"
            placeholder="Password"
            className="bg-transparent text-white placeholder:text-[#ffffff] outline-none border-b border-nuetral-400 pb-[7px] w-[100%]"
          />
          <button className="text-white bg-[#21c78f] p-2 rounded-md shadow-xl hover:scale-110 transition-all ease-in-out">
            Login
          </button>
        </div>
      </div>
    </section>
  );
};
export default Login;
