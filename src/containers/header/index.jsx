import "./style.css";
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gp_header section_padding" id="home">
      <div className="gp_header-content">
        <h1 className="gradient_text">Let's Build Something amazing with GPT OpenAI</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequatur omnis harum vero, eos placeat nisi sunt a accusamus, dolorem pariatur accusantium soluta labore illum laboriosam voluptatum dolorum totam similique!</p>

        <div className="gp_header-content-input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gp_header-content-people">
          <img src={people} alt="People" />
          <p>1600 people requested access in the last 24 hours ...</p>
        </div>
      </div>

      <div className="gp_header-image">
          <img src={ai} alt="AI Image" />
        </div>
    </div>
  )
};

export default Header;
