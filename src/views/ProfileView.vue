<template>
    <div class="view">

      <div class="row">
        <div class="col-1"></div>
        <div class="col-7">
          <h1>Profile</h1>
          <br><br>
        </div>
        <div class="col">
          <router-link to="/"><button v-if="$cookies.get('jwt')" @click="logout" class="btn btn-primary">Log Out</button></router-link>
          <br><br>
        </div>
        <div class="col-1"></div>
      </div>


          <!-- Edit Users Modal -->
          <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-for="user in $store.state.users" :key="user.user_ID">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Edit User</h5>
                  <a class="btn-close" data-bs-dismiss="modal" aria-label="Close"></a>
                </div>
                <div class="modal-body">
                  <input type="text" name="user_Name" placeholder="First Name" v-model="editedUsers.user_Name">
                  <br><br>
                  <input type="text" name="user_Surname" placeholder="Surname" v-model="editedUsers.user_Surname">
                  <br><br>
                  <input type="text" name="user_Age" placeholder="Age" v-model="editedUsers.user_Age">
                  <br><br>
                  <input type="text" name="user_Gender" placeholder="Gender" v-model="editedUsers.user_Gender">
                  <br><br>
                  <input type="email" name="user_Email" placeholder="Email" v-model="editedUsers.user_Email">
                  <br><br>
                  <input type="password" name="user_Password" placeholder="Password" v-model="editedUsers.user_Password">
                  <br><br>
                  <input type="text" name="user_Role" placeholder="Role" v-model="editedUsers.user_Role">
                  <br><br>
                  <input type="text" name="user_Image" placeholder="Image Url" v-model="editedUsers.user_Image">
                  <br><br>
                </div>
                <div class="modal-footer">
                  <button type="button" data-bs-dismiss="modal" class="btn btn-primary">Close</button>
                  <button @click="userEdit" class="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>

        <div v-if="loggedInUser">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Password</th>
                <th>Role</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.user_ID">
                <th>{{ user.user_ID }}</th>
                <td>{{ user.user_Name }}</td>
                <td>{{ user.user_Surname }}</td>
                <td>{{ user.user_Age }}</td>
                <td>{{ user.user_Gender }}</td>
                <td>{{ user.user_Email }}</td>
                <td>{{ user.user_Password }}</td>
                <td>{{ user.user_Role }}</td>
                <td>{{ user.user_Image }}</td>
                <td>
                  <button class="bi bi-pencil" title="Edit Admin" @click="populateUserFields(user)" data-bs-toggle="modal" data-bs-target="#exampleModal8"></button>
                  <br><br>
                  <button class="bi bi-dash-lg" title="Delete Admin" @click="deleteUser(user.user_ID)"></button>
                </td>
              </tr>
            </tbody>
          </table>
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
            admins: [],
            users: [],

            loadingUsers: true,


            user_ID: null,
            user_Name: null,
            user_Age: null,
            user_Gender: null,
            user_Email: null,
            user_Password: null,
            user_Role: null,
            user_Image: null,

            editedAdmins: {
              user_ID: null,
              user_Name: null,
              user_Age: null,
              user_Gender: null,
              user_Email: null,
              user_Password: null,
              user_Role: null,
              user_Image: null,
            },

            modalVisable: false,
        }
    },
    computed:{
    logout(){
      this.$store.dispatch('logout')
    },

    loggedInAdmin(){
      return this.$store.state.users
    }
  },

  methods: {
      //USERS

      async displayUsers(){
        try{
          this.loadingUsers = false
          await this.$store.dispatch('getUsers')
          this.users = this.$store.state.users
        }catch(err){
          console.error(err);
        }finally{
          this.loadingUsers = true
        }
      },

      deleteUser(user_ID){
        try{
          this.$store.dispatch('deleteUser', user_ID)
        }catch(err){
          console.error(err);
        }
      },

      addUser(){
        try{
          this.$store.dispatch('addUser', this.$data)
        }catch(err){
          console.error(err);
        }
      },

      populateUserFields(user){
        this.user_Name = user.user_Name
        this.user_Surname = user.user_Surname
        this.user_Age = user.user_Age
        this.user_Gender = user.user_Gender
        this.user_Email = user.user_Email
        this.user_Password = user.user_Password
        this.user_Role = user.user_Role
        this.user_Image = user.user_Image
        this.editedUsers = {...user}
      },

      clearInput(){
        this.user_Name = ''
        this.user_Surname = ''
        this.user_Age = ''
        this.user_Gender = ''
        this.user_Email = ''
        this.user_Password = ''
        this.user_Role = ''
        this.user_Image = ''
      },
 
      userEdit(){
        try{
          this.$store.dispatch('editUser', this.editedUsers);
          this.editedUsers = {
                user_ID: null,
                user_Name: null,
                user_Surname: null,
                user_Age: null,
                user_Gender: null,
                user_Email: null,
                user_Password: null,
                user_Role: null,
                user_Image: null,
          }
        }catch(err){
          console.error(err);
        }
    },
  },

  mounted(){
    this.displayUsers()
    // this.displayOneUser()
  }
}
</script>

<style>
h1{
  text-align: left;
  color: #6400C7;
}
</style>