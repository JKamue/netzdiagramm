			function degrees_to_radians(degrees){
			  return degrees * (Math.PI/180);
			}
			
			function draw_path(ctx,sizex,sizey,xcoord,ycoord,line){
				xcoord.length
				for (i = 0; i < xcoord.length; i++) {
					ctx.beginPath();
					ctx.strokeStyle = 'black'; 	
					ctx.lineWidth=line;
					ctx.moveTo(sizex,sizey);
					ctx.lineTo(xcoord[i],ycoord[i]);
					if(i == corners-1){
						ctx.lineTo(xcoord[0],ycoord[0]);
					}else{
						ctx.lineTo(xcoord[1*(i)+1],ycoord[1*(i)+1]);
					}
					ctx.stroke();
				}
			}
			
			function draw(){
				
				var degrees = 360/corners;
				
				var xcoord = [];
				var ycoord = [];
				
				for (i = 0; i < corners; i++) {
					var	a = i+1;
					var x = Math.round(radius*Math.cos(degrees_to_radians(a*degrees))+1*(sizex));
					var y = Math.round(radius*Math.sin(degrees_to_radians(a*degrees))+1*(sizey));
					xcoord.push(x);
					ycoord.push(y);
				}
				
				var canvas = document.getElementById("myCanvas");
				var ctx = canvas.getContext("2d");
				
				ctx.fillStyle = "white";
				ctx.fillRect(0, 0, canvas.width, canvas.height);
				ctx.fill();
				ctx.fillStyle = "black";
				draw_path(ctx,sizex,sizey,xcoord,ycoord,2);
				
				if(activate_skala == true){
					for (f = 1; f < 10; f++) {
						var skalax = [];
						var skalay = [];
						var size = radius/(10/f);
						for (i = 0; i < corners; i++) {
							var	a = i+1;
							var x = Math.round(size*Math.cos(degrees_to_radians(a*degrees))+1*(sizex));
							var y = Math.round(size*Math.sin(degrees_to_radians(a*degrees))+1*(sizey));
							skalax.push(x);
							skalay.push(y);
						}
						draw_path(ctx,sizex,sizey,skalax,skalay,1);
					}
				}
				
				var scorex = [];
				var scorey = [];
				for (i = 0; i < corners; i++) {
					var	a = i+1;
					var size = radius/(10/score[i]);
					var x = Math.round(size*Math.cos(degrees_to_radians(a*degrees))+1*(sizex));
					var y = Math.round(size*Math.sin(degrees_to_radians(a*degrees))+1*(sizey));
					scorex.push(x);
					scorey.push(y);
				}	

				for (i = 0; i < corners; i++) {
					ctx.beginPath();
					ctx.strokeStyle = '#ff0000';
					ctx.moveTo(scorex[i],scorey[i]);
					if(i == corners-1){
						ctx.lineTo(scorex[0],scorey[0]);
					}else{
						ctx.lineTo(scorex[1*(i)+1],scorey[1*(i)+1]);
					}
					ctx.closePath();
					ctx.stroke();
				}
				
				if(activate_text == true){
					ctx.font = font_size + "px Arial";
					for (i = 0; i < corners; i++) {
						var	a = i+1;
						var size = radius/(10/11);
						var x = Math.round(size*Math.cos(degrees_to_radians(a*degrees))+1*(sizex))-1*(font_size/3);
						var y = Math.round(size*Math.sin(degrees_to_radians(a*degrees))+1*(sizey))+1*(font_size/2);
						ctx.fillText(a,x,y);
					}
				}
				
			}