var canvas=document.querySelector("canvas");
            ctx=canvas.getContext("2d");
            w=canvas.width=window.innerWidth;
            h=canvas.height=window.innerHeight;
            var canvas2=document.createElement("canvas");
                ctx2=canvas2.getContext("2d");
                canvas2.width=400;
                canvas2.height=400;
            var a=canvas2.width/2;
        var grandient=ctx.createRadialGradient(a,a,0,a,a,a);
            grandient.addColorStop(0.025,'#fff');
            grandient.addColorStop(0.1, 'hsl(220,59%,18%)');
            grandient.addColorStop(0.025, 'hsl(220,60%,33%)');
            grandient.addColorStop(1,"transparent");
            ctx2.fillStyle=grandient;
            ctx2.beginPath();
            ctx2.arc(a,a,a,0,Math.PI*2);
            ctx2.fill();
            ctx2.closePath();
            var stars=[];
            var count=0;
            function Star(){
                this.pos=Math.floor(Math.random()* w/2-100);
                this.r=Math.floor(Math.random()*100);
                this.dx=w/2;
                this.dy=h/2;
                this.rand=Math.floor(Math.random()*360);
                this.speed=this.pos/100000;
                stars[count]=this;
                count ++;
            }
            Star.prototype.draw=function(){
                var x=Math.sin(this.rand+1)* this.pos+this.dx;
                    y=Math.cos(this.rand)*this.pos/2+this.dy;
                ctx.drawImage(canvas2,x-this.r/2,y-this.r/2,this.r,this.r);
                this.rand=this.rand+this.speed;
            }
            for(var i=0;i<1000;i++){
                new Star();
            }
            function anmit(){
                ctx.clearRect(0,0,w,h);
                for(var i=0;i<stars.length;i++){
                    stars[i].draw();
                }
                requestAnimationFrame(anmit);
            }
            anmit();
            var oH=document.getElementsByTagName("h1")[0];
            var arr=["大家好，我們主要是推廣大家在閒暇之時，多看看其他事物，",

            "例如：看星星。",
            
            "除此之外，我們還開放打賞，希望可以多支持我們。",
            
            "我們也會持續更新，為想要關注星星動態的人們能快速了解最新資訊及瀏覽。"],
                index=0,
                arrLen=arr.length,
                strLen=arr[0].length;
                pos=0,
                row=0,
                str="",
                timer=null;
            function print() {
                while(row<index){
                    str=str+arr[row]+"<br>";
                    row++;
                }
                oH.innerHTML=str+arr[index].substring(0,pos);
                if(pos==strLen){
                    index++;
                    pos =0;
                    if(index<arr.length){
                        strLen=arr[index].length;
                        timer=setTimeout(print,250);
                    }
                }else{
                    pos++;
                    timer=setTimeout(print,250);
                }
            }
            setTimeout(print,250);


            
            
        
        
    
