import Button from "../../components/Form/Button/Button";
import "./Profile.styles.css";
import profilePic from "../../assets/profile.png";

const Profile = () => {
    return (
        <div className="profile-page">
            <div className="profile-container">
                <img src={profilePic} alt="Profile" />
                <h1>Andre</h1>
            </div>
            <Button>Edit Profile</Button>
            <Button secondary>Change Picture</Button>
        </div>
    );
};

export default Profile;
