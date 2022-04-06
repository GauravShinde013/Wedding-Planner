
import { Visibility } from "@mui/icons-material"
import "./WidgetSm.css"
import profileLogo from "../../../img/blogDefault.png"

const WidgetSm = ({ latestMembers }) => {


  return (
    <div className="admin-widgetsm">
      <span className="admin-w-sm-title">New Join Members</span>
      <ul className="admin-w-sm-list">
        {
          latestMembers.map((member) => {
          return(  <li className="admin-w-sm-list-item">
              <img
                src={member.profilePicUrl ? member.profilePicUrl : profileLogo}
                alt=""
                className="admin-w-sm-img"
              />
              <div className="admin-w-sm-user">
                <span className="admin-w-sm-username">{member.firstName} {member.lastName}</span>
                <span className="admin-w-sm-job">{member.role}</span>
              </div>
              <button className="admin-w-sm-btn">
                <Visibility className="admin-w-sm-icon" />
                Display
              </button>
            </li>)
          })}

        {/* <li className="admin-w-sm-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="admin-w-sm-img"
          />
          <div className="admin-w-sm-user">
            <span className="admin-w-sm-username">Anna Keller</span>
            <span className="admin-w-sm-job">Software Engineer</span>
          </div>
          <button className="admin-w-sm-btn">
            <Visibility className="admin-w-sm-icon" />
            Display
          </button>
        </li>
        <li className="admin-w-sm-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="admin-w-sm-img"
          />
          <div className="admin-w-sm-user">
            <span className="admin-w-sm-username">Anna Keller</span>
            <span className="admin-w-sm-job">Software Engineer</span>
          </div>
          <button className="admin-w-sm-btn">
            <Visibility className="admin-w-sm-icon" />
            Display
          </button>
        </li>
        <li className="admin-w-sm-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="admin-w-sm-img"
          />
          <div className="admin-w-sm-user">
            <span className="admin-w-sm-username">Anna Keller</span>
            <span className="admin-w-sm-job">Software Engineer</span>
          </div>
          <button className="admin-w-sm-btn">
            <Visibility className="admin-w-sm-icon" />
            Display
          </button>
        </li>
        <li className="admin-w-sm-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="admin-w-sm-img"
          />
          <div className="admin-w-sm-user">
            <span className="admin-w-sm-username">Anna Keller</span>
            <span className="admin-w-sm-job">Software Engineer</span>
          </div>
          <button className="admin-w-sm-btn">
            <Visibility className="admin-w-sm-icon" />
            Display
          </button>
        </li> */}


      </ul>
    </div>
  );
}

export default WidgetSm
