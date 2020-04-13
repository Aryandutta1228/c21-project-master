var sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune;



function setup() {
  createCanvas(1600,800);
  
  sun = ellipse;
  mercury = ellipse;
  venus = ellipse;
  earth = ellipse;
  mars = ellipse;
  jupiter = ellipse;
  saturn = ellipse;
  uranus = ellipse;
  neptune = ellipse;
  
  }

function draw() {
  background(0); 
  
  fill("orange");
  sun = ellipseMode(RADIUS);
 sun = ellipse(780,350,100,100);
 
  fill("grey");
  mercury =  ellipseMode(RADIUS);
 mercury = ellipse(590,450,40,40);
  
  fill("yellow");
  venus = ellipseMode(RADIUS);
 venus = ellipse(970,300,45,45);

  fill("green");
  earth = ellipseMode(RADIUS);
 earth = ellipse(500,150,50,50);

  fill("maroon");
  mars = ellipseMode(RADIUS);
 mars = ellipse(310,530,55,55);

  fill("brown");
  jupiter = ellipseMode(RADIUS);
 jupiter = ellipse(120,350,80,80);

  fill("brown");
  saturn =  ellipseMode(RADIUS);
 saturn =  ellipse(1140,580,120,20);

  fill("orchid");
  saturn = ellipseMode(RADIUS);
saturn = ellipse(1140,580,60,60);

  fill("lightblue");
  uranus =  ellipseMode(RADIUS);
 uranus = ellipse(1260,150,60,60);

  fill("blue");
  neptune = ellipseMode(RADIUS);
neptune = ellipse(1500,380,60,60);
     
   if(frameCount>100){
    fill("orange");
    sun = ellipse(780,350,120,120);
    
  }
  
   if(frameCount>200){
    sun = ellipse(780,350,140,140);
   }

   if(frameCount>300){
    sun = ellipse(780,350,160,160);
   }

   if(frameCount>400){
    sun = ellipse(780,350,180,180);
   }

   if(frameCount>500){
    sun = ellipse(780,350,200,200);
   }

   if(frameCount>600){
    sun = ellipse(780,350,220,220);
   }

   if(frameCount>700){
    sun = ellipse(780,350,240,240);
   }

   if(frameCount>800){
    sun = ellipse(780,350,260,260);
   }

   if(frameCount>900){
    sun = ellipse(780,350,280,280);
   }

   if(frameCount>1000){
    sun = ellipse(780,350,300,300);
   }
   
   if(frameCount>1100){
    sun = ellipse(780,350,320,320);
   }

   if(frameCount>1200){
    sun = ellipse(780,350,340,340);
   }
  
   if(frameCount>1300){
    sun = ellipse(780,350,360,360);
   }

   if(frameCount>1400){
    sun = ellipse(780,350,380,380);
   }

   if(frameCount>1500){
    sun = ellipse(780,350,400,400);
   }

   if(frameCount>1600){
    sun = ellipse(780,350,420,420);
   }

   if(frameCount>1700){
    sun = ellipse(780,350,440,440);
   }

   if(frameCount>1800){
    sun = ellipse(780,350,460,460);
   }

   if(frameCount>1900){
    sun = ellipse(780,350,480,480);
   }

   if(frameCount>2000){
    sun = ellipse(780,350,500,500);
   }

   if(frameCount>2100){
    sun = ellipse(780,350,520,520);
   }

   if(frameCount>2200){
    sun = ellipse(780,350,540,540);
   }

   if(frameCount>2300){
    sun = ellipse(780,350,560,560);
   }

   if(frameCount>2400){
    sun = ellipse(780,350,580,580);
   }

   if(frameCount>2500){
    sun = ellipse(780,350,600,600);
   }

   if(frameCount>2600){
    sun = ellipse(780,350,620,620);
   }

   if(frameCount>2700){
    sun = ellipse(780,350,640,640);
   }

   if(frameCount>2800){
    sun = ellipse(780,350,660,660);
   }

   if(frameCount>2900){
    sun = ellipse(780,350,680,680);
   }

   if(frameCount>3000){
    sun = ellipse(780,350,700,700);
   }
  
   if(frameCount>3100){
    sun = ellipse(780,350,720,720);
   }
   
   if(frameCount>3200){
    sun = ellipse(780,350,740,740);
   }
   
   if(frameCount>3300){
    sun = ellipse(780,350,760,760);
   }
   
   if(frameCount>3400){
    sun = ellipse(780,350,780,780);
   }
   
   if(frameCount>3500){
    sun = ellipse(780,350,800,800);
   }
  
   drawSprites();

}








