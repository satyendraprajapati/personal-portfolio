body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
}

header {
  background: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

header h1 {
  margin: 0;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin: 0 10px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

section {
  padding: 20px;
  margin: 20px 0;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
}

.job {
  margin-bottom: 20px;
}

.job h3 {
  margin: 0;
}

.job p {
  margin: 5px 0;
}

ul {
  list-style-type: square;
  padding-left: 20px;
}

footer {
  text-align: center;
  padding: 10px;
  background: #333;
  color: #fff;
}

#back-to-top {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

#back-to-top:hover {
  background-color: #555;
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

#cta {
  text-align: center;
  padding: 40px 20px;
  background-color: #333;
  color: #fff;
}

.cta-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #fff;
  color: #333;
  text-decoration: none;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 20px;
}

.cta-button:hover {
  background-color: #f4f4f4;
}

.testimonial {
  background-color: #f9f9f9;
  padding: 15px;
  margin-bottom: 10px;
  border-left: 5px solid #333;
}

.blog-post {
  margin-bottom: 20px;
}

.blog-post h3 {
  margin: 0;
}

.blog-post a {
  color: #333;
  text-decoration: none;
}

.blog-post a:hover {
  text-decoration: underline;
}

.social-links {
  margin-top: 20px;
}

.social-links a {
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
}

.social-links a:hover {
  text-decoration: underline;
}

body.dark-mode {
  background-color: #333;
  color: #f4f4f4;
}

body.dark-mode header {
  background-color: #222;
}

body.dark-mode section {
  background-color: #444;
  color: #f4f4f4;
}

body.dark-mode footer {
  background-color: #222;
}
