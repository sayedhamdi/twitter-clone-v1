import NavItem from "./NavItem"
import {BsTwitter}  from "react-icons/bs"
import { MdOutlineExplore } from "react-icons/md"
 import {RiHome7Fill} from "react-icons/ri"
 import {GrNotification}    from "react-icons/gr"

const navigation_items = [
    {
        icon: <RiHome7Fill />,
        text: "Home",
        to: "/"
    },
    {
        icon: <MdOutlineExplore />,
        text: "Explore",
        to: "/explore"
    },
    {
        icon: <GrNotification/>,
        text: "Notifications",
        to: "/notifications"
    },
    {
        icon: <BsTwitter className="text-[#1D9BF0]"/>,
        text: "Messages",
        to: "/messages"
    },
    {
        icon: <BsTwitter className="text-[#1D9BF0]"/>,
        text: "Bookmarks",
        to: "/bookmarks"
    },
    {
        icon: <BsTwitter className="text-[#1D9BF0]"/>,
        text: "Lists",
        to: "/lists"
    },
    {
        icon: <BsTwitter className="text-[#1D9BF0]"/>,
        text: "Profile",
        to: "/profile"
    },
    {
        icon: <BsTwitter className="text-[#1D9BF0]"/>,
        text: "More",
        to: "/more"
    }
]

export default function SideBar(){
    return(
        <div className="flex flex-col">
            <BsTwitter className="text-[#1D9BF0]"/>
        <div className="flex flex-col">

           {navigation_items.map((item,index) => (
               <NavItem key={index} icon={item.icon} text={item.text} to={item.to} />
            ))}
   
        </div>
        </div>
    )
}