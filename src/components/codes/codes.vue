<template>  
    <div class="code-wrap">
        <div class="security-code-wrap">
            <label for="codes">
                <ul class="security-code-container">
                    <li class="field-wrap" v-for="(item, index) in disInputs" :key="index">
                        <i class="char-field">{{value[index] || placeholder}}</i>
                    </li>
                </ul>
            </label>
            <input ref="input" class="input-code" @keyup="handleInput($event)" @keydown="delNum($event)" v-model="value"
            id="codes" name="codes" type="tel" :maxlength="number"
            autocorrect="off" autocomplete="off" autocapitalize="off">
        </div>
    </div>
</template>
<script>
 export default {
 name: 'SecurityCode',
 // component properties
 props: {
  number: {
  type: Number,
  default: 4
  },
  placeholder: {
  type: String,
  default: '-'
  }
 },
 // variables
 data() {
  return {
  value: '',
  disInputs:[{value:''},{value:''},{value:''},{value:''}],
  }
 },
 methods: {
  hideKeyboard() {
  // 输入完成隐藏键盘
  document.activeElement.blur() // ios隐藏键盘
  this.$refs.input.blur() // android隐藏键盘
  },
  handleSubmit() {
    this.$emit('input', this.value)
  },
  handleInput() {
  this.$refs.input.value = this.value
//   if (this.value.length >= this.number) {
//     this.hideKeyboard()
//   }
  for(var i=0;i<this.value.length;i++){
        this.disInputs[i].value=this.value.charAt(i)
        // 表示字符串中某个位置的数字，即字符在字符串中的下标。
    }
        console.log(this.disInputs.value)
  this.handleSubmit()
  },
    delNum(){
        var oEvent = window.event; 
        if (oEvent.keyCode == 8) { 
        if(this.realInput.length>0){
            this.disInputs[this.realInput.length-1].value=''
        }
        }
    }
 }
 }
</script>
<style  lang="less" scoped>
.code-wrap{
    overflow: hidden;
    position: relative; 
    width:100%;
    height:300px;
    background:#000;
}
 .security-code-wrap {
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
 }
 .security-code-container {
 margin: 0;
 padding: 0;
 display: flex;
 justify-content: center;
 .field-wrap {
  list-style: none;
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  background-color: #fff;
  margin: 2px;
  color: #000;
  text-align: center;
  input{
      -webkit-appearance: none;-moz-appearance: none;-ms-appearance: none;resize: none;outline: none;border:0;width:30px;line-height: 30px;text-align: center;height: 30px;font-size:16px;
  }
  .char-field {
  font-style: normal;
  }
 }
 }
 .input-code {
 position: absolute;
 width: 0;
 height: 0;
 opacity: 0;
 overflow: visible;
 z-index: -1;
 }
</style>