<template>
  <div class="about">

    <div class="row" id="banner">
      <div class="col-1"></div>
      <div class="col-7">
        <h1>About</h1>
        <br><br>
      </div>
      <div class="col">
        <router-link to="/"><button v-if="$cookies.get('jwt')" @click="logout" class="btn btn-primary">Log Out</button></router-link>
        <br><br>
      </div>
      <div class="col-1"></div>
    </div>


    <div v-if="loadingContent">
      
      <div class="row">
        <div class="col-1"></div>
        <div class="col-lg-5" id="left">
          <br><br>
          <h3>Who are We?</h3>
          <p>Welcome to UNBOUND Social Media, where freedom of expression knows no bounds! UNBOUND is not just another social media platform; it's a digital sanctuary designed for individuals who seek to break free from the constraints of conventional online interactions. Embracing the ethos of unrestricted communication, UNBOUND empowers users to share their thoughts, ideas, and creativity without fear of censorship or judgment. Whether you're a budding artist, an outspoken activist, or simply someone who craves genuine connections, UNBOUND provides a dynamic space where authenticity reigns supreme.</p>
          <br>
          <p>At UNBOUND, diversity is celebrated, and every voice is heard. Our innovative features prioritize user privacy and security, ensuring a safe environment for open dialogue and meaningful engagement. With customizable profiles, robust content-sharing tools, and seamless integration across devices, UNBOUND offers a seamless experience tailored to your individual preferences. Join us in redefining the digital landscape and discover the true potential of social media without boundaries—welcome to UNBOUND Social Media, where your freedom to connect, create, and inspire knows no limits.</p>
          <br>
        </div>
        <div class="col-lg-5" id="icons">
          <br><br><br>
          <img src="https://i.ibb.co/Qpm58j3/c00411ef-3119-42e8-9457-6d786963639e.jpg" alt="about1">
        </div>
        <div class="col-1"></div>
      </div>
      <br><hr><br>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-lg-5" id="icons">
          <br><br><br>
          <img src="https://i.ibb.co/1vPQsX4/2d290090-f8e1-4ef1-b79c-de2cb6ddef1d.jpg" alt="about2">
          <br><br>
        </div>
        <div class="col-lg-5" id="right">
          <br><br>
          <h3>Our Purpose</h3>
          <p>Our purpose as a business is rooted in the belief that everyone deserves a digital space where they can express themselves freely, without the fear of censorship or discrimination. We strive to empower individuals from all walks of life to share their stories, ideas, and passions in a supportive and inclusive environment.</p>
          <br>
          <p>As a company, UNBOUND is committed to challenging the status quo of social media by prioritizing user autonomy, privacy, and authenticity. We aim to foster genuine connections and meaningful conversations while providing innovative tools and features that enhance the overall user experience. Our mission is to inspire positive change, spark creativity, and cultivate a global community where every voice is valued and heard. Join us in building a more liberated and empowered online world with UNBOUND.</p>
          <br><br><br>
        </div>
        <div class="col-1"></div>
      </div>
      <br><hr><br>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-lg-5" id="left">
          <br><br>
          <h3>The Founder</h3>
          <p>Meet Darren Viljeon, the visionary founder behind UNBOUND Social Media. Darren's journey began with a simple yet powerful realization: the internet lacked a platform that truly embraced freedom of expression and prioritized user empowerment. Fueled by his passion for technology and his belief in the transformative power of social media, Darren embarked on a mission to create a digital sanctuary where individuals could break free from the constraints of traditional online interactions. With a background in software engineering and a deep understanding of user experience, Darren set out to revolutionize the social media landscape.
            <br><br>
            Born and raised in Cape Town, Darren's entrepreneurial spirit was ignited at a young age. After earning a degree in computer science from a prestigious university, he honed his skills working for leading tech companies, where he witnessed firsthand the impact of centralized control and algorithmic manipulation on user engagement. Determined to chart a different course, Darren founded UNBOUND with a clear vision: to build a platform that prioritizes user autonomy, privacy, and authenticity above all else.
            <br><br>
            Under Darren's leadership, UNBOUND has emerged as a beacon of hope in an increasingly polarized digital world. His unwavering commitment to ethical technology and user-centric design has garnered widespread acclaim, attracting a diverse community of creators, activists, and thought leaders from around the globe. With Darren at the helm, UNBOUND continues to push the boundaries of what's possible in social media, inspiring millions to join the movement towards a more liberated and empowered online experience.
          </p>
        </div>
        <div class="col-lg-5" id="icons">
          <br><br><br>
          <img src="https://i.ibb.co/ng0xcnZ/20231009-14031500.jpg" alt="about3">
        </div>
        <div class="col-1"></div>
      </div>
      
      <br><hr><br><br>
      <br><br><br>

    </div>

    <div v-else>
      <Spinner/>
    </div>

  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue'

export default{
  components:{
    Spinner
  },

  data(){
    return{
      loadingContent: true,
    }
  },
  computed:{
    logout(){
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
h1{
  text-align: left;
  color: #6400C7;
}

img{
  height: 70%;
  border: 1px solid black;
}
img:hover{
  transform: scale(1.02);
  box-shadow: 1px 0px 10px 5px blueviolet;
}

#left{
      animation: fromRight 1s ease;
      animation-duration: 5s;
    }
    #right{
      animation: fromLeft 1s ease;
      animation-duration: 5s;
    }
    #icons{
      animation: fadeIn 5s ease;
      animation-duration: 10s;
    }
    @keyframes fromLeft {
      0%{
        transform: translateX(100%);
      }
      100%{
        transform: translateX(0%);
      }
    }
    @keyframes fromRight {
        0%{
          transform: translateX(-100%);
        }
        100%{
          transform: translateX(0%);
        }
    }
    @keyframes fadeIn {
      0%{
        opacity: 0%;
      }
      100%{
        opacity: 100%;
      }
    }
</style>