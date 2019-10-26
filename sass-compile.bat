@ECHO OFF

ECHO compiling sass files...

sass ./wwwroot/css/master.scss ./wwwroot/css/master.min.css --style compressed

PAUSE
