var res = {
    // bg
    s_bg_12:"res/bg/1_2.jpg",
    s_bg_3:"res/bg/3.jpg",
    s_bg_4:"res/bg/4.jpg",
    s_bg_5:"res/bg/5.jpg",
    s_bg_6:"res/bg/6.jpg",

    // data
    s_data_chapter:"res/data/chapterData.json",
    s_data_player:"res/data/playerData.json",
    
    // hero card
    s_hero_chaijin:"res/hero/chaijin.png",
    s_hero_dipi:"res/hero/dipi.png",
    s_hero_dongchao:"res/hero/dongchao.png",
    s_hero_fujiang:"res/hero/fujiang.png",
    s_hero_furen:"res/hero/furen.png",
    s_hero_gaoqiu:"res/hero/gaoqiu.png",
    s_hero_gaoyanei:"res/hero/gaoyanei.png",
    s_hero_jiaotou:"res/hero/jiaotou.png",
    s_hero_linchong:"res/hero/linchong.png",
    s_hero_liumang:"res/hero/liumang.png",
    s_hero_luqian:"res/hero/luqian.png",
    s_hero_luzhisheng:"res/hero/luzhisheng.png",
    s_hero_pianjiang:"res/hero/pianjiang.png",
    s_hero_tuanlian:"res/hero/tuanlian.png",
    s_hero_wushi:"res/hero/wushi.png",
    s_hero_xuebao:"res/hero/xuebao.png",
    s_hero_yahuan:"res/hero/yahuan.png",

    // sound
    s_sound_attack:"res/sounds/attack.ogg",
    s_bgm_fight:"res/sounds/BGM_Fight.mp3",
    s_bgm_main:"res/sounds/BGM_Main.mp3",
    s_bgm_story:"res/sounds/BGM_Story.mp3",

    // // UI
    s_ui_linchong4:"res/UI/006linchong4.png",
    s_ui_card_png:"res/UI/card.png",
    s_ui_card_plist:"res/UI/card.plist",
    s_ui_chatSys_png:"res/UI/chatSystem.png",
    s_ui_chatSys_plist:"res/UI/chatSystem.plist",
    s_ui_denglu:"res/UI/denglujiemian.jpg",
    s_ui_denglu_yz:"res/UI/denglujiemian_yz.jpg",
    s_ui_login_huawen:"res/UI/icon_login_huawen.png",
    s_ui_login_wenzi:"res/UI/icon_login_wenzi.png",
    s_ui_shouye:"res/UI/shouye2.0_bg.jpg",
    
};

var g_fonts = [
    {
        type:"font",
        name:"FZYHJW",
        srcs:["res/fonts/FZYHJW.ttf"]
    },
];

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
for (var i in g_fonts) {
    g_resources.push(g_fonts[i]);
}
