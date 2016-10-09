module.exports = {
	entry:"./src/main",
	output:{
		filename:'bundle.js',
		path:'./dist'
	},
	watch:true,
	module:{
		loaders:[
		{
			test:[/\.js/],
			exclude:'/node_modules/',
			loader:'babel-loader',
			query:{
				presets:['react']
			}
		},
		{
	        test: /\.less$/,
	        loader: "style!css!less"
      	}
		]
	},
	 resolve: {
   	extensions: ['','.js']
 	}



}