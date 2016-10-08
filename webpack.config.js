module.exports = {
	entry:"./src/main",
	output:{
		filename:'bundle.js',
		path:'./dist'
	},
	module:{
		loaders:[
		{
			test:[/\.js/],
			exclude:'/node_modules/',
			loader:'babel-loader',
			query:{
				presets:['react']
			}
		}
		]
	},
	 resolve: {
   	extensions: ['','.js']
 	}



}