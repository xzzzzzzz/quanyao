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
            <input ref="input" class="input-code" @keyup="handleInput($event)" v-model="value"
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
  value: ''
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