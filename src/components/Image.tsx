import Icon from "./Icon";

interface Props {
    src:string;
    alt:string;
  }

function Image(props:Props){
    return(<div className="relative flex justify-center items-center ">
    <img className="rounded-xl" src={props.src} alt={props.alt} />
    <a
      className="absolute w-full flex justify-center items-center opacity-0 hover:opacity-70 h-full rounded-xl bg-lime-700 focus:border-2 focus:border-dashed focus:border-[#00fff7] focus:outline-none"
      href={props.src}
    >
      <Icon/>
    </a>
  </div>)
}
export default Image