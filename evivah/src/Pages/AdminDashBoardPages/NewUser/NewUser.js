
import "./NewUser.css"

const NewUser = () => {
    return (
        <div className='new-user' >
            <h1 className="new-user-title">New User</h1>
            <form className="new-user-form">
                <div className="new-user-item">
                    <label>Username</label>
                    <input type="text" placeholder="john" />
                </div>
                <div className="new-user-item">
                    <label>Full Smith</label>
                    <input type="text" placeholder="john Smith" />
                </div>
                <div className="new-user-item">
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com" />
                </div>
                <div className="new-user-item">
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="new-user-item">
                    <label>Phone</label>
                    <input type="password" placeholder="+1 123 456" />
                </div>
                <div className="new-user-item">
                    <label>Address</label>
                    <input type="password" placeholder="New York | USA" />
                </div>
                <div className="new-user-item">
                    <label>Gender</label>
                    <div className="new-user-gender">

                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>

                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>

                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="new-user-item">
                    <label>Active</label>
                    <select name="active" id="active" className="new-user-select">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="new-user-btn">
                    Create
                </button>
            </form>
        </div>
    )
}

export default NewUser
