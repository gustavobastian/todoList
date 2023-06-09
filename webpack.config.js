const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode:'development', 
  entry: {
    index:{
      import:'./src/index.js',            
      dependOn: 'projects',      
      },
    tasks:{
        import:'./src/tasks.js',
        },
    projectsModule:{
      import:'./src/projectsModule.js',
      dependOn: 'projectsForm',  
      },
    projects:{
      import:'./src/projects.js',
      dependOn: 'tasks',      
      },
    projectsForm:{
      import:'./src/projectForm.js',
      dependOn: 'projects',      
      },
    listService:{
      import: './src/listService.js',
      dependOn: 'taskModule',      
    }    
    ,
    taskModule:{
      import: './src/tasksModule.js'
    },
    taskForm:{
      import: './src/taskForm.js'
    }        

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ToDoList',
    }),
  ],
  output: {
    //filename: 'main.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};