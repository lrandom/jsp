<template>
  <form v-on:submit.prevent="submit">
      <div>
          <label>Username</label>
          <input type="text" v-model="username"/>
          <p v-if="isSubmit && !$v.username.required">This username required</p>
      </div>

      <div>
          <label>Password</label>
          <input type="password" v-model="password"/>
          <p v-if="isSubmit && !$v.password.required">This password required</p>
      </div>

      <input type="submit" value="Submit"/>
  </form>
</template>


<script>
   import {required} from 'vuelidate/lib/validators';
   export default{
        data:function(){
            return {
                username:'',
                password:'',
                isSubmit: false
            }
        },
        validations: {
             username: {
                 required
             },
             password:{
                 required
             }
        },
        methods:{
            submit(){
                this.isSubmit = true;
                this.$v.$touch();
                if(!this.$v.$invalid()){
                    //cho phep submit form;
                    alert('Form này valid');
                }
            }
        }
   }
</script>
