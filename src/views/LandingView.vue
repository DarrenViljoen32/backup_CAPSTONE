<template>
    <div class="landing">

        <!-- Backgroung Animations -->
        <div class="square">  

            <div class="square-title"></div>
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
            
            <br><br><br>
            <br><br><br>
            <h1>UNBOUND</h1>
            <br>
            <h4>Social Media Platform</h4>
            <br><br><br>
            
            <router-link to="/signin"><button class="btn btn-primary">Sign Up</button></router-link>
            <router-link to="/login"><button class="btn btn-primary">Log In</button></router-link>
            <br><br><br>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
        }
    }
}
</script>

<style scoped>
.landing{
    margin-top: 0%;
    padding-top: 0%;
}
h1, h4{
    color: white;
}
button{
    margin-left: 50px;
    margin-right: 50px;
}



/* Background Animation */

@import url("https://fonts.googleapis.com/css?family=Montserrat:700");
.square {
  background-color: #6400C7;
  position: relative;
  height: 100vh;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
}
.square-title {
  color: floralwhite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  z-index: 1;
}
.shape {
  position: absolute;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px #ffffff;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: shape 12s ease-in forwards infinite;
}
.shape:nth-child(2n) {
  border-color: #ffffff;
}
.shape:nth-child(2) {
  animation-delay: 0.1s;
  left: 25vw;
  top: 40vh;
}
.shape:nth-child(3) {
  animation-delay: 1s;
  left: 75vw;
  top: 50vh;
}
.shape:nth-child(4) {
  animation-delay: 2s;
  left: 90vw;
  top: 10vh;
}
.shape:nth-child(5) {
  animation-delay: 3s;
  left: 10vw;
  top: 85vh;
}
.shape:nth-child(6) {
  animation-delay: 5s;
  left: 50vw;
  top: 10vh;
}
@keyframes shape {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}
</style>