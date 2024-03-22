<template>
    <div class="view">
        
        <div class="row">
            <div class="col-1"></div>
            <div class="col-7">
                <h1>Contact Us</h1>
                <br><br>
            </div>
            <div class="col">
                <router-link to="/"><button v-if="$cookies.get('jwt')" @click="logout" class="btn btn-primary">Log Out</button></router-link>
            </div>
            <div class="col-1"></div>
        </div>
        
        <br><br>
        
        <div  v-if="loadingContent">
            <div class="row" id="icons">
              <div class="col-md-4 text-center">
                  <ul class="list-unstyled mb-0">
                      <li><i class="bi bi-geo-alt-fill"></i>
                      <h4>Location</h4>
                          <p>Cape Town, Western Cape, South Africa</p>
                      </li>
                  </ul>
              </div>
            
              <div class="col-md-4 text-center">
                  <ul class="list-unstyled mb-0">
                      <li><i class="bi bi-telephone-outbound-fill"></i>
                      <h4>Telephone</h4>
                      <p><a href="tel: 0748671764">+27 74 867 1764</a></p>
                      </li>
                  </ul>
              </div>
            
              <div class="col-md-4 text-center">
                  <ul class="list-unstyled mb-0">
                      <li><i class="bi bi-envelope-at-fill"></i>
                      <h4>Email</h4>
                      <p>darrenviljoen32@gmail.com</p>
                      </li>
                  </ul>
              </div>
            
            </div>
            <br><br><br>
            
        <div class="row">
            <div class="col-1"></div>
            <div class="col" id="left">
                <h4>Contact Us through other Social Media</h4>
                <br><br>
                <span class="bi bi-twitter-x"><a href="">Twitter / X</a></span>
                <br><br>
                <span class="bi bi-instagram"><a href="">Instagram</a></span>
                <br><br>
                <span class="bi bi-facebook"><a href="">Facebook</a></span>
                <br><br>
                <span class="bi bi-tiktok"><a href="">Tik Tok</a></span>
                <br><br>
                <span class="bi bi-linkedin"><a href="">LinkedIn</a></span>
                <br><br>
                <span class="bi bi-whatsapp"><a href="">WhatsApp</a></span>
                <br><br>
            </div>
            <div class="col" id="right">
                <h3 class="fw-bold col">Send Us a Message via Email:</h3>
        
                <div class="row">
        
                <div class="col-md mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="https://formspree.io/f/xjvqjgvr" method="POST" class="was-validated">
        
                    <div class="row">
        
                        <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control" placeholder="Enter Full Name" required v-model="name">
                            <div class="valid-feedback">
                                Valid!
                            </div>
                            <div class="invalid-feedback">
                                Please Enter A Name.
                            </div>
                        </div>
                        </div>
        
                        <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control" placeholder="Enter Email" required v-model="email">
                            <div class="valid-feedback">
                                Valid!
                            </div>
                            <div class="invalid-feedback">
                                Please Enter An Email.
                            </div>
                        </div>
                        </div>
        
                    </div>
        
                    <div class="row">
        
                        <div class="col-md-12">
                            <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control" placeholder="Enter Subject" required v-model="subject">
                            <div class="valid-feedback">
                                Valid!
                            </div>
                            <div class="invalid-feedback">
                                Please Enter A Subject.
                            </div>
                            </div>
                        </div>
                        
                    </div>
        
                    <div class="row">
        
                        <div class="col-md-12">
        
                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Enter Your Message" required v-model="message"></textarea>
                            <div class="valid-feedback">
                                Valid!
                            </div>
                            <div class="invalid-feedback">
                                Please Enter A Message.
                            </div>
                        </div>
        
                        </div>
        
                    </div>
        
                    <div class="text-center text-md-left">
                        <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#formModal">Send</button>
                    </div>
                    <br>
                        <!-- Modal -->
                        <div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="formModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="formModalLongTitle">Thank You!</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Your Message Was Successfully Sent via Formspree.</p>
                            </div>
                            </div>
                        </div>
                        </div>
        
                    </form>
                </div>
        
                </div>


            </div>
            <div class="col-1"></div>
        </div>

        <br><br>




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

<style>
h1{
    text-align: left;
    color: #6400C7;
}
a{
    text-decoration: none;
    color: black;
    margin-left: 15px;
}
form{
    padding: 10px;
    border: 1px solid black;
    border-radius: 5%;
    background-color: #6400C7;
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