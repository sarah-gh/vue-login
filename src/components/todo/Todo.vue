<template>
<div class='ui centered card mycard'>
    <div class="content" v-show="!isEditing">
        <div class='header mycard'>
            {{ todo.title }}
        </div>
        <div class='meta'>
            {{ todo.project }}
        </div>
        <div class='extra content'>
            <span class='right floated edit icon' v-on:click="showForm">
                <i class='edit icon'></i>
            </span>
            <span class='right floated trash icon' v-on:click="deleteTodo(todo)">
                <i class='trash icon'></i>
            </span>
        </div>
    </div>
    <div class="content" v-show="isEditing">
        <div class='ui form'>
            <div class='field'>
                <label>Title</label>
                <input type='text' v-model="todo.title">
            </div>
            <div class='field mycard'>
                <label>Project</label>
                <input type='text' v-model="todo.project">
            </div>
            <div class='ui two button attached buttons'>
                <button class='ui basic blue button' v-on:click="showForm">
                    Close X
                </button>
            </div>
        </div>
    </div>
    <div id="btn" class='ui mycard bottom attached green basic button' v-on:click="completeTodo(todo)" v-show="!isEditing &&todo.done" disabled>
        {{ todo.Complete }}
    </div>
    <div id="btn" class='ui mycard bottom attached red basic button' v-on:click="completeTodo(todo)" v-show="!isEditing && !todo.done">
        {{ todo.Complete }}
    </div>
</div>
</template>

<script>
export default {
    props: ['todo'],
    data() {
        return {
            isEditing: false,
        };
    },
    methods: {
        showForm() {
            this.isEditing = !this.isEditing;
        },
        completeTodo(todo) {
            this.$emit('complete-todo', todo);
            if (todo.Complete == 'Completed') {
                todo.Complete = 'Pending'
                todo.done = false;
            } else {
                todo.Complete = 'Completed'
                todo.done = true;
            }

        },
        deleteTodo(todo) {
            this.$emit('delete-todo', todo);
        },
    },
};
</script>

<style scoped>
html {
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

*,
:after,
:before {
    box-sizing: inherit;
}

.ui.card:after,
.ui.cards:after {
    display: block;
    content: ' ';
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
}

.ui.form {
    font-size: 1rem;
}

.ui.form {
    position: relative;
    max-width: 100%;
}

.ui.form .field>label {
    display: block;
    margin: 0 0 .28571429rem;
    color: rgba(0, 0, 0, .87);
    font-size: .92857143em;
    font-weight: 700;
    text-transform: none;
}

.ui.form input:not([type]),
.ui.form input[type=text],
.ui.form input[type=email],
.ui.form input[type=search],
.ui.form input[type=password],
.ui.form input[type=date],
.ui.form input[type=datetime-local],
.ui.form input[type=tel],
.ui.form input[type=time],
.ui.form input[type=file],
.ui.form input[type=url],
.ui.form input[type=number] {
    margin: 0;
    outline: 0;
    -webkit-appearance: none;
    line-height: 1.2142em;
    padding: .67861429em 1em;
    font-size: 1em;
    background: #FFF;
    border: 1px solid rgba(34, 36, 38, .15);
    color: rgba(0, 0, 0, .87);
    border-radius: .28571429rem;
    box-shadow: 0 0 0 0 transparent inset;
    -webkit-transition: color .1s ease, border-color .1s ease;
    transition: color .1s ease, border-color .1s ease;
}

.ui.form input:not([type]),
.ui.form input[type=text],
.ui.form input[type=email],
.ui.form input[type=search],
.ui.form input[type=password],
.ui.form input[type=date],
.ui.form input[type=datetime-local],
.ui.form input[type=tel],
.ui.form input[type=time],
.ui.form input[type=file],
.ui.form input[type=url],
.ui.form input[type=number],
.ui.form textarea {
    width: 100%;
    vertical-align: top;
}

input[type=text],
input[type=email],
input[type=search],
input[type=password] {
    -webkit-appearance: none;
    -moz-appearance: none;
}

input {
    line-height: normal;
}

button,
input,
optgroup,
select,
textarea {
    color: inherit;
    font: inherit;
    margin: 0;
}

.ui.buttons:not(.basic):not(.inverted) {
    box-shadow: none;
}

.ui.two.buttons {
    width: 100%;
}

.ui.attached.buttons {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 0;
    width: auto !important;
    z-index: 2;
    margin-left: -1px;
    margin-right: -1px;
}

.ui.attached.button {
    position: relative;
    display: block;
    margin: 0;
    border-radius: 0;
    box-shadow: 0 0 0 1px rgba(34, 36, 38, .15) !important;
}

.ui.buttons {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    font-size: 0;
    vertical-align: baseline;
    margin: 0 .25em 0 0;
}

.ui.button,
.ui.buttons .button,
.ui.buttons .or {
    font-size: 1rem;
}

*,
:after,
:before {
    box-sizing: inherit;
}

user agent stylesheet input[type="text"i] {
    padding: 1px 2px;
}

user agent stylesheet input {
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: textfield;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}

.ui.form {
    font-size: 1rem;
}

.ui.centered.card {
    margin-left: 5px;
    margin-right: 5px;
}

.ui.card:first-child {
    margin-top: 0;
}

.ui.card {
    margin: 1em 0;
}

.ui.card,
.ui.cards>.card {
    max-width: 100%;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 47%;
    min-height: 0;
    background: #FFF;
    padding: 0;
    border: none;
    border-radius: .28571429rem;
    box-shadow: 0 1px 3px 0 #D4D4D5, 0 0 0 1px #D4D4D5;
    -webkit-transition: box-shadow .1s ease, -webkit-transform .1s ease;
    transition: box-shadow .1s ease, -webkit-transform .1s ease;
    transition: box-shadow .1s ease, transform .1s ease;
    transition: box-shadow .1s ease, transform .1s ease, -webkit-transform .1s ease;
    z-index: '';
}

.ui.card .meta,
.ui.cards>.card .meta {
    font-size: 1em;
    color: rgba(0, 0, 0, .4);
}

.ui.form {
    font-size: 1rem;
}

.ui.form {
    position: relative;
    max-width: 100%;
}

.ui.form .field {
    clear: both;
    margin: 0 0 1em;
}

.ui.card>.content,
.ui.cards>.card>.content {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    border: none;
    border-top: 1px solid rgba(34, 36, 38, .1);
    background: 0 0;
    margin: 0;
    padding: 1em;
    box-shadow: none;
    font-size: 1em;
    border-radius: 0;
}

.ui.card>:first-child,
.ui.cards>.card>:first-child {
    border-radius: .28571429rem .28571429rem 0 0 !important;
    border-top: none !important;
}

.ui.card>.content>.header:not(.ui),
.ui.cards>.card>.content>.header:not(.ui) {
    font-weight: 700;
    font-size: 1.28571429em;
    margin-top: -.21425em;
    line-height: 1.2857em;
}

.ui.card>.content>.header,
.ui.cards>.card>.content>.header {
    display: block;
    margin: '';
    color: rgba(0, 0, 0, .85);
}

.ui.basic.green.button:active,
.ui.basic.green.buttons .button:active {
    box-shadow: 0 0 0 1px #198f35 inset !important;
    color: #198F25 !important;
}

.ui.basic.green.button:hover,
.ui.basic.green.buttons .button:hover {
    background: 0 0 !important;
    box-shadow: 0 0 0 1px #16ab39 inset !important;
    color: #16ab39 !important;
}

.ui.basic.green.button,
.ui.basic.green.buttons .button {
    box-shadow: 0 0 0 1px #21BA45 inset !important;
    color: #21BA45 !important;
}

.ui.green.button:active,
.ui.green.buttons .button:active {
    background-color: #198f35;
    color: #FFF;
    text-shadow: none;
}

.ui.green.button:hover,
.ui.green.buttons .button:hover {
    background-color: #16ab39;
    color: #FFF;
    text-shadow: none;
}

.ui.attached.bottom.button {
    border-radius: 0 0 .28571429rem .28571429rem;
}

.ui.basic.button:active,
.ui.basic.buttons .button:active {
    background: #F8F8F8 !important;
    color: rgba(0, 0, 0, .9) !important;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15) inset, 0 1px 4px 0 rgba(34, 36, 38, .15) inset;
}

.ui.basic.button:focus,
.ui.basic.button:hover,
.ui.basic.buttons .button:focus,
.ui.basic.buttons .button:hover {
    background: #FFF !important;
    color: rgba(0, 0, 0, .8) !important;
    box-shadow: 0 0 0 1px rgba(34, 36, 38, .35) inset, 0 0 0 0 rgba(34, 36, 38, .15) inset;
}

.ui.card>.button,
.ui.card>.buttons,
.ui.cards>.card>.button,
.ui.cards>.card>.buttons {
    margin: 0 -1px;
    width: calc(100% + 2px);
}

.ui.green.button {
    box-shadow: 0 0 0 0 rgba(34, 36, 38, .15) inset;
}

.ui.green.button,
.ui.green.buttons .button {
    background-color: #21BA45;
    color: #FFF;
    text-shadow: none;
    background-image: none;
}

.ui.attached.button {
    position: relative;
    display: block;
    margin: 0;
    border-radius: 0;
    box-shadow: 0 0 0 1px rgba(34, 36, 38, .15) !important;
}

.ui.basic.button,
.ui.basic.buttons .button {
    background: 0 0 !important;
    color: rgba(0, 0, 0, .6) !important;
    font-weight: 400;
    border-radius: .28571429rem;
    text-transform: none;
    text-shadow: none !important;
    box-shadow: 0 0 0 1px rgba(34, 36, 38, .15) inset;
}

.ui.active.button:active,
.ui.button:active {
    background-color: #BABBBC;
    background-image: '';
    color: rgba(0, 0, 0, .9);
    box-shadow: 0 0 0 1px transparent inset, none;
}

.ui.button:hover {
    background-color: #CACBCD;
    background-image: none;
    box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, .15) inset;
    color: rgba(0, 0, 0, .8);
}

.green[data-v-ee48fd14] {
    color: green;
    border-color: green;
}

.ui.button,
.ui.buttons .button,
.ui.buttons .or {
    font-size: 1rem;
}

.ui.button {
    cursor: pointer;
    display: inline-block;
    min-height: 1em;
    outline: 0;
    border: none;
    vertical-align: baseline;
    background: #E0E1E2;
    color: rgba(0, 0, 0, .6);
    margin: 0 .25em 0 0;
    padding: .78571429em 1.5em;
    text-transform: none;
    text-shadow: none;
    font-weight: 700;
    line-height: 1em;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    border-radius: .28571429rem;
    box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, .15) inset;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: opacity .1s ease, background-color .1s ease, color .1s ease, box-shadow .1s ease, background .1s ease;
    transition: opacity .1s ease, background-color .1s ease, color .1s ease, box-shadow .1s ease, background .1s ease;
    will-change: '';
    -webkit-tap-highlight-color: transparent;
}

.ui.basic.red.button,
.ui.basic.red.buttons .button {
    box-shadow: 0 0 0 1px #DB2828 inset !important;
    color: #DB2828 !important;
}

.ui.attached.bottom.button {
    border-radius: 0 0 .28571429rem .28571429rem;
}

.ui.card>.button,
.ui.card>.buttons,
.ui.cards>.card>.button,
.ui.cards>.card>.buttons {
    margin: 0 -1px;
    width: calc(100% + 2px);
}

.ui.card>:last-child,
.ui.cards>.card>:last-child {
    border-radius: 0 0 .28571429rem .28571429rem !important;
}

.ui.red.button {
    box-shadow: 0 0 0 0 rgba(34, 36, 38, .15) inset;
}

.ui.red.button,
.ui.red.buttons .button {
    background-color: #DB2828;
    color: #FFF;
    text-shadow: none;
    background-image: none;
}

.ui.attached.button {
    position: relative;
    display: block;
    margin: 0;
    border-radius: 0;
    box-shadow: 0 0 0 1px rgba(34, 36, 38, .15) !important;
}

.ui.basic.button,
.ui.basic.buttons .button {
    background: 0 0 !important;
    color: rgba(0, 0, 0, .6) !important;
    font-weight: 400;
    border-radius: .28571429rem;
    text-transform: none;
    text-shadow: none !important;
    box-shadow: 0 0 0 1px rgba(34, 36, 38, .15) inset;
}

.red[data-v-ee48fd14] {
    color: red;
    border-color: red;
}

.ui.button,
.ui.buttons .button,
.ui.buttons .or {
    font-size: 1rem;

}

.ui.button {
    cursor: pointer;
    display: inline-block;
    min-height: 1em;
    outline: 0;
    border: none;
    vertical-align: baseline;
    background: #E0E1E2;
    color: rgba(0, 0, 0, .6);
    margin: 0 .25em 0 0;
    padding: .78571429em 1.5em;
    text-transform: none;
    text-shadow: none;
    font-weight: 700;
    line-height: 1em;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    border-radius: .28571429rem;
    box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, .15) inset;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: opacity .1s ease, background-color .1s ease, color .1s ease, box-shadow .1s ease, background .1s ease;
    transition: opacity .1s ease, background-color .1s ease, color .1s ease, box-shadow .1s ease, background .1s ease;
    will-change: '';
    -webkit-tap-highlight-color: transparent;
}

.ui[class*="center aligned"].segment {
    text-align: center;
}

.ui.basic.segment {
    background: none;
    box-shadow: none;
    border: none;
    border-radius: 0;
}

.ui.segment:last-child {
    margin-bottom: 0;
}

.ui.segment,
.ui.segments .segment {
    font-size: 1rem;
}

.ui.basic.button,
.ui.basic.buttons .button {
    background: 0 0 !important;
    color: rgba(0, 0, 0, .6) !important;
    font-weight: 400;
    border-radius: .28571429rem;
    text-transform: none;
    text-shadow: none !important;
    box-shadow: 0 0 0 1px rgba(34, 36, 38, .15) inset;
}

.ui.icon.button,
.ui.icon.buttons .button {
    padding: .78571429em;
}

.ui.button,
.ui.buttons .button,
.ui.buttons .or {
    font-size: 1rem;
}

.ui.button {
    cursor: pointer;
    display: inline-block;
    min-height: 1em;
    outline: 0;
    border: none;
    vertical-align: baseline;
    background: #E0E1E2;
    color: rgba(0, 0, 0, .6);
    margin: 0 .25em 0 0;
    padding: .78571429em 1.5em;
    text-transform: none;
    text-shadow: none;
    font-weight: 700;
    line-height: 1em;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    border-radius: .28571429rem;
    box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, .15) inset;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: opacity .1s ease, background-color .1s ease, color .1s ease, box-shadow .1s ease, background .1s ease;
    transition: opacity .1s ease, background-color .1s ease, color .1s ease, box-shadow .1s ease, background .1s ease;
    will-change: '';
    -webkit-tap-highlight-color: transparent;
}

button,
html input[type=button],
input[type=reset],
input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer;
}

button,
select {
    text-transform: none;
}

button {
    overflow: visible;
}

.ui.buttons:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}

.mycard {
    font-family: 'Architects Daughter', cursive;
    font-weight: bold;
}

.ui.card>.content>.header,
.ui.cards>.card>.content>.header {
    font-family: 'Architects Daughter', cursive;

}

.red {
    color: red;
    border-color: red;
}

.green {
    color: green;
    border-color: green;
}
</style>
