
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