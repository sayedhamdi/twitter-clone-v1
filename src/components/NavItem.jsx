import { Link } from "react-router-dom";

export default function NavItem({icon,text,to}){
    return (
        <div >
            <Link to={to} className="flex">
                <span>
                {icon}
                </span> 
                <span>{text}</span>
            </Link>
        </div>
    )
}