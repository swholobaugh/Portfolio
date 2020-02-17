<template>
  <div>
    <NavBar/>
    <div class="relative h-screen w-screen bg-cover bg-center shadow-2xl" 
    :style="`background-image:url(${bgImage})`">

      <div class="h-screen w-screen bg-green-800 opacity-75"/>
      <div class="absolute h-screen w-screen top-0 flex flex-col justify-center items-center">
          <h1 class="text-6xl font-bold text-white px-4 hover:bg-white hover:text-green-800 opacity-75">Seth Holobaugh</h1>
          <h3 class="text-3xl font-bold text-white px-4 hover:bg-white hover:text-green-800 opacity-75">Student/Developer</h3>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import bgImage from '../assets/bgimage.jpg'

export default {
  name: "Home",
  components: {
    NavBar
  },
  data(){
    return {
      bgImage
    }
  }
};
</script>
