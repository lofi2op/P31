class Plinko
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:1,
			friction:0			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body = Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
		display(){
			var pos = this.body.position;
			var angle = this.body.angle;
	
			push();
			translate(pos.x,pos.y);
			rotate(angle);
			noStroke();
			fill("white");
			ellipseMode(RADIUS);
			ellipse(0,0,this.r,this.r);
			pop();
		}
}


