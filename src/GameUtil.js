var Def = {
    windowWidth:function(){//基础窗口宽度1280
        return 1280;
    },	
    windowHeight:function(){//基础窗口高度720
        return 720;
    },	
    windowSize:function(){ //窗口大小
        return cc.size(Def.windowWidth(), Def.windowHeight());
    },
    platform:function(){ //获取平台编号 cc.sys.OS_ANDROID		string	
        return cc.sys.os;
    }
};



/**
 * 游戏音效
 */
function Music(){};
Music.isMusic = true;

/**
 * 背景音乐
 */
Music.playBGM = function()
{
	if ( !this.isMusic ){return;}
	cc.audioEngine.playMusic(res.s_bgm_main, true);
};