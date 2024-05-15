import request from "./request";

//* 获取首页数据
export const getHomePageData = (params) =>
  request.get("/homepage/block/page", { params });

// * 获取首页图标
export const getIcon = () => request.post("homepage/dragon/ball");

// *获取每日运势
export const getfortune = (startTime, endTime) =>
  request.get(`calendar?startTime=${startTime}&endTime=${endTime}`);

// *搜索页
export const getsearch = () => request.get("search/default");

// *搜索框搜索的内容
export const getsearchlist = () => request.get("toplist/detail");

// *飙升榜
export const SoarLeaderboard = ({ numid, num }) =>
  request.get(`/playlist/detail?id=${numid}&limit=${num}`);

// *搜索
export const getlist = (keywords) =>
  request.post(`/cloudsearch?keywords=${keywords}`);

// *搜索页中猜你喜欢
export const getYouLove = () => request.get("/search/hot/detail");

//*mv 内地视频
export const getMVImg = ({ num, opction }) =>
  request.get(`/top/mv?limlt=${num}&area=${opction}`);

// *mv视频
export const getmv = ({ id }) => request.get(`/mv/url?id=${id}`);

// * mv视频的详细雷荣

export const getmvparticular = ({ id }) => request.get(`/mv/detail?mvid=${id}`);
// *mv视频点赞
export const getmvparticulardata = ({ id }) =>
  request.get(`/mv/detail/info?mvid=${id}`);

//音乐的详细数据
export const museicdata = ({ numid }) =>
  request.get(`/playlist/detail?id=${numid}`);
// 音乐的列表数据
export const museicdatalist = ({ numid }) =>
  request.get(`/playlist/track/all?id=${numid}`);
// 音乐新数据
export const museinewlist = ({ numid }) =>
  request.get(`/related/playlist?id=${numid}`);

// 音乐播放的数据
export const getmuseicdata = ({ numid }) =>
  request.get(`/song/detail?ids=${numid}`);
// 音乐音频
export const getauto = ({ numid }) =>
  request.get(`/song/url/v1?id=${numid}&level=standard`);

// 歌词

export const getlyric = ({ id }) => request.get(`/lyric?id=${id}`);
// key
export const getkey = () => request.get(`/login/qr/key`);

// 二维码图片
export const getkeyimg = ({ key }) =>
  request.get(`/login/qr/create?key=${key}&qrimg=1`);

export const getusedata = ({ id, cookie }) =>
  request.get(`/user/playlist?uid=${id}&cookie=${cookie}`);

// /login/qr/check?key=3bd9a91c-257a-4613-a413-11c86f71bec9&timestamp=1715598114988&
// /login/qr/check?key=xxx

// 二维码登录状态
export const getstate = ({ key, time }) =>
  request.get(`/login/qr/check?key=${key}&timestamp=${time}`);

export const getCookie = ({ cookie }) =>
  request.get(`/user/account?cookie=${cookie}`);

// 获取用户信息 , 歌单，收藏，mv, dj 数量
export const getUser = () => request.get(`/user/level`);
