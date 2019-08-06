
var LoginContext;
var LoginLayer = cc.Layer.extend({
    bg: null,
    menu:null,
    ctor: function () {
        this._super();
        LoginContext = this;

        Music.playBGM();
        this.addMenu();

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

        var label = new cc.LabelTTF("全民水浒 林冲传", "FZYHJW", 80);
        label.setColor(cc.color(189, 8, 8));
        label.setPosition(size.width / 2, size.height / 2 + logo.getContentSize().height / 2 + 50);
        this.addChild(label, 0);

        // 开始按钮
        var startBg = new cc.Sprite(res.s_ui_login_huawen);
        var startBt = new ccui.Button(res.s_ui_login_wenzi);
        var node = new cc.Node();
        node.addChild(startBg);
        node.addChild(startBt);
        node.setPosition(size.width / 2, size.height / 2 - logo.getContentSize().height / 2 - 80);
        this.addChild(node);
        // 可以加一个浮动动画
        var move = cc.moveBy();

        startBt.addClickEventListener(this.startGame, this);

        // 读取数据
        if (!cc.sys.localStorage.getItem("LCLevel")) {
            cc.sys.localStorage.setItem("LCLevel", 1);
            cc.sys.localStorage.setItem("LCExp", 0);
        }

        return true;
    },

    addMenu:function(){
        if(!this.menu){
            this.menu = MenuLayout.createLayout();
            var size = cc.winSize;
            this.menu.setAnchorPoint(0.5, 0.5);
            this.menu.setPosition(size.width / 2, size.height * 1.5);
            this.addChild(this.menu, 100);
        }
    },

    startGame: function() {
        LoginContext.menu.goDown();
    }
});

var LoginScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new LoginLayer();
        this.addChild(layer);
    }
});

