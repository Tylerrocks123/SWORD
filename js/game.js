var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)
var fps = 1000/60
var timer = setInterval(main, fps)

function main()
{
    ctx.clearRect(0,0,c.width,c.height); 
    state()
}

//setup
var state;
var button = new GameObject();
var avatar = new GameObject();
var wall = new GameObject();
var level = new GameObject();
var sword = new GameObject();
var cactus = new GameObject();
var guide = new GameObject();
var wall = [];
var texts = [];

function init()
{
    state = menu
    sword = new GameObject();
    avatar.setImage("#default");
    sword.setImage("#swordup");
    avatar.img.w = avatar.w;
    avatar.img.h = avatar.h;
    sword.img.w = sword.w;
    sword.img.h = sword.h;
    sword.w = 12;
    sword.h = 100;

    level.x = 0; 
    level.y = 0;

    wall[0]=new GameObject();
    wall[0].h = 20;
    wall[0].w = 500;
    wall[0].color = `black`
    wall[0].x = c.width/2 + 40;
    wall[0].y = 60
    wall[0].world = level

    wall[1]=new GameObject();
    wall[1].h = 400;
    wall[1].w = 24;
    wall[1].color = `red`
    wall[1].x = 700;
    wall[1].y = c.height/2
    wall[1].world = level

    wall[2]=new GameObject();
    wall[2].h = 800;
    wall[2].w = 24;
    wall[2].color = `black`
    wall[2].x = 1200;
    wall[2].y = c.height/2 + 350
    wall[2].world = level

    wall[3]=new GameObject();
    wall[3].w = 1000;
    wall[3].h = 24;
    wall[3].color = `black`;
    wall[3].x = c.width/2 + 300;
    wall[3].y = c.height + 500;
    wall[3].world = level

    wall[4]=new GameObject();
    wall[4].w = 500;
    wall[4].h = 24;
    wall[4].color = `black`;
    wall[4].x = c.width/2 + 562;
    wall[4].y = c.height - 300;
    wall[4].world = level

    wall[5]=new GameObject();
    wall[5].h = 950;
    wall[5].w = 24;
    wall[5].color = `black`;
    wall[5].x = 200;
    wall[5].y = c.height/2 + 275;
    wall[5].world = level

    wall[6]=new GameObject();
    wall[6].h = 400;
    wall[6].w = 24;
    wall[6].color = `red`;
    wall[6].x = 700;
    wall[6].y = c.height/2 + 400 ;
    wall[6].world = level

    wall[7]=new GameObject();
    wall[7].h = 600;
    wall[7].w = 24;
    wall[7].color = `black`;
    wall[7].x = 900;
    wall[7].y = c.height/2 + 450;
    wall[7].world = level

    wall[8]=new GameObject();
    wall[8].h = 600;
    wall[8].w = 24;
    wall[8].color = `black`;
    wall[8].x = 400;
    wall[8].y = -500;
    wall[8].world = level

    wall[9]=new GameObject();
    wall[9].h = 600;
    wall[9].w = 24;
    wall[9].color = `black`;
    wall[9].x = 800;
    wall[9].y = -500;
    wall[9].world = level

    wall[10]=new GameObject();
    wall[10].h = 20;
    wall[10].w = 400;
    wall[10].color = `black`;
    wall[10].x = 600;
    wall[10].y = -800;
    wall[10].world = level

    wall[11]=new GameObject();
    wall[11].h = 400;
    wall[11].w = 24;
    wall[11].color = `red`;
    wall[11].x = 1400;
    wall[11].y = 800 ;
    wall[11].world = level


    texts[0] = new GameObject();
    texts[0].x = 1050;
    texts[0].y = 1100;
    texts[0].world = level;
    texts[0].text = "THE FORBIDDEN WALL";
    texts[0].textColor = "red";
    texts[0].textFont = "30px Arial";

    texts[1] = new GameObject();
    texts[1].x = 1050;
    texts[1].y = 1150;
    texts[1].world = level;
    texts[1].text = "WHICH MUST NOT BE CLIMBED";
    texts[1].textColor = "red";
    texts[1].textFont = "30px Arial";

    guide.setImage("#default");
    guide.x = 1420;
    guide.y = 900;
    guide.img.w = guide.w;
    guide.img.h = guide.h;
    guide.world = level;

    cactus.setImage("#cactus");
    cactus.x = 500;
    cactus.y = 500;
    cactus.img.w = cactus.w;
    cactus.img.h = cactus.h;
    cactus.world = level;
    sword.color = "#5023d3"
    
}


sword.color = "#5023d3"
init();

/*---------------Game Screens (states)----------------*/
function menu()
{
    texts[2] = new GameObject();
    texts[2].x = 250;
    texts[2].y = 100;
    texts[2].world = level;
    texts[2].text = "COLLECT THE SOUL";
    texts[2].textColor = "black";
    texts[2].textFont = "30px Arial";
    texts[2].drawText();

    texts[3] = new GameObject();
    texts[3].x = 250;
    texts[3].y = 150;
    texts[3].world = level;
    texts[3].text = "TO BEGIN";
    texts[3].textColor = "black";
    texts[3].textFont = "30px Arial";
    texts[3].drawText();
    
    button.setImage("#soul"); 
    button.img.w = guide.w;
    button.img.h = guide.h;
    button.graphic();

    if(clicked(button))
    {
        state = game;
        texts[2].text = "";  
        texts[3].text = "";
    }
}

function win()
{

}
function lose()
{
    avatar.vx = 0;
    avatar.vy = 0;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "white";
    ctx.font = "48px Arial";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", c.width / 2, c.height / 2);

    var restartCube = new GameObject();
    restartCube.world = {x: 0, y: 0};
    restartCube.x = c.width / 2;
    restartCube.y = c.height / 2 + 100;
    restartCube.w = 100;
    restartCube.h = 100;
    restartCube.setImage("#soul");
    restartCube.graphic();
    restartCube.render();

    if(clicked(restartCube)) {
        state = menu;
        init();
    }
}

function game()
{
    
    sword.x = 10000;
    if(a == true)
    {
        avatar.vx += -1;
    }
    if(d == true)
    {
        avatar.vx += 1;
    }
    if(w == true)
    {
        avatar.vy += -1;
    }
    if(s == true)
    {
        avatar.vy += 1;
    }
    if(up == true)
    {
        sword.x = avatar.top().x;
        sword.y = avatar.top().y;
        sword.angle = 0;
    }
    if(down == true)
    {
        sword.x = avatar.bottom().x;
        sword.y = avatar.bottom().y;
        sword.angle = 180;
    }
    if(left == true)
    {
        sword.x = avatar.left().x;
        sword.y = avatar.left().y;
        sword.angle = -90;
    }
    if(right == true)
    {
        sword.x = avatar.right().x;
        sword.y = avatar.right().y;
        sword.angle = 90
    }
    avatar.vx *= .85;
    avatar.vy *= .85;
    avatar.move();

    //used to move the level. 
    var offset = {x:avatar.vx, y:avatar.vy}

    for(let i=0; i<wall.length; i++)
    {
        while(wall[i].isOverPoint(avatar.bottom()))
        {
            avatar.vy = 0;
            avatar.y--;
            offset.y--;
        }
        while(wall[i].isOverPoint(avatar.top()))
        {
            avatar.vy = 0;
            avatar.y++;
            offset.y++;
        }
        while(wall[i].isOverPoint(avatar.left()))
        {
            avatar.vx = 0;
            avatar.x++;
            offset.x++;
        }
        while(wall[i].isOverPoint(avatar.right()))
        {
            avatar.vx = 0;
            avatar.x--;
            offset.x--;
        }
      
    }
    
   

    /*-------Level movement threshold----*/
    //if(avatar.x > 500 || avatar.x < 300)
    {
        //Level movement code
        level.x -= offset.x;
        avatar.x -= offset.x;
        level.y -= offset.y;
        avatar.y -= offset.y;
    }

    /*----- Camera Code -----------
        var dx = c.width/2 - avatar.x
        var dy = c.height/2 - avatar.y
        
        level.x += dx*.05; 
        avatar.x += dx*.05; 
        level.y += dy*.15; 
        avatar.y += dy*.15; 
    ----------------------------*/
    
   for(let i=0;i<wall.length; i++)
   {
    wall[i].render();
   }


    sword.render();
    avatar.graphic();
    sword.graphic();
    guide.graphic();
    cactus.graphic();
    for (let i = 0; i < texts.length; i++) {
    texts[i].drawText();
}

if(sword.isOverPoint(cactus.center())) {
    cactus.x = -1000;
    cactus.y = -1000;
}

if(avatar.isOverPoint(cactus.center())) {
lose();
}
}


