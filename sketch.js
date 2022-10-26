function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  textSize(40)
  text("x:"+mouseX+" Y:"+mouseY,50,50)

  push()
    translate(width/2,height/2)
    ellipse(0,0,400)
    ellipse(0,0,100,50)
    ellipse(-25,0,20) //左鼻孔
    ellipse(25,0,20) //右鼻孔
    
    ellipse(-75,-100,60)
    ellipse(75,-100,60)

    fill(0)
    ellipse(-75+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),20)//map滑鼠可移動的範圍區塊
    ellipse(75+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),20)
    if(mouseIsPressed)
    {
    fill(255,0,0)
    arc(0,60,150,100,0,160)//上面嘴巴
    }
    else
    {
    fill(255,0,0)
    arc(0,60,150,75,0,160)//下面嘴巴
    }
    
    fill(255,0,0)
    arc(0,59,150,50,0,160)
  pop()
  
  }
