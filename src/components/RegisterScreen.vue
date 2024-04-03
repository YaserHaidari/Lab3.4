<template>
    <div class="col-12" id="divRegScreen">
        <form class="col-6">
            <div v-if="!showSummary">
            <h1>Shopping cart</h1>
            <form-group>
                <label for="name">Name: </label>
                <input type="text" class="form-control" v-model="name" id="name" placeholder="Enter Full Name">
            </form-group>
            <form-group>
                <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                    <input :type="showPwd ? 'text' : 'password'" class="form-control" v-model.trim="pwd" id="password" placeholder="Enter password"/>
                    <button @click="showPwd = !showPwd" type="button" class="btn btn-secondary" style="width: min-content; height: max-content; margin-bottom: 2%;">Show</button>
                </div>
            </form-group>
            <form-group>
                <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                    <input :type="showPwd ? 'text' : 'password'" class="form-control" v-model.trim="confirmPassword" id="confirmPwd" placeholder="Enter password"/>
                    <button @click="showPwd = !showPwd" type="button" class="btn btn-secondary" style="width: min-content; height: max-content; margin-bottom: 2%;">Show</button>
                </div>
            </form-group>
            <p v-if="pwd === confirmPassword && pwd.length > 0 && confirmPassword.length > 0">{{ msgPwdMatch = "Password Matched" }}</p>
            <p v-if="pwd !== confirmPassword && pwd.length > 0  && confirmPassword.length > 0">{{ msgPwdMatch = 'Passwords do not match' }}</p>
            <InfoScreen @update="osRadioVal"/>
            <form-grop>
                <button type="button" class="btn btn-info" @click.prevent="registerUser" style="color: whitesmoke; font-size: large;">Place Order</button>
            </form-grop>
        </div>
            <div v-if="showSummary" style="display: flex; flex: 1; flex-direction: row; justify-content: space-between; margin-top: 10px; font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
                <div>
                    <h1>Order Summary</h1>
                    <h3>Welcome: {{ name }}</h3>
                    <h3>Operating system: {{ os }}</h3>
                    <h3>Model: {{ model }}</h3>
                    <button type="submit" class="btn btn-warning">Reorder</button>
                </div>
                <div>
                    <img :src="img" alt="phone" style="width: 100%; height: 100%;"/>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

import InfoScreen from './InfoScreen.vue';
import Data from '@/assets/data.js'
export default{
    name: 'RegisterScreen',
    data(){
        return{
            name: '',
            pwd: '',
            confirmPassword: '',
            msgPwdMatch: '',
            showPwd: null,
            os: '',
            model: '',
            img: '',
            showSummary: false,
            Data: Data
        }
    },
    components:{
        InfoScreen
    },
    methods: {
        registerUser() {
            let filteredData = this.Data
            filteredData.find(item => {
                if(item.model === this.model){
                    this.img = item.image
                }
            })
            if(this.pwd === this.confirmPassword && this.pwd.length > 0 && this.confirmPassword.length > 0){
                if(this.name.length > 0 && this.os.length > 0 && this.model.length > 0){
                    this.showSummary = true
                }
            }else{
                alert("Please fill in all the fields")
            }
        },
        osRadioVal(data){
            this.os = data.osRadioVal 
            this.model = data.selectedVal 
        },
    },
}
</script>