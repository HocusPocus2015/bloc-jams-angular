###BlocJams(angular) - a digital :musical_note: music player like Spotify

![Output sample] (https://github.com/HocusPocus2015/bloc-jams-angular/blob/master/app/assets/images/blocjamsangular.gif) 

Refactored from my JQuery [version](https://github.com/HocusPocus2015/bloc-jams)

User Stories | 
------------ | 
Bootstrap Angular to the application |
Configure routing and states for application |
Implement controllers for application's views |
Create a service that handles song playback |
Write a directive that controls song and volume sliders	|
Add a time code filter to display time properly |

####General Notes
+ Sound Library: [Buzz](http://buzz.jaysalvat.com/documentation/buzz/) 

####Configuration Notes

The project uses [Grunt](http://gruntjs.com/) to run tasks in development. 
Run the application using the Gruntfile's `default` task:
```
$ grunt
```
Install the project dependencies by running:
```
$ npm install
```

A list of the Grunt plugins in this application. | 
------------ | 
[Grunt watch](https://github.com/gruntjs/grunt-contrib-watch) watches for changes to file content and then executes Grunt tasks when a change is detected. |
[Grunt copy](https://github.com/gruntjs/grunt-contrib-copy) copies files from development folders and puts them in the folder that will be served with the frontend of your application. |
[Grunt clean](https://github.com/gruntjs/grunt-contrib-clean) "cleans" or removes all files in the distribution folder (`dist`) so that logic in stylesheets, templates, or scripts isn't accidentally overridden by previous code in the directory. |
[Grunt Hapi](https://github.com/athieriot/grunt-hapi) runs a server using [`HapiJS`](http://hapijs.com/). Happy is a Node web application framework with robust configuration options. |


Made with the help of wonderful people :gift_heart: at [bloc](http://bloc.io).
