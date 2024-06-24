import "./Home.styles.css";
import profilePic from "../../assets/profile.png";

const Home = () => {
    return (
        <div className="home-page">
            <h1>home</h1>
            <div className="picture-container">
                <img src={profilePic} alt="Profile" />
            </div>
            <strong>PROFESSOR ANDRE</strong>
        </div>
    );
};

export default Home;
