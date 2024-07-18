import './App.css';
const azureUrl = 'https://yazlab-2.database.windows.net';
function App() {
  return (
<div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Fitness Web Site</title>
 <link rel="stylesheet" href="App.css"/>
    <header className="header">
        <a href="#" className="logo">
            <img src= "./images/f1.png"alt="logo"/>
        </a>
        <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#reviev">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
        </nav>
        <div className="buttons">
          <button id="search-btn">
            <i className="fas fa-search"></i>
          </button>
          <button>
            <i className="fas fa-shopping-cart"></i>
          </button>
          <button id="menu-btn">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="search-form ">
          <input 
          type="text" 
          className="search-input"
          id="search-box"
          placeholder="search here" />
          <i className="fas fa-search"></i>
        </div>
         
                          
       <a href="#iletisim" className="btn">Sign Up</a>
                            
       

    </header>
  
    <section className="home " id ="home">
     <div className="content">
      <h3>Discover Your Potential</h3>
      <p>
        It's time to embrace a healthy lifestyle and achieve a fit body. Our expert trainers, special programs, and motivational content are here to guide you. Come on, take one step closer to your dream of a healthy life!
      </p>
      <button href="http://localhost:3000/k.jsx"className="btn">Coach Login</button>
      <button href="http://localhost:3000/k.jsx"className="btn">Admin Login</button>
      <button href="http://localhost:3000/k.jsx"className="btn">Client Login</button>

     </div>
    </section> 
   
    <section className="menu" id="menu">
      <h1 className="heading">Coach <span>Specializations</span></h1>
      <div className="box-container">
       <div className="box">
        <div className="box-head">
          <img src="images/k2.jpg"
           alt="menu" />
           <span className="menu-catagory"></span>
           <h3>Lose Weight</h3>
           <div className="price">
            Do you want to achieve a healthy lifestyle and reach your target weight? <span> Take a step into an energetic life with the guidance of our expert trainers.
           </span></div>
        </div>
        <div className="box-bottom">
          <a href="#" className="add to cart"></a>
        </div>
       </div>
       <div className="box">
        <div className="box-head">
          <img src="images/k3.jpeg"
           alt="menu" />
           <span className="menu-catagory"></span>
           <h3>Gain Weight</h3>
           <div className="price">Are you experiencing difficulty in gaining weight?  <span>   You're in the right place at the right time.
           </span></div>
        </div>
        <div className="box-bottom">
          <a href="#" className="add to cart"></a>
        </div>
       </div>
       <div className="box">
        <div className="box-head">
          <img src="images/k4.jpg"
           alt="menu" />
           <span className="menu-catagory">PIZZA</span>
           <h3>Weight Stabilization</h3>
           <div className="price">If you are happy with your current weight and have no intention of losing it... <span>
           </span></div>
        </div>
        <div className="box-bottom">
          <a href="#" className="add to cart"></a>
        </div>
       </div>
       <div className="box">
        <div className="box-head">
          <img src="images/k1.jpeg"
           alt="menu" />
           <span className="menu-catagory"></span>
           <h3>Make Muscle</h3>
           <div className="price">Take a step towards achieving a strong and fit body in line with your muscle-building goals.<span>
           </span></div>
        </div>
        <div className="box-bottom">
          <a href="#" className="add to cart"></a>
        </div>
       </div>
      </div>
    </section>
  
     <section className="about" id="about">
      <h1 className="heading">about <span>us</span></h1>
      <div className="row">
        <div className="content">
          <h3>What Is The Secret Recipe Of Our Burgers?</h3>
          <p>Welcome!
        Hello! As students and fitness enthusiasts, we are excited to present our project, "Fitness Website," to you. Our website is a platform where you can find inspiration for a healthy lifestyle and an active life. Throughout the development of this project, our goal has been to motivate and inspire you to take action.
        Who Are We?
        This project has been created by us, Süheyla İkbal İçme and Zehra Altunok, students of Kocaeli University. As a two-person team, we stay updated on innovations in the fitness world and support each other in achieving our personal fitness goals. Our aim is to encourage you to embrace fitness not just as a sport but as a lifestyle and to grow our community by sharing this passion.
        Feel free to reach out to us with your questions, suggestions, or just to say hello. We would be delighted to have you as part of our project!
        Let's move together for a healthy and happy life!</p>
          <a href="#" className="btn">learn more</a>
        </div>
      </div>
     </section>
     
       <section className="review" id="reviev">
        <h1 className="heading">Client <span>comments</span></h1>
        <div className="box-container">
          <div className="box">
            <img src="images/quote.png" alt="quote" />
            <p>This Gym Center is a great gym with a friendly atmosphere and a wide range of equipment.
            </p>
            <img src="images/Ebru.png" alt="avatar" className="user"/>
            <h3>Ebru Razi</h3>
            <div className="stars">
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="box">
            <img src="images/quote.png" alt="quote" />
            <p>Here, stands out with effective workout programs and a clean environment. I always leave satisfied.
            </p>
            <img src="images/Süheyla.png" alt="avatar" className="user"/>
            <h3>Süheyla İkbal İçme</h3>
            <div className="stars">
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="box">
            <img src="images/quote.png" alt="quote" />
            <p>This place offers a unique experience with a rich selection of yoga and meditation options.
            </p>
            <img src="images/zehra.png" alt="avatar" className="user"/>
            <h3>Zehra Altunok</h3>
            <div className="stars">
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
       </section>
        
        <section className="contact" id="contact">
          <h1 className="heading">Contact <span> us</span></h1>
          <div className="row">
          <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12037.852231349814!2d28.985091699999998!3d41.03700175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIE1leWRhbsSxLCDFnmVoaXQgTXVodGFyLCAzNDQzNSBCZXlvxJ9sdS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1691253425271!5m2!1str!2str"
      loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      title="Google Harita"
    ></iframe>
            <form>
              <h3></h3>
              <div className="inputBox">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="text"/>
              </div>
              <div className="inputBox">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="e-mail"/>
              </div>
              <div className="inputBox">
                <i className="fas fa-phone"></i>
                <input type="number" placeholder="number"/>
              </div>
              <input type="submit" className="btn" value="contact now"/>
            </form>
            </div>
        </section>
     
        <section className="blogs" id="blogs">
          <h1 className="heading"><span>blog</span></h1>
          <div className="box-container">
            <div className="box">
              <div className="image">
                <img src="images/b1.png" alt="blog" />
              </div>
              <div className="content">
                <a href="https://www.youtube.com/watch?v=-tld0bc0t3k" className="title">fitness training program</a>
                <span>by admin / 10st may,2023</span>
                <p>
                  
           "Boost your fitness and embrace a healthy lifestyle with our
           effective workout videos guided by expert trainers. Whether at home or the gym, we're here to support you in achieving your goals."
                </p>
                <a href="#" className="btn">read more</a>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="images/cardio-compressor.png" alt="blog" />
              </div>
              <div className="content">
                <a href="https://www.udemy.com/course/aletsiz-vucut-agirligi-ile-kas-gelisimi-yag-yakim-kuvvet/" className="title">One-on-One Fitness Lessons: Personalized Workout Experience for Your Health</a>
                <span>by admin / 10st may,2023</span>
                <p>
                "One-on-one fitness lessons provide individuals with personalized workout programs, 
                offering tailored solutions to health goals. These private lessons focus on the individual's needs,
                 providing a more effective and motivation-filled exercise experience with the guidance of a coach."

                </p>
                <a href="#" className="btn">read more</a>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="images/pars-1485437796.jpg" alt="blog" />
              </div>
              <div className="content">
                <a href="https://www.hepsiburada.com/ara?q=fitness+malzemeleri" className="title">Invest in Your Health with the Best Fitness Equipment.</a>
                <span>by admin / 10st may,2023</span>
                <p>
                Take one step closer to the fitness equipment you need for a healthy lifestyle!
                Click the link now to discover the highest quality products and make personalized purchases for your health
                </p>
                <a href="#" className="btn">read more</a>
              </div>
            </div>
          </div>
        </section>
        

        <section id="iletisim"/>
      <div className="container" >
      <h3 id="h3iletisim">SİGN UP</h3>

      <div id="iletisimopak" >
      <div id="formgroup" />
      <div id="solform">
        <input type="text"
          name="isim"
          placeholder="Name-Last Name" required
          
          className="form-control" />
        <input type="text"
          name="tel"
          placeholder="Phone Number" required
          className="form-control" />
<input type="password"
          name="sifre"
          placeholder="Password" required
          className="form-control" />


</div>
      <div id="sagform">
        <input type="email"
          name="mail"
          placeholder="Email Adresiniz" required
          className="form-control" />
        <input type="date"
          name="konu"
          placeholder="Age of birth" required
          className="form-control" />
          <input type="text"
          name="cinsiyet"
          placeholder="Gender" required
          className="form-control" />
    
    </div>

      <input type="submit"
        value="Sign UP" /></div>

    <section/>
    
    </div>   
    

<section className="footer">
  <div className="search">
    <input type="text" className="search-input"
     placeholder="Search"/>
    <button className="btn bnt-primary">search</button>
  </div>
  <div className="share">
    <a href="#" className="fab fa-facebook"></a>
    <a href="#" className="fab fa-twitter"></a>
    <a href="#" className="fab fa-instagram"></a>
    <a href="#" className="fab fa-linkedin"></a>
    <a href="#" className="fab fa-pinterest"></a>
  </div>
  <div className="links">
    <a href="#" className="active">Home</a>
    <a href="#">About</a>
    <a href="#">Menu</a>
    <a href="#">Product</a>
    <a href="#">Review</a>
    <a href="#">Contact</a>
    <a href="#">Blogs</a>
  </div>
  <div className="credit">
    created by <span>Zehra Altunok and Süheyla İkbal İçme </span> all rights reserved
  </div>
</section>



<script src="js/script.js"></script>
</div>
  
  );
}

export default App;
