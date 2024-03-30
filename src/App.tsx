function App() {
  return (
    <div className="bg-[#0d192b] h-screen flex justify-center items-center">
      <div className="bg-[#14253d] p-6	max-w-xs  h-[580px] rounded-xl shadow-3xl">
        <img className="rounded-xl" src="./equilibrium.jpeg" alt="" />
        <div className=" pt-7 ">
            <a className="text-2xl py-2 text-white font-bold focus:border-2 focus:border-dashed focus:border-[#00fff7] focus:outline-none hover:text-[#00fff7] " href="">
              Equilibrium #3429
            </a>
          <p className="my-5 text-lg text-[#8bacda]">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="py-3 border-b border-b-slate-600 flex justify-between	">
            <p className="flex items-center">
              <span className="flex justify-around items-center text-[#00fff7] text-lg">
                <img
                  className="mr-2 text-[#00fff7]"
                  src="./ethereum.svg"
                  alt=""
                />
                0.041
                <abbr
                  title="Ethereum (cryptocurrency)"
                  className="no-underline pl-1 "
                >
                  ETH
                </abbr>
              </span>
            </p>
            <p className="flex items-center">
              <img className="mr-2 h-[20px]" src="./clock.svg" alt="" />
              <span className="text-[#8bacda] text-lg">3 days left</span>
            </p>
          </div>
          <div className="flex items-center py-3">
            <img
              className="w-[30px] mr-2 rounded-full border border-slate-300"
              src="./avatar.webp"
              alt="avatar"
            />
            <p className="text-lg text-[#8bacda]">
              Creation of
              <a className="py-2 text-white ml-2 font-bold focus:border-2 focus:border-dashed focus:border-[#00fff7] focus:outline-none hover:text-[#00fff7]" href="#">
                Jules Wyvern
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
