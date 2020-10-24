<template>
<div class="home">
    <div id="welcome">
        <h1>Time to learn something new!</h1>
        <p>You found the best place to learn - and now you're just one sign in (or sign up) away from it!</p>
        <div class="cta">
            <router-link to="/signup">Sign Up</router-link>
            <router-link to="/signin">Sign In</router-link>
        </div>
    </div>
    <div id="slider">
        <transition-group tag="div" :name="transitionName" class="slides-group">
            <div v-if="show" :key="current" class="slide" :class="slides[current].className">
                <h2>I'm {{slides[current].className}}!</h2>
                <!--<img :src="'../../assets/' + slides[current].img" />-->
                <p>{{slides[current].text}}</p>
            </div>
        </transition-group>
        <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
            &#10094;
        </div>
        <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
            &#10095;
        </div>
    </div>

</div>
</template>

<script>
export default {

    data() {
        return {
            current: 0,
            direction: 1,
            transitionName: "fade",
            show: false,
            slides: [{
                    className: "blue",
                    img: "d2c6410e5041dee3d36748ac1c32f6ea.jpg",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, inventore velit pariatur asperiores dignissimos odit debitis!"
                },
                {
                    className: "red",
                    img: "LiQsgd.jpg",
                    text: "Dolorem, praesentium fuga? Eius, beatae nobis incidunt eveniet iste quibusdam cum necessitatibus autem unde!"

                },
                {
                    className: "yellow",
                    img: "wp7134662.jpg",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, inventore velit pariatur asperiores dignissimos odit debitis!"

                }
            ]
        }

    },

    methods: {
        slide(dir) {
            this.direction = dir;
            dir === 1 ?
                (this.transitionName = "slide-next") :
                (this.transitionName = "slide-prev");
            var len = this.slides.length;
            this.current = (this.current + dir % len + len) % len;
        }
    },
    mounted() {
        this.show = true;
    }

}
</script>

<style scoped>
.fade-enter-active {
    transition: opacity 1s;
}

.fade-enter {
    opacity: 0;
}

.slide-next-enter-active,
.slide-next-leave-active {
    transition: transform 0.5s ease-in-out;
}

.slide-next-enter {
    transform: translate(100%);
}

.slide-next-leave-to {
    transform: translate(-100%);
}

.slide-prev-enter-active,
.slide-prev-leave-active {
    transition: transform 0.5s ease-in-out;
}

.slide-prev-enter {
    transform: translate(-100%);
}

.slide-prev-leave-to {
    transform: translate(100%);
}

.blue {
    background: #4a69bd;
}

.red {
    background: #e55039;
}

.yellow {
    background: #f6b93b;
}

body {
    overflow: hidden;
    margin: 0;
    font-size: 50px;
    font-family: "Crimson Text", sans-serif;
    color: #fff;
}

#slider {
    width: 94%;
    height: 70vh;
    position: relative;
    margin: 0 auto;
}

.slide {
    width: 100%;
    height: 70vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin: 20px 0 0 0;
}

.btn {
    z-index: 10;
    cursor: pointer;
    border: 3px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    position: absolute;
    top: calc(50% - 35px);
    left: 1%;
    transition: transform 0.3s ease-in-out;
    user-select: none;
}

.btn-next {
    left: auto;
    right: 1%;
}

.btn:hover {
    transform: scale(1.1);
}

body {
    background-color: #1f1f1f;
}

.home {
    height: 150ch;
    width: 100%;
    background-color: #1f1f1f;
}

#welcome {
    width: 100%;
    height: 520px;
    margin: auto;
    background-image: url('../../assets/498475.jpg');
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;

}

h1 {
    text-align: center;
    font-size: 40px;
    padding: 0;
    margin: 0;
}

p {
    text-align: center;

}

.cta {
    width: 300px;
    margin: 0 auto;
    text-align: center;
}

.cta a {
    margin: 10px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid rgb(145, 35, 35);
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    box-sizing: border-box;
    color: wheat;
}

.cta a:hover,
.cta a:active {
    border: 1px solid white;
    background-color: none;
    color: white;
}
</style>
