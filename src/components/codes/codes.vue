<template>  
    <div class="code-wrap">
        <div class="security-code-wrap">
            <label for="codes">
                <ul class="security-code-container">
                    <li class="field-wrap" v-for="(item, index) in number" :key="index">
                        <i class="char-field">{{value[index] || placeholder}}</i>
                    </li>
                </ul>
            </label>
            <input ref="input" class="input-code" @keyup="handleInput($event)" v-model="value" :style="{'left': value.length<1?'72px':value.length*152+72+'px'}"
            id="codes" name="codes" type="tel" :maxlength="number">
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
  default: ''
  }
 },
 // variables
 data() {
  return {
    value: ''
  }
 },
 methods: {
  codes() {
    this.value=''
  },
 hideKeyboard() {
  // 输入完成隐藏键盘
    document.activeElement.blur() // ios隐藏键盘
    this.$refs.input.blur() // android隐藏键盘
  },
  handleSubmit() {
    this.$emit('input', this.value)
  },
  handleInput(e) {
    this.$refs.input.value = this.value
    if (this.value.length >= this.number) {
        this.hideKeyboard()
    }
    this.handleSubmit()
  }
 }
 }
</script>
<style  lang="scss" scoped>
.code-wrap{
    overflow: hidden;
    position: relative; 
    width:100%;
    height:300px;
    background:#000;
}
 .security-code-wrap {
    position:absolute;
    top:50px;
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
  width: 90px;
  height: 90px;
  line-height: 90px;
  font-size: 44px;
  background-color: #fff;
  margin: 10px 30px;
  color: #000;
  text-align: center;
  .char-field {
  font-style: normal;
  }
 }
 }
 .input-code {
    top: 10px;
    position: absolute;
    text-align: left;
    width: 2px;
    height: 90px;
    overflow: visible;
    z-index: 5;
    background: none;
 }
</style>