import {Link} from "react-router";

function Profile(){
    return(
        <div>
        <div id="feed-header">
                <img id="square-logo" alt="logo" src={process.env.PUBLIC_URL + "/logo1.svg"} />
            </div>
        <div class="profile">
            <h1>Profile</h1>
            <h2>Coming Soon</h2>
        </div>
        </div>
    )
}

export default Profile;