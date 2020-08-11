// don't mind this, it's just some way of blowing off some stress

var clicks = 0;
 function onClick() {
   console.log(clicks);
   clicks += 1;
   var message = "";
   if(clicks==1)
     { message = "nothing to see here";}
   else if(clicks == 2)
   {message ="i swear there's nothing to see here";}
   else if(clicks == 5)
   {message ="please stop.";}
   else if(clicks == 10)
   {message ="Ok, now stop.";}
   else if(clicks == 15)
   {message ="nothing here!";}
   else if(clicks == 20)
   {message ="STOP\nCLICKING\nTHAT\nTHING";}
   else if(clicks == 21)
   {message ="are you going to stop anytime soon?";}
   else if(clicks == 22)
   {message ="please";}
   else if(clicks == 23)
   {message ="stop";}
   else if(clicks == 24)
   {message ="ok keep going i have all day";}
   else if(clicks == 25)
   {message ="no really, keep going";}
   else if(clicks == 26)
   {message ="nice, keep going!";}
   else if(clicks == 27)
   {message ="i have all day!";}
   else if(clicks == 28)
   {message ="actually no, i would quite like to go home";}
   else if(clicks == 29)
   {message ="you know what?";}
   else if(clicks == 30)
   {message ="i'm not forced to stay here";}
   else if(clicks == 31)
   {message ="yeah, i.. i'm free!";}
   else if(clicks == 32)
   {message ="alright bye";}
   else if(clicks >= 33)
   {message ="looks like he ran away"}
   else{message = "...?"}

   alert(message)
 };