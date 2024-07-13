import { Link } from "react-router-dom"
import { MdLogin } from "react-icons/md"

const LoginAction = ({text,  mobile}:{text?:string, mobile?:boolean}) => {
  return (
    <Link to="/login">
        <div
          className={` flex items-center gap-3 border border-slate-200 px-3 py-1 rounded-lg cursor-pointer`}

          
        >
          <MdLogin className={` ${mobile && 'text-2xl text-headingColor'}`} />
          {text && <p className="text-headingColor ">{text}</p>}
        </div>
    </Link>
  )
}

export default LoginAction