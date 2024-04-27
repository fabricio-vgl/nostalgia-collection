// {"name": "Nostalgia Collection", "author": "Fabricio VGL & Pedro_PAP", "version": "04012023", "icon": "app_icon.png", "file": "main.js"}
// Now you can freely code below:

//var font = new Font("fonts/LEMONMILK-Regular.otf");

let boot_path = System.currentDir();

Sound.setVolume(100);
var track = Sound.load("assets/sound.wav");

//var font = new Font("fonts/minecraft.ttf");
var font = new Font();
font.scale = (1);

var count = 0;
var count_int = 0;
var timer = Timer.new();
var main_menu_ptr = 0;


var ps_logo = new Image("assets/ps-logo.png");
//ps_logo.width(100.0);
ps_logo.width = 640.0f;
ps_logo.height = 440.0f;


let new_pad = Pads.get();
let old_pad = new_pad;


Timer.reset(timer)


while(Timer.getTime(timer) < 3000){
    //font.print(300, 224, "AAAAA");
    //Screen.clear(Color.new(0, 0, 0));
    ps_logo.draw(320.0 - ps_logo.width/2, 224.0- ps_logo.height/2);


    Screen.flip();
}

ps_logo = null;



const xoffset = 110.0f;
var item_x_pos = 100.0f;
var item_y_pos = 150.0f;
//var 

var borda = new Image("assets/cursor.png");

var background = new Image("assets/button L1.PNG");
background.width = 640.0f;
background.height = 440.0f;

var item0 = new Image("assets/0.png");
var item1 = new Image("assets/1.png");
var item2 = new Image("assets/2.png");
var item3 = new Image("assets/3.png");
var item4 = new Image("assets/4.png");

var item5 = new Image("assets/5.png");
var item6 = new Image("assets/6.png");
var item7 = new Image("assets/7.png");
var item8 = new Image("assets/8.png");
var item9 = new Image("assets/9.png");

var elf_to_load = 0;


/*var border = new Image("assets/border.png");
border.width = 65.0f;
border.height = 80.0f;

var border2 = new Image("assets/border.png");
border2.width = 50.0f;
border2.height = 50.0f;*/


var page = 0;
var selected = 0;

Sound.play(track);
Sound.repeat(true)

while(true){

    old_pad = new_pad;
    new_pad = Pads.get();

    if(Pads.check(new_pad, Pads.R1) && !Pads.check(old_pad, Pads.R1) && page == 0) { //
        background = new Image("assets/button R1.PNG");
        background.width = 640.0f;
        background.height = 440.0f;
        var item0 = new Image("assets/10.png");
        var item1 = new Image("assets/11.png");
        var item2 = new Image("assets/12.png");
        var item3 = new Image("assets/13.png");
        var item4 = new Image("assets/14.png");

        var item5 = new Image("assets/15.png");
        var item6 = new Image("assets/16.png");
        var item7 = new Image("assets/17.png");
        var item8 = new Image("assets/18.png");
        var item9 = new Image("assets/19.png");

        page = 1;
    }

    if(Pads.check(new_pad, Pads.L1) && !Pads.check(old_pad, Pads.L1) && page == 1) { //
        background = new Image("assets/button L1.PNG");
        background.width = 640.0f;
        background.height = 440.0f;
        item0 = new Image("assets/0.png");
        item1 = new Image("assets/1.png");
        item2 = new Image("assets/2.png");
        item3 = new Image("assets/3.png");
        item4 = new Image("assets/4.png");

        item5 = new Image("assets/5.png");
        item6 = new Image("assets/6.png");
        item7 = new Image("assets/7.png");
        item8 = new Image("assets/8.png");
        item9 = new Image("assets/9.png");
                
        page = 0;
    }

    if(Pads.check(new_pad, Pads.RIGHT) && !Pads.check(old_pad, Pads.RIGHT) ) { //
        if(selected != 4 && selected != 9 ){
            selected++;
        } else {
            selected -= 4;
        }
    }
    if(Pads.check(new_pad, Pads.LEFT) && !Pads.check(old_pad, Pads.LEFT) ) { //
        if(selected != 0 && selected != 5 ){
            selected--;
        } else {
            selected += 4;
        }
    }

    if((Pads.check(new_pad, Pads.UP) && !Pads.check(old_pad, Pads.UP) ) || (Pads.check(new_pad, Pads.DOWN) && !Pads.check(old_pad, Pads.DOWN) ) ) {
        if(selected > 4){
            selected -= 5;
        } else {
            selected += 5; 

        }

    }

    if(Pads.check(new_pad, Pads.CROSS) && !Pads.check(old_pad, Pads.CROSS) ) {
        Sound.deinit();
        /*background = null;
        borda = null;
        item0 = null;
        item1 = null;
        item2 = null;
        item3 = null;
        item4 = null;
        item5 = null;
        item6 = null;
        item7 = null;
        item8 = null;
        item9 = null;*/




        elf_to_load = selected;

        if(page == 1) elf_to_load += 19;
        
        if(elf_to_load == 0) System.loadELF(boot_path + "APPS/BOOT/wLE.ELF");
        if(elf_to_load == 1) System.loadELF(boot_path + "null.ELF");
        if(elf_to_load == 2) System.loadELF(boot_path + "null.ELF");
        if(elf_to_load == 3) System.loadELF(boot_path + "null.ELF");
        if(elf_to_load == 4) System.loadELF(boot_path + "null.ELF");
        if(elf_to_load == 5) System.loadELF(boot_path + "null.ELF");
        if(elf_to_load == 6) System.loadELF(boot_path + "null.ELF");
        if(elf_to_load == 7) System.loadELF(boot_path + "null.ELF");
        if(elf_to_load == 8) System.loadELF(boot_path + "null.ELF");
        if(elf_to_load == 9) System.loadELF(boot_path + "null.ELF");
        if(elf_to_load == 10) System.loadELF(boot_path + "null.ELF");
		if(elf_to_load == 11) System.loadELF(boot_path + "null.ELF");
        if(elf_to_load == 12) System.loadELF(boot_path + "null.ELF");
		if(elf_to_load == 13) System.loadELF(boot_path + "null.ELF");
		if(elf_to_load == 14) System.loadELF(boot_path + "null.ELF");
        if(elf_to_load == 15) System.loadELF(boot_path + "null.ELF");
        if(elf_to_load == 16) System.loadELF(boot_path + "null.ELF");
        if(elf_to_load == 17) System.loadELF(boot_path + "null.ELF");
        if(elf_to_load == 18) System.loadELF(boot_path + "null.ELF");
		if(elf_to_load == 19) System.exitToBrowser();
        if(elf_to_load < 19){

            console.log(boot_path + "assets/" + elf_to_load + ".ELF");
            System.loadELF(boot_path + "assets/" + elf_to_load + ".ELF");
            }
            
        System.loadELF(boot_path + "NOSTALGIA.ELF");

    }
    

    Screen.clear(Color.new(0, 0, 0));
    background.draw(0.0,0.0);

    item_x_pos = 100f;
    item_y_pos = 150.0f;

    item0.draw(item_x_pos - item0.width/2, item_y_pos - item0.height/2);
    if(selected == 0) borda.draw(item_x_pos - borda.width/2, item_y_pos - borda.height/2);
    item_x_pos += xoffset;

    item1.draw(item_x_pos - item1.width/2, item_y_pos - item1.height/2);
    if(selected == 1) borda.draw(item_x_pos - borda.width/2, item_y_pos - borda.height/2);
    item_x_pos += xoffset;

    item2.draw(item_x_pos - item2.width/2, item_y_pos - item2.height/2);
    if(selected == 2) borda.draw(item_x_pos - borda.width/2, item_y_pos - borda.height/2);
    item_x_pos += xoffset;

    item3.draw(item_x_pos - item3.width/2, item_y_pos - item3.height/2);
    if(selected == 3) borda.draw(item_x_pos - borda.width/2, item_y_pos - borda.height/2);
    item_x_pos += xoffset;

    item4.draw(item_x_pos - item4.width/2, item_y_pos - item4.height/2);
    if(selected == 4) borda.draw(item_x_pos - borda.width/2, item_y_pos - borda.height/2);

    item_x_pos = 100.0f;
    item_y_pos += 135.0f;

    item5.draw(item_x_pos - item5.width/2, item_y_pos - item5.height/2);
    if(selected == 5) borda.draw(item_x_pos - borda.width/2, item_y_pos - borda.height/2);
    item_x_pos += xoffset;

    item6.draw(item_x_pos - item6.width/2, item_y_pos - item6.height/2);
    if(selected == 6) borda.draw(item_x_pos - borda.width/2, item_y_pos - borda.height/2);
    item_x_pos += xoffset;

    item7.draw(item_x_pos - item7.width/2, item_y_pos - item7.height/2);
    if(selected == 7) borda.draw(item_x_pos - borda.width/2, item_y_pos - borda.height/2);
    item_x_pos += xoffset;

    item8.draw(item_x_pos - item8.width/2, item_y_pos - item8.height/2);
    if(selected == 8) borda.draw(item_x_pos - borda.width/2, item_y_pos - borda.height/2);
    item_x_pos += xoffset;

    item9.draw(item_x_pos - item9.width/2, item_y_pos - item9.height/2);
    if(selected == 9) borda.draw(item_x_pos - borda.width/2, item_y_pos - borda.height/2);

    /*
    Draw.rect(85.0f, 50.0f,  65.0f, 80.0f, Color.new(255, 255, 255, 255 ));
    Draw.rect(30.0f, 50.0f,  50.0f, 50.0f, Color.new(255, 255, 255, 255 ));

    Draw.rect(155.0f, 50.0f,  50.0f, 50.0f, Color.new(255, 255, 255, 255 ));

    Draw.rect(30.0f, 50.0f,  50.0f, 50.0f, Color.new(255, 255, 255, 255 ));
    */

    // border.draw(90.0 - border.width/2, 50.0 /*- border.height/2*/);


    //border2.draw(33.0 - border2.width/2, 100.0 /*- border2.height/2*/);



    Screen.flip();
    
}


while(true){
    
    old_pad = new_pad;
    new_pad = Pads.get();

    if(Pads.check(new_pad, Pads.START) && !Pads.check(old_pad, Pads.START) && elf_to_load == 1)
    if(elf_to_load == 1) System.loadELF(boot_path + "APPS/SNES-Station/SNES.ELF");
















    Screen.flip();
	
}