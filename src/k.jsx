import './App.css';
import logo from "./images/f1.png"

function k() {
  return (
<div>
<header class="header">
        <a href="#" class="logo">
            <img src="images/f1.png" alt="logo"/>
        </a>
        <nav class="navbar">
          <a href="#home" class="active">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#product">Product</a>
          <a href="#reviev">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
        </nav>
        <div class="buttons">
          <button id="search-btn">
            <i class="fas fa-search"></i>
          </button>
          <button>
            <i class="fas fa-shopping-cart"></i>
          </button>
          <button id="menu-btn">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div class="search-form ">
          <input 
          type="text" 
          class="search-input"
          id="search-box"
          placeholder="search here" />
          <i class="fas fa-search"></i>
        </div>
    </header>

   <div class="form-container"/>
    <div class="form-group">
        <label for="name">Adınız</label>
        <input type="text" name="name" id="name" placeholder="Adınız" required/>
    </div>

    <div class="form-group">
        <label for="surname">Soyadınız</label>
        <input type="text" name="surname" id="surname" placeholder="Soyadınız" required/>
    </div>

    <div class="form-group">
        <label for="email">E-Posta Adresiniz</label>
        <input type="email" name="email" id="email" placeholder="E-Posta Adresiniz" required/>
    </div>

    <div class="form-group">
        <label for="password">Şifreniz</label>
        <input type="password" name="password" id="password" placeholder="*************" required/>
    </div>

    <div class="form-group">
        <label for="password2">Tekrar Şifreniz</label>
        <input type="password" name="password2" id="password2" placeholder="*************" required/>
    </div>

   <div class="form-group text-center">
    <button type="submit">Kaydet</button>
</div>

</div>
  );
}

export default k;
