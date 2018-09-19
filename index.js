new Vue({
	el: '#app',
	data:{
		name: 'Kiran',
		web:"www.google.com",
		year: 1995,
		x:0,
		y:0,
		webTag: '<a href="www.google.com">Click me</a>',
		characters:['ninja', 'minja', 'jinja'],
		ninjas:[
			{name:"Riku", age:38},
			{name:"siru", age:30},
			{name:"jimu", age:12}
		]
	},
	methods:{
		greet: function(x){
			return "Good" + x;
		},
		add: function(inc){
			this.year = this.year + inc;
		},
		multiply: function(dec){
			this.year = this.year * dec;
		},
		update: function(event){
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		logText: function(){
			console.log("You entered logname")
		}
	}
});
