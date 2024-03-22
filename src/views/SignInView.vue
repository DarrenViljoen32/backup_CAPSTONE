<template>
    <div class="view">

        <div class="row">
            <div class="col-1"></div>
            <div class="col-6" id="formBackground">
                <br><br>
                <h1 id="signinTitle">Sign Up</h1>
                <br><br>

                <form>
                    <div class="row">
                        <div class="col" id="signinform">
                            <input type="text" class="form-control"  name="user_Name" id="user_Name" placeholder="Name" v-model="user_Name" aria-describedby="textHelp">
                            <p id="formLabel">First Name</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" id="signinform">
                            <input type="text" class="form-control"  name="user_Surname" id="user_Surname" placeholder="Surname" v-model="user_Surname" aria-describedby="nameHelp">
                            <p id="formLabel">Last Name</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" id="signinform">
                            <input type="text" class="form-control"  name="user_Age" id="user_Age" placeholder="Age" v-model="user_Age" aria-describedby="textHelp">
                            <p id="formLabel">Current Age</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" id="signinform">
                            <input type="text" class="form-control"  name="user_Gender" id="user_Gender" placeholder="Gender" v-model="user_Gender" aria-describedby="textHelp">
                            <p id="formLabel">Identified Gender</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" id="signinform">
                            <input type="email" class="form-control"  name="user_Email" id="user_Email" placeholder="Email" v-model="user_Email" aria-describedby="emailHelp">
                            <p id="formLabel">Email Address</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" id="signinform">
                            <input type="password" class="form-control" name="user_Password" id="user_Password" placeholder="Password" v-model="user_Password" aria-describedby="emailHelp">
                            <p id="formLabel">A Strong Password is Reccommended</p>
                        </div>
                    </div>
                    <!-- <div class="row">
                        <div class="col" id="signinform">
                            <input type="text" class="form-control" name="user_Role" id="user_Role" placeholder="Role" v-model="user_Role" aria-describedby="emailHelp" value="User" >
                            <p id="formLabel">Role: Admin / User</p>
                        </div>
                    </div> -->
                    <div class="row">
                        <div class="col" id="signinform">
                            <input type="text" class="form-control" name="user_Image" id="user_Image" placeholder="Image" v-model="user_Image" aria-describedby="emailHelp">
                            <div id="formLabel">Profile Image URL</div>
                        </div>
                    </div>
                    <br>
                    
                    <router-link to="/login"><button type="button" class="btn btn-primary" @click="plusAdmin()">Register</button></router-link>
                </form>
                
                <!-- <input type="text" name="user_Name" id="user_Name2" placeholder="Name" v-model="user_Name">
                    <br><br>
                    <input type="text" name="user_Surname" id="user_Surname2" placeholder="Surname" v-model="user_Surname">
                    <br><br>
                    <input type="text" name="user_Age" id="user_Age" placeholder="Age" v-model="user_Age">
                    <br><br>
                    <input type="text" name="user_Gender" id="user_Gender" placeholder="Gender" v-model="user_Gender">
                    <br><br>
                    <input type="email" name="user_Email" id="user_Email" placeholder="Email" v-model="user_Email">
                    <br><br>
                    <input type="password" name="user_Password" id="user_Password2" placeholder="Password" v-model="user_Password">
                    <br><br>
                    <input type="text" name="user_Role" id="user_Role" placeholder="Role" v-model="user_Role">
                    <br><br>
                    <input type="text" name="user_Image" id="user_Image" placeholder="Image Url" v-model="user_Image">
                    <br><br> -->
                    
                    <br><br><br>
                    
            </div>

            <div class="col-4">
                <p>Already have an Account?</p>
                <router-link to="/login"><button type="button" class="btn btn-primary">Log In</button></router-link>
            </div>
            
            <div class="col-1"></div>

         </div>
         <br><br>
            
    </div>
</template> 

<script>
export default{
    data() {
        return{
            user_Name: null,
            user_Surname: null,
            user_Age: null,
            user_Gender: null,
            user_Email: null,
            user_Password: null,
            user_Role: "User",
            user_Image: null

        }
    },

    methods:{
        plusAdmin(){
            this.$store.dispatch('addUser', this.$data)
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
#signinform{
    margin-left: auto;
}
#signinTitle{
    color: white;
}
#formLabel{
    color: rgb(153, 153, 153);
}
#formBackground{
    border: solid 2px black;
    border-radius: 25px;
    background-color: #6400C7;
    box-shadow: 1px 1px 10px 1px black;
}
button{
    margin: 5px;
}
</style>