<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        document.addEventListener('DOMContentLoaded', () => {
        const html = document.querySelector('html');
        let fontSize = window.innerWidth / 10;
        fontSize = fontSize > 30 ? 30 : fontSize
        html.style.fontSize = fontSize + 'px' 
      })
    }
    // alert(navigator.userAgent)
    // const targetProtocol = "https:";
    // if(process.env.NODE_ENV === 'production'){
    //   if (window.location.protocol != targetProtocol)
    //     window.location.href = targetProtocol +
    //     window.location.href.substring(window.location.protocol.length);
    //   }
    }
    
}

</script>

<style>
  #app{
    width:100%;
    height:100%;
    position: relative;
  }
</style>
