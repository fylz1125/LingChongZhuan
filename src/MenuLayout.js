var MenuLayout = ccui.Layout.extend(
    {
        ctor: function () {
            this._super();
            this.init();

        },

        init: function () {
            // 防止点击事件穿透
            cc.eventManager.addListener({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: true,
                onTouchBegan:function(){
                    return true;
                }
            }, this);

            this.size = Def.windowSize();
            this.setSize(this.size);
            // this.setBackGroundColor(cc.color.GREEN);
            // this.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
            // this.setBackGroundColorOpacity(100);

            this.bg = new cc.Sprite(res.s_ui_denglu_yz);
            this.bg.setPosition(this.size.width / 2, this.size.height / 2);
            this.addChild(this.bg, 0);

            // menu list
            var button = new ccui.Button(res.s_ui_login_huawen);
            button.setNormalizedPosition(0.5, 0.5);
            button.setTitleText("巧遇鲁智深");
            button.setTitleFontName("FZYHJW");
            button.setTitleFontSize(65);
            button.setTitleColor(cc.color(95,7,117));
            button.setZoomScale(0.3);
            button.setPressedActionEnabled(true);
            button.addClickEventListener(function () {
                cc.log("clicked!");
            });
            this.addChild(button);
        },


    });

//实例化
MenuLayout.createLayout = function () {
    var menuLayout = new MenuLayout();
    return menuLayout;
};