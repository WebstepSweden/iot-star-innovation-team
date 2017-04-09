function openDoor() {
        
		document.getElementById("door1").class='activeSensor';
}

var app = angular.module('floorplan', []);

app.controller('SensorLayoutCtrl', function($scope) {
  
$scope.roomTitle = "First floor";  

$scope.room1Outline = "M0 0 L0 150 L400 150 L400 0 Z"
$scope.room2Outline = "M0 150 L0 300 L400 300 L400 150 Z"
$scope.room3Outline = "M0 300 L0 450 L400 450 L400 300 Z"
  

   $scope.rotateSensor = function (sensorRotation) {
    var degrees = 0;
      if(sensorRotation != null) degrees = sensorRotation;
      return "rotate("+degrees+", 0, 0);";
  };
  

  
 
  $scope.sensors = [
    
{compId:"stovetop1",room:"Room1",sNum:1,sWidth:40,sHeight:40,x:0,y:110,rotate:null},
{compId:"pills1",room:"Room1",sNum:2,sWidth:20,sHeight:20,x:100,y:50,rotate:null},
{compId:"alarm1",room:"Room1",sNum:3,sWidth:20,sHeight:20,x:150,y:50,rotate:null},
{compId:"door1",room:"Room1",sNum:4,sWidth:70,sHeight:5,x:395,y:110,rotate:-90},
{compId:"stovetop2",room:"Room2",sNum:5,sWidth:40,sHeight:40,x:0,y:260,rotate:null},
{compId:"pills2",room:"Room2",sNum:6,sWidth:20,sHeight:20,x:100,y:200,rotate:null},
{compId:"alarm2",room:"Room2",sNum:7,sWidth:20,sHeight:20,x:150,y:200,rotate:null},
{compId:"door2",room:"Room2",sNum:8,sWidth:70,sHeight:5,x:395,y:260,rotate:-90},
{compId:"stovetop3",room:"Room3",sNum:9,sWidth:40,sHeight:40,x:0,y:410,rotate:null},
{compId:"pills3",room:"Room3",sNum:10,sWidth:20,sHeight:20,x:100,y:350,rotate:null},
{compId:"alarm3",room:"Room3",sNum:11,sWidth:20,sHeight:20,x:150,y:350,rotate:null},
{compId:"door3",room:"Room3",sNum:12,sWidth:70,sHeight:5,x:395,y:410,rotate:-90}
    ];
    


  $scope.startX = 0;	
  $scope.startY = 0;
  $scope.mapWidth = 900;
  $scope.mapHeight = 450;
  
      
});