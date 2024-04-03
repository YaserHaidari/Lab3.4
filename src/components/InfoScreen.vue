<template>
    <div class="col-12">
        <h1>Operating system</h1>
        <div>
            <div v-for="(item, index) in radioArrayVal" :key="index">
                <div class="form-check">
                    <input class="form-check-input" type="radio" :value="item" v-model="osRadioVal" name="radio" />
                    <label class="form-check-label" for="radio">{{ item }}</label>
                </div>
            </div>
        </div>
        <div>
        <div v-if="osRadioVal != null">
            <label for="modelSelect">Select a phone Model</label>
            <select class="form-control" id="modelSelect" v-model="selectedVal" style="background-color: aliceblue;">
                <option v-for="(item, index) in selectedData" :key="index">{{item.model}}</option>
            </select>
        </div>
        </div>
    </div>
</template>
<script>
import Data from '../assets/data.js'
export default{
    name: 'InfoScreen',
    data(){
        return{
            selectedData: [],
            osRadioVal: '',
            selectedVal: null,
            radioArrayVal: [],
        }
    },
    watch:{
        osRadioVal(newVal){
            let FilteredData = Data.filter(item => item.os === newVal)
            this.selectedData = FilteredData;
            this.$emit('update', { osRadioVal: this.osRadioVal, selectedVal: this.selectedVal });
        },
        selectedVal(){
            this.$emit('update', { osRadioVal: this.osRadioVal, selectedVal: this.selectedVal });
        }
    },
    mounted(){
        this.checkVar();
    },
    methods: {
        checkVar(){
           const data = Data.map(item => item.os);
           const finalArr = [...new Set(data)]
           this.radioArrayVal = finalArr;
        }
    },
}
</script>