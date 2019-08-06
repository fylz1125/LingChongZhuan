var MENULAYOUT;
var MenuLayout = ccui.Layout.extend({
    _touchListener:null,
        ctor: function () {
            this._super();
            this.init();

        },

        init: function () {
            MENULAYOUT = this;
            // 防止点击事件穿透
            this._touchListener = cc.EventListener.create({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: true,
                onTouchBegan: function () {
                    return true;
                }
            });

            this.size = Def.windowSize();
            this.setSize(this.size);
            // this.setBackGroundColor(cc.color.GREEN);
            // this.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
            // this.setBackGroundColorOpacity(100);

            this.bg = new cc.Sprite(res.s_ui_denglu_yz);
            this.bg.setPosition(this.size.width / 2, this.size.height / 2);
            this.addChild(this.bg, 0);

            // menu list
            var button1 = new ccui.Button(res.s_ui_login_huawen);
            button1.setNormalizedPosition(0.5, 0.5);
            button1.setTitleText("巧遇鲁智深");
            button1.setTitleFontName("FZYHJW");
            button1.setTitleFontSize(65);
            button1.setTitleColor(cc.color(95, 7, 117));
            button1.setZoomScale(0.3);
            button1.setPressedActionEnabled(true);
            button1.setPosition(cc.p(this.size.width / 4, this.size.height / 2 + button1.getContentSize().height / 2 + 100));
            button1.addClickEventListener(function () {
                cc.log("clicked!");
            });
            this.addChild(button1);

            var button2 = new ccui.Button(res.s_ui_login_huawen);
            button2.setNormalizedPosition(0.5, 0.5);
            button2.setTitleText("棍打高衙内");
            button2.setTitleFontName("FZYHJW");
            button2.setTitleFontSize(65);
            button2.setTitleColor(cc.color(95, 7, 117));
            button2.setZoomScale(0.3);
            button2.setPressedActionEnabled(true);
            button2.setPosition(cc.p(this.size.width / 4, this.size.height / 2 + 50));
            button2.addClickEventListener(function () {
                cc.log("clicked!");
            });
            this.addChild(button2);

            var button3 = new ccui.Button(res.s_ui_login_huawen);
            button3.setNormalizedPosition(0.5, 0.5);
            button3.setTitleText("误入白虎堂");
            button3.setTitleFontName("FZYHJW");
            button3.setTitleFontSize(65);
            button3.setTitleColor(cc.color(95, 7, 117));
            button3.setZoomScale(0.3);
            button3.setPressedActionEnabled(true);
            button3.setPosition(cc.p(this.size.width / 4, this.size.height / 2 - button1.getContentSize().height / 2));
            button3.addClickEventListener(function () {
                cc.log("clicked!");
            });
            this.addChild(button3);

            var button4 = new ccui.Button(res.s_ui_login_huawen);
            button4.setNormalizedPosition(0.5, 0.5);
            button4.setTitleText("喋血野猪林");
            button4.setTitleFontName("FZYHJW");
            button4.setTitleFontSize(65);
            button4.setTitleColor(cc.color(95, 7, 117));
            button4.setZoomScale(0.3);
            button4.setPressedActionEnabled(true);
            button4.setPosition(cc.p(this.size.width * 3 / 4, this.size.height / 2 + button1.getContentSize().height / 2 + 100));
            button4.addClickEventListener(function () {
                cc.log("clicked!");
            });
            this.addChild(button4);

            var button5 = new ccui.Button(res.s_ui_login_huawen);
            button5.setNormalizedPosition(0.5, 0.5);
            button5.setTitleText("棒打洪教头");
            button5.setTitleFontName("FZYHJW");
            button5.setTitleFontSize(65);
            button5.setTitleColor(cc.color(95, 7, 117));
            button5.setZoomScale(0.3);
            button5.setPressedActionEnabled(true);
            button5.setPosition(cc.p(this.size.width * 3 / 4, this.size.height / 2 + 50));
            button5.addClickEventListener(function () {
                cc.log("clicked!");
            });
            this.addChild(button5);

            var button6 = new ccui.Button(res.s_ui_login_huawen);
            button6.setNormalizedPosition(0.5, 0.5);
            button6.setTitleText("风雪山神庙");
            button6.setTitleFontName("FZYHJW");
            button6.setTitleFontSize(65);
            button6.setTitleColor(cc.color(95, 7, 117));
            button6.setZoomScale(0.3);
            button6.setPressedActionEnabled(true);
            button6.setPosition(cc.p(this.size.width * 3 / 4, this.size.height / 2 - button1.getContentSize().height / 2));
            button6.addClickEventListener(function () {
                cc.log("clicked!");
            });
            this.addChild(button6);

            // 修炼和返回
            var trainBt = new ccui.Button(res.s_ui_training);
            // false，使用自定义size
            trainBt.ignoreContentAdaptWithSize(false);
            trainBt.setContentSize(cc.size(400, 80));
            trainBt.setAnchorPoint(0.5, 0.5);
            trainBt.setTitleText("修炼");
            trainBt.setTitleFontName("FZYHJW");
            trainBt.setTitleFontSize(55);
            trainBt.setTitleColor(cc.color(12, 59, 23));
            trainBt.setZoomScale(0.3);
            trainBt.setPressedActionEnabled(true);
            trainBt.setPosition(cc.p(this.size.width / 2, button6.y - button1.getContentSize().height / 2));
            this.addChild(trainBt);

            var backBt = new ccui.Button(res.s_ui_training);
            // false，使用自定义size
            backBt.ignoreContentAdaptWithSize(false);
            backBt.setContentSize(cc.size(400, 80));
            backBt.setAnchorPoint(0.5, 0.5);
            backBt.setTitleText("返回");
            backBt.setTitleFontName("FZYHJW");
            backBt.setTitleFontSize(55);
            backBt.setTitleColor(cc.color(12, 59, 23));
            backBt.setZoomScale(0.3);
            backBt.setPressedActionEnabled(true);
            backBt.setPosition(cc.p(this.size.width / 2, trainBt.y - trainBt.getContentSize().height));
            this.addChild(backBt);
            var self = this;
            backBt.addClickEventListener(function () {
                cc.log("go back!");
                self.goBack();
            });

        },

        /**
         * 返回，收起菜单
         */
        goBack: function () {
            // 动画
            var up = cc.moveTo(1, this.size.width / 2, this.size.height * 2);
            var easing01 = up.easing(cc.easeBounceOut(0.5));
            this.runAction(easing01);
            cc.eventManager.removeListener(this._touchListener)
        },
        
        /**
         * 弹出菜单
         */
        goDown:function(){
            // 屏蔽触摸点击事件
            cc.eventManager.addListener(MENULAYOUT._touchListener,MENULAYOUT);
            // 动画
            cc.log("go down--");
            var down = cc.moveTo(2, MENULAYOUT.size.width / 2, MENULAYOUT.size.height / 2);
            var easing01 = down.easing(cc.easeElasticOut());
            MENULAYOUT.runAction(easing01);
        }

    });

//实例化
MenuLayout.createLayout = function () {
    var menuLayout = new MenuLayout();
    return menuLayout;
};