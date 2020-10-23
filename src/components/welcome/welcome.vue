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
</div>
</template>

<style scoped>
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
