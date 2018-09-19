Vue.component('data-list', {
      template:"<div class='x'>\
        <ul v-for='item in items'>\
          <p> {{item.name}} {{item.age}}  </p>\
        <ul>\
      </div>\
      ",
      props:['items']
    })

    new Vue({
      el: "#app",
      data: {
        active : true,
        items :[],
      },
      components :{

      },

      mounted () {
        $.getJSON('https://api.myjson.com/bins/zk8dg', json => {
          this.items = json.data
          console.log(json.data)
        })
      }
});
