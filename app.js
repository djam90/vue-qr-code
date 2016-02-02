$(function () {
    new Vue({
        el: '.vue-app',
        data: {
            fullUrl: "https://chart.googleapis.com/chart?cht=qr&chs=400x400",
            height: 400,
            width: 400,
            content: ""
        },
        methods: {
            buildUrl: function(){
                this.fullUrl = 'https://chart.googleapis.com/chart?cht=qr&chs=' + this.height + 'x' + this.width + "&chl=" +  encodeURIComponent(this.content)
            }
        }
    })


});