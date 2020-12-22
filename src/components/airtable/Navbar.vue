<template>
  <div class="airtable">
    <nav>
      <div class="nav-wrapper blue">
        <div class="navbar-items">
          <div class="navbar-items-logo">
            <div class="navbar-items-logo-sv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-app-indicator"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
                />
                <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              </svg>
            </div>

            <router-link to="/" class="navbar-items-logo-head"
              >AirTable</router-link
            >
          </div>

          <div class="navbar-items-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-book"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
              />
            </svg>
            <span>Product Catalog</span>
          </div>
          <div class="navbar-items-end">
            <div class="navbar-items-end-1">
              <div class="navbar-items-end-1-help">
                <span class="navbar-items-end-1-help-title">Help</span>

              </div>
              <div class="navbar-items-end-1-logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
  <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
</svg>
              </div>
              

            </div>
            
            <div class="navbar-items-end-2">
        <div v-bind:style="[this.click? {'float':'left'} : {'float':'right'}]" class="navbar-items-end-2-span">
          <svg @click="openClick" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
</svg>
        </div>
         <div v-bind:style="[this.click? {'float':'right'} : {'display':'none'}]" class="navbar-items-end-2-span">
        <svg @click="openClick" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
        </div>

            </div>
           

          </div>
        </div>
      </div>
    </nav>
     <section class="main">
       
     <multipane class="vertical-panes" layout="vertical">
  
  <div class="pane" :style="{ width: '70%', maxWidth: '70%' }">
    <div>
    
     
    </div>
  </div>
  <multipane-resizer></multipane-resizer>
  <div v-bind:style="[this.click?{'flexGrow':'1'} :{'display':'none'}]" class="pane"  >
    <div>
      
      
    </div>
  </div>
</multipane>
      </section>
  </div>
</template>
<script>
import { Multipane, MultipaneResizer } from 'vue-multipane';
export default {
  data() {
    return {
        click:false
    };
  },
  methods:{
    openClick(){
      if(this.click==false){
 this.click=true;
      }
      else{
        this.click=false;
      }
     
      console.log(this.click);
    }

  },
  components:{
    Multipane,MultipaneResizer
  }
};
</script>
<style >

.navbar-items{
  display: flex;
  width: 100%;
}
.navbar-items-logo {
  width:25%;
  float: left;
  display: flex;
  padding-left: 0.5rem;
  
}
.navbar-items-logo-sv{
padding-top: 0.8rem;
}
.navbar-items-end{
  
  
  display: flex;
  flex-direction: column;
 
  width: 25%;
  height: 50px;
  text-align: center;
}
.navbar-items-end-1{
  display: flex;
  height: 35%;
  width: 100%;
}
.navbar-items-end-2{
  height:15%;
  
}
.navbar-items-end-1-logo{
  padding:0;
width:15%;
cursor: pointer;
float: right;


}
.navbar-items-end-1-help{
  width:80%;
  padding:0 0;


  

}
.navbar-items-end-1-help-title{
  float: right;
  cursor: pointer;
  font-size: 0.8rem;
}
.navbar-items-end-2-span{
  margin: 0;
  float: right;
  padding: 0;
  text-align: initial;
  padding-right: 0.5rem;
  padding-top:0.2rem;
  cursor: pointer;
}
.navbar-items-title {
  text-align: center;
  width: 50%;
  font-size: 2rem;
  font-weight: 600;
}

.navbar-items-logo-head {
  font-size: 2rem;
  font-weight: 600;
   padding:0.3rem 0.5rem;
}

.brand-logo {
  cursor: pointer;
}
.main{
  display: flex;

  height: 94vh;
   justify-content: space-between;
   background-color: #fff;
}
.main-item-2 {
    border-left: 1rem solid  #4094e9;
    resize: horizontal;
  }
 .vertical-panes {
  width: 100%;
  height: 100%;
  border: 1px solid #4094e9;
}
.vertical-panes > .pane {
  text-align: left;
  padding: 15px;
  overflow: hidden;
  background: #fff;
}
.vertical-panes > .pane ~ .pane {
  border-left: 4px solid  #4094e9;
}
  @media only screen and (max-width: 600px) {
   .navbar-items-end-2-span{
     padding-right: 1rem;
   }
   .navbar-items-logo-sv{
padding-top: 0.3rem;
}
.navbar-items-logo-head{
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0;
}
.navbar-items-logo-sv{
  /* height: 10px!important; */
  display: none;
}
.navbar-items-title{
  font-size: 1.5rem;
  font-weight: 600;
  
}
  }

  @media only screen and (max-width: 370px) {
.navbar-items-logo-head{
  font-size: 1rem;
  font-weight: 600;
  
}
.navbar-items-title{
  font-size: 1rem;
  font-weight: 600;
  
}
.bi {
  padding-top: 0.5rem;
}
  }
</style>