var LoginLayer = cc.Layer.extend({
    bg:null,
    ctor:function () {
        this._super();

        Music.playBGM();

        var size = cc.winSize;
        this.bg = new cc.Sprite(res.s_ui_denglu);
        this.bg.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.bg, 0);

        var logo = new cc.Sprite(res.s_ui_linchong4);
        logo.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(logo, 0);

        var label = new cc.LabelTTF("全民水浒林冲传", res.s_font_fzyhjw, 80);
        label.setColor(cc.color(189, 8, 8));
        label.setPosition(size.width/2, size.height/2 + logo.getContentSize().height/2 + 50);
        this.addChild(label,0);

        var startBt = new ccui.Button(res.s_ui_login_wenzi);
        startBt.setPosition(cc.p(size.width/2,size.height/2 - logo.getContentSize().height/2 - 50));
        this.addChild(startBt,0);



        return true;
    }
});

var LoginScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new LoginLayer();
        this.addChild(layer);
    }
});

