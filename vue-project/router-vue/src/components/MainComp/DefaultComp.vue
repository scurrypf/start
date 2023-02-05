<template>
    <div>
        <!-- <vue-particles color="#39AFFD" :particleOpacity="0.7" :particlesNumber="200" shapeType="star" :particleSize="4"
            linesColor="#39AFFD" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150"
            :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" class="lizi" /> -->
        <div>
            <img class="bgImag" src="../../assets/kokomi.jpeg" />
            <!-- https://images.pexels.com/photos/311039/pexels-photo-311039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 -->
        </div>
            <div class="welcome">
            <div>
                Welcome To 
            </div>
            <div>
                Tencent Back-end Management System!!!
            </div> 
        </div>
    </div>
</template>
<script>
export default{
    name:'DefaultComp',
    data:function(){
        return {
            imgItem:[
                {
                    id:'1',
                    url:require('../../assets/kokomi.jpeg')
                },
                {
                    id:'2',
                    url:require('../../assets/headImg.jpg')
                },
                {
                    id:'3',
                    url:require('../../assets/2.jpg')
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
/* #particles-js{
    position: absolute;  
 } */
 .welcome{
    div{
    font-family: 'Courier New', Courier, monospace;
    font-size: 2.5em;
    font-weight: bolder;
    background: -webkit-linear-gradient(315deg,#ff6464,#183fab89);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    }
 }
 .bgImag{
    width: calc(100% - 300px);
    height: calc(100% - 61px);
    position: absolute;
    z-index: -1;
 }
</style>