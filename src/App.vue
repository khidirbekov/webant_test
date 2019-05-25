<template>
  <div id="app">
    <div class="top">
      <img src="./assets/logo.png" id="logo">
      <div class="menu">
        <router-link to="/new/" class="links" id="first" > New </router-link>
        <router-link to="/popular/" class="links" id="second"> Popular  </router-link>
      </div>
    </div>  
    <div>
        <router-view/>
    </div>
  </div>
</template>

<script>

export default {
    name: 'app',

  };

  
</script>



<style>
@font-face {
  font-family: 'Acrom Regular';
  src: url('./fonts/Acrom-Regular.eot');
  src: url('./fonts/Acrom-Regular.eot?#iefix') format('embedded-opentype'),
  url('./fonts/Acrom-Regular.woff') format('woff'),
  url('./fonts/Acrom-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: 'Acrom Regular', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.top{
  display: flex;
}
#logo {
  width: 122px;
  height: 30px;
  padding: 20px 100px 0px 20px;
}

.menu{
  padding: 0;
  display: flex;
  justify-content: right;
  align-content: center;
  width: 83%;
  border-bottom: 2px solid #E4E7ED; 
  box-sizing: border-box;
}




.menu .links{
  display: block;
  height: 60px;
  width: 60px;
  text-align: center;
  line-height: 60px;
  margin: 0  0 -2px 20px;
  text-decoration: none;
  color: #303133;
}

.router-link-exact-active{
  border-bottom: 2px solid #ED5992;
}
.container{
        display: grid;
        position: relative;
        width:90vw;
        margin: auto;
        height: 70vh;
        grid-template-columns: repeat(5,1fr);
        grid-template-rows: repeat(3,1fr);
        grid-gap: 30px;
        grid-column-gap: 20px;
        justify-content: space-around;
        padding-top: 40px;
    }

    .item{
        -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        box-shadow: 0 20px 22px 1px rgba(0, 0, 0, 0.1);
        background: #222;
        overflow: hidden;
        border-radius: 7px;
    }
    .item img{
        width: 100%;
        height: 100%;
        box-sizing: content-box;
    }

    .loading{
        margin: auto;
        text-align: center;
        position: absolute;
        height: 100px;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);

    }

    .nav {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -80px;
        margin: auto;
    }
    .error{
      position: absolute;
      left: 43.33%;
      right: 43.4%;
      top: 39.06%;
      bottom: 39.26%;
      width: 191px;
      height: 220px;
    }

#error{
  width: 130px;
  padding: 10px;
  border: 1px dashed #aaa;
  overflow: hidden;
  position: relative;
  margin-bottom:0px;
}
.error p{
  margin: 0;
  font-size: 12px;
}

.error h1{
  margin: 5px;
  color:#2F1767;
}

 .modal{
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 100vh;
       background-color: rgba(0,0,0,0.5);
   }

   .modal-container{
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translateX(-50%) translateY(-50%);
       width: 700px;
       height: 600px;
       background-color: #fff;
       border-radius: 4px;
       text-align: left;
       
   }

    .modal-container .img-container  img {
        box-sizing: content-box;
        width: 100%;
        height: 100%;
        
   }

    .modal-container p{
        color: #2F1767;
        font-weight: bold;
    }
    .modal-container p, .modal-container span{
        padding-left: 20px;
    }

   .img-container{
       position: relative;
       width: 665px;
       height: 450px;
       overflow: hidden;
       margin: auto;
       margin-top: 20px;
       background-color: #222;
   }

</style>
