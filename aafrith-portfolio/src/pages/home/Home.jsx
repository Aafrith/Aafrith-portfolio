import Profile from "../../assets/home.jpeg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import "./home.css"

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I&apos;m Aafrith. </span>
            <h2></h2>Software Engineer
          </h1>

          <p className="home__description">
            👋 Hi, I&apos;m a Software Engineer with a passion for building innovative softwares. I specialize in software development and have a strong interest in AI and ML.
          </p>

          <Link to='/about' className='button'>
            More About Me 
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
    
  )
}

export default Home;