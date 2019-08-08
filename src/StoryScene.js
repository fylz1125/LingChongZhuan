var StoryScene = ccui.Layout.extend({
    ctor:function(){
        this._super();
        this.size = Def.windowSize();
        this.setSize(this.size);
        

        
    },
    initWithChapter:function(chapterName){

    }
});

StoryScene.createScene=function(){
    var storyScene = new StoryScene();
    var scene = cc.Scene.create();
    scene.addChild(storyScene);
    return scene;
}