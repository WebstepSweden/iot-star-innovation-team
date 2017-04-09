function changeState(idText) {
		alert(idText);
}

var app = angular.module('floorplan', []);

app.controller('SensorLayoutCtrl', function($scope) {
  
$scope.roomTitle = "First floor";  
  
   $scope.rotateSensor = function (sensorRotation) {
    var degrees = 0;
      if(sensorRotation != null) degrees = sensorRotation;
      return "rotate("+degrees+", 0, 0);";
  };
  

  
 
  $scope.sensors = [
    
{compId:"stovetop1",room:"Room1",sNum:1,sWidth:100,sHeight:100,x:0,y:200,rotate:null},
{compId:"pills1",room:"Room1",sNum:2,sWidth:50,sHeight:50,x:300,y:200,rotate:null},
{compId:"alarm1",room:"Room1",sNum:3,sWidth:50,sHeight:50,x:500,y:200,rotate:null},
{compId:"door1",room:"Room1",sNum:4,sWidth:150,sHeight:10,x:740,y:200,rotate:-90},
{compId:"stovetop2",room:"Room2",sNum:5,sWidth:100,sHeight:100,x:0,y:500,rotate:null},
{compId:"pills2",room:"Room2",sNum:6,sWidth:50,sHeight:50,x:300,y:500,rotate:null},
{compId:"alarm2",room:"Room2",sNum:7,sWidth:50,sHeight:50,x:500,y:500,rotate:null},
{compId:"door2",room:"Room2",sNum:8,sWidth:150,sHeight:10,x:740,y:500,rotate:-90},
{compId:"stovetop3",room:"Room3",sNum:9,sWidth:100,sHeight:100,x:0,y:800,rotate:null},
{compId:"pills3",room:"Room3",sNum:10,sWidth:50,sHeight:50,x:300,y:800,rotate:null},
{compId:"alarm3",room:"Room3",sNum:11,sWidth:50,sHeight:50,x:500,y:800,rotate:null},
{compId:"door3",room:"Room3",sNum:12,sWidth:150,sHeight:10,x:740,y:800,rotate:-90},

{compId:"stovetop4",room:"Room1",sNum:1,sWidth:100,sHeight:100,x:1750,y:200,rotate:null},
{compId:"pills4",room:"Room1",sNum:2,sWidth:50,sHeight:50,x:1300,y:200,rotate:null},
{compId:"alarm4",room:"Room1",sNum:3,sWidth:50,sHeight:50,x:1500,y:200,rotate:null},
{compId:"door4",room:"Room1",sNum:4,sWidth:150,sHeight:10,x:1110,y:50,rotate:90},
{compId:"stovetop5",room:"Room2",sNum:5,sWidth:100,sHeight:100,x:1750,y:500,rotate:null},
{compId:"pills5",room:"Room2",sNum:6,sWidth:50,sHeight:50,x:1300,y:500,rotate:null},
{compId:"alarm5",room:"Room2",sNum:7,sWidth:50,sHeight:50,x:1500,y:500,rotate:null},
{compId:"door5",room:"Room2",sNum:8,sWidth:150,sHeight:10,x:1110,y:350,rotate:90},
{compId:"stovetop6",room:"Room3",sNum:9,sWidth:100,sHeight:100,x:1750,y:800,rotate:null},
{compId:"pills6",room:"Room3",sNum:10,sWidth:50,sHeight:50,x:1300,y:800,rotate:null},
{compId:"alarm6",room:"Room3",sNum:11,sWidth:50,sHeight:50,x:1500,y:800,rotate:null},
{compId:"door6",room:"Room3",sNum:12,sWidth:150,sHeight:10,x:1110,y:650,rotate:90},

{compId:"door7",room:"Storage",sNum:13,sWidth:150,sHeight:10,x:850,y:600,rotate:0},
{compId:"door8",room:"Entrance",sNum:14,sWidth:150,sHeight:10,x:850,y:0,rotate:0},

{compId:"defibrillator",room:"Entrance",sNum:15,sWidth:50,sHeight:50,x:750,y:250,rotate:null},
{compId:"first-aid",room:"Entrance",sNum:16,sWidth:50,sHeight:50,x:1050,y:250,rotate:null},
{compId:"fire extinguisher",room:"Entrance",sNum:17,sWidth:50,sHeight:50,x:750,y:550,rotate:null},


    ];

      
});