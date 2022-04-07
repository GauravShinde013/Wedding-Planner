import "./sidebar.css"

export default function Sidebar() {
  return ( 
    
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT US</span>
            <span >
                <img   className="sidebarImage"
                src="https://www.specialevents.com/sites/specialevents.com/files/Indian_Wedding_Hands_2019_0.jpg" alt=""/>
            </span> 
            <p>
            This page provides the most authentic information of customer experience through our services in their own words.
            We at eVivah are delighted to share these unfiltered customer blogs that might also inspire you to connect with us.
            </p>
            <div className="sidebarItem">
                <span className="sidebarTitle">VENDORS</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Photographer</li>
                    <li className="sidebarListItem">Venue</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Mehandi</li>
                    <li className="sidebarListItem">Transportation</li>
                    <li className="sidebarListItem">Invitation</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
