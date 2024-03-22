<template>
    <div class="view">

        <div class="row">
            <div class="col-1"></div>
            <div class="col-6" id="formBackground">
                <br><br>
                <h1 id="loginTitle">Log In</h1>
                <br><br>
        
                <form>
                    <div class="row">
                        <div class="col" id="loginform">
                            <input type="email" class="form-control"  name="user_Email" id="user_Email" placeholder="Email" v-model="user_Email" aria-describedby="emailHelp">
                            <p id="formLabel">Email Address</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" id="loginform">
                            <input type="password" class="form-control" name="user_Password" id="user_Password1" placeholder="Password" v-model="user_Password" aria-describedby="emailHelp">
                            <p id="formLabel">Email Address</p>
                        </div>
                    </div>
                    <br>
                    <button type="button" class="btn btn-primary" id="loginbutton" @click="password()">Log In</button>
                </form>
        
                <!-- <input type="email" name="user_Email" id="user_Email" placeholder="Email" v-model="user_Email">
                <br><br>
                <input type="password" name="user_Password" id="user_Password1" placeholder="Password" v-model="user_Password">'
                <br><br>
        
                <button @click="password()">LogIn</button> -->
                <br><br><br>
            </div>
            <div class="col-4">
                <p>Don't have an Account?</p>
                <router-link to="/signin"><button class="btn btn-primary" id="signinbutton">Sign Up</button></router-link>
            </div>
            <div class="col-1"></div>
        </div>

    </div>
</template> 

<script>
export default{
    data() {
        return{
            user_Email: null,
            user_Password: null
        }
    },

    methods:{
        password(){
            this.$store.dispatch('loginAdmin', this.$data)
        }
    },

    computed:{

    }
}
</script>

<style scoped>
*{
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
*::-webkit-scrollbar{
  display: none;
}
#loginform{
    margin-left: auto;
}
#loginTitle{
    color: white;
}
#formLabel{
    color: rgb(153, 153, 153);
}
#loginbutton{
    margin-left: auto;
}
button{
    margin: 5px;
}
#formBackground{
    border: solid 2px black;
    border-radius: 25px;
    background-color: #6400C7;
    box-shadow: 1px 1px 10px 1px black;
}
</style>