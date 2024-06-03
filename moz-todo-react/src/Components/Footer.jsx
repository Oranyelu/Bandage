import React from 'react'
import "../styles/footer.css"
function Footer() {
  return (
      <div className='Footer'>
          <div className='Footer-logo'>
              <img src="" alt="Bandage" />
              <span>Social icons</span>
          </div>
          <div className='Main-Footer'>
              <main>
                  <nav>
                      <b>Commpany Info</b>
                      <a href="">About Us</a>
                      <a href="">Carrier</a>
                      <a href="">We are hiring</a>
                      <a href="">Blog</a>
                  </nav>
                  <nav> <b>Legal</b>
                      <a href="">About Us</a>
                      <a href="">Carrier</a>
                      <a href="">We are hiring</a>
                      <a href="">Blog</a>
                  </nav>
                  <nav> <b>Features</b>
                      <a href="">Buisness Marketing</a>
                      <a href="">User Analytics</a>
                      <a href="">Live Chat</a>
                      <a href="">Unilimited Support</a>
                  </nav>
                  <nav> <b>Resources</b>
                      <a href="">IOS & Andriod</a>
                      <a href="">Watch a Demo</a>
                      <a href="">Customers</a>
                      <a href="">API</a>
                  </nav>
              </main>
              <aside>
                  <b>Get in Touch</b>
                  <form action="" method="post">
                      <input type="email" name="" id="" placeholder='Your Email' />
                      <button type="submit">Subscribe</button>
                      <p>Lore imp sum dolor Amit</p>
                  </form>
              </aside>
          </div>
          <p className='Footer-tag'>Made with Love by George Chime. All Rigths Reserved </p>
    </div>
  )
}

export default Footer