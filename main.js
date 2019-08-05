cc.game.onStart = function(){
    var sys = cc.sys;
    cc.view.enableRetina(sys.os === sys.OS_IOS ? true : false);

    cc.view.adjustViewPort(true);
    cc.view.setOrientation(cc.ORIENTATION_LANDSCAPE);

    // Setup the resolution policy and design resolution size
    cc.view.setDesignResolutionSize(1280, 720, cc.ResolutionPolicy.SHOW_ALL);

    // The game will be resized when browser size change
    cc.view.resizeWithBrowserSize(true);

    //load resources
    MyLoaderScene.preload(g_resources, function () {
        cc.director.runScene(new LoginScene());
    }, this);
};
cc.game.run();