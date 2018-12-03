<template>
    <div class="index-content">
      <div class="container">
        <div class="home-hero-container container">
          <div class="home-hero">
            <div class="home-hero-slider">
              <div class="ui-wrapper" style="max-width: 100%;">
                <div class="site-category">
                  <ul class="site-category-list clearfix">
                    <li class="category-item" @mouseover="menuMouse(1)" @mouseout="menuMouse(0)">
                      <a class="title">
                        手机 电话卡
                        <i class="fa fa-angle-right"></i>
                      </a>
                      <div v-show="showNum == 1" class="children clearfix children-col-4">
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3-1</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="category-item" @mouseover="menuMouse(2)" @mouseout="menuMouse(0)">
                      <a class="title">
                        电视 盒子
                        <i class="fa fa-angle-right"></i>
                      </a>
                      <div v-show="showNum == 2" class="children clearfix children-col-4">
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3-2</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="category-item" @mouseover="menuMouse(3)" @mouseout="menuMouse(0)">
                      <a class="title">
                        笔记本 平板
                        <i class="fa fa-angle-right"></i>
                      </a>
                      <div v-show="showNum == 3" class="children clearfix children-col-4">
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3-3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="category-item" @mouseover="menuMouse(4)" @mouseout="menuMouse(0)">
                      <a class="title">
                        家电 插线板
                        <i class="fa fa-angle-right"></i>
                      </a>
                      <div v-show="showNum == 4" class="children clearfix children-col-4">
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3-4</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="category-item" @mouseover="menuMouse(5)" @mouseout="menuMouse(0)">
                      <a class="title">
                        出行 穿戴
                        <i class="fa fa-angle-right"></i>
                      </a>
                      <div v-show="showNum == 5" class="children clearfix children-col-4">
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3-5</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="category-item" @mouseover="menuMouse(6)" @mouseout="menuMouse(0)">
                      <a class="title">
                        智能 路由器
                        <i class="fa fa-angle-right"></i>
                      </a>
                      <div v-show="showNum == 6" class="children clearfix children-col-4">
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3-6</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="category-item" @mouseover="menuMouse(7)" @mouseout="menuMouse(0)">
                      <a class="title">
                        电源 配件
                        <i class="fa fa-angle-right"></i>
                      </a>
                      <div v-show="showNum == 7" class="children clearfix children-col-4">
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3-7</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="category-item" @mouseover="menuMouse(8)" @mouseout="menuMouse(0)">
                      <a class="title">
                        健康 儿童
                        <i class="fa fa-angle-right"></i>
                      </a>
                      <div v-show="showNum == 8" class="children clearfix children-col-4">
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3-8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="category-item" @mouseover="menuMouse(9)" @mouseout="menuMouse(0)">
                      <a class="title">
                        耳机 音响
                        <i class="fa fa-angle-right"></i>
                      </a>
                      <div v-show="showNum == 9" class="children clearfix children-col-4">
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3-9</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="category-item" @mouseover="menuMouse(10)" @mouseout="menuMouse(0)">
                      <a class="title">
                        生活 箱包
                        <i class="fa fa-angle-right"></i>
                      </a>
                      <div v-show="showNum == 10" class="children clearfix children-col-4">
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3-10</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="children-list children-list-col children-list-col-1">
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix3-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/qingchun-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 青春版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/pingmu-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 屏幕指纹版</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/m8se-80.png" class="thumb" width="40" height="40">
                              <span class="text">小米8 SE</span>
                            </a>
                          </li>
                          <li>
                            <a class="link">
                              <img src="../../../static/menu/1/mix2s80-80white.png" class="thumb" width="40" height="40">
                              <span class="text">小米MIX 2S</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <Carousel ref="carousel" :height="460" class="site-carousel" :autoplay-speed="3000" v-model="carouselValue" loop autoplay>
                  <CarouselItem>
                    <img src="../../../static/Carousel/xmad_3.jpg">
                  </CarouselItem>
                  <CarouselItem>
                    <img src="../../../static/Carousel/xmad_2.jpg">
                  </CarouselItem>
                  <CarouselItem>
                    <img src="../../../static/Carousel/xmad_1.jpg">
                  </CarouselItem>
                  <CarouselItem>
                    <img src="../../../static/Carousel/xmad_4.jpg">
                  </CarouselItem>
                  <CarouselItem>
                    <img src="../../../static/Carousel/xmad_5.jpg">
                  </CarouselItem>
                </Carousel>
              </div>
            </div>
            <div class="home-hero-sub row"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          carouselValue:0,
          showNum:0
        }
      },
      mounted (){
          this.initData();
      },
      methods:{
        initData(){
          $('.site-carousel').children('button:first-child').css('left','250px');
        },
        menuMouse(index){
          this.showNum = index;
        }
      }
    }
</script>

<style scoped>
  .home-hero-container {
    position: relative;
    z-index: 10;
  }
  .home-hero {
    position: relative;
    margin-bottom: 26px;
  }
  .home-hero-slider {
    position: relative;
    height: 460px;
    overflow: hidden;
    _zoom: 1;
  }
  .ui-wrapper {
    position: relative;
    margin: 0;
    padding: 0;
    zoom: 1;
  }
  .site-category {
    display: inline-block;
    position: absolute;
    z-index: 21;
    width: 234px;
    height: 460px;
    font-size: 14px;
    background: rgba(0,0,0,0.5);
  }
  .site-category .site-category-list .category-item:hover{
    background-color: #ff6700;
  }
  .site-category-list {
    height: 418px;
    margin: 0;
    padding: 20px 0;
    list-style-type: none;
  /*  border: 1px solid #ff6700;*/
    color: #424242;
    background: rgba(0,0,0,0);
  }
  .site-category-list .title {
    color: #fff;
  }
  .site-category-list .title {
    position: relative;
    display: block;
    padding-left: 30px;
    height: 42px;
    line-height: 42px;
    color: rgba(255,255,255,0.8);
  }
  .site-category-list .title i {
    color: rgba(255,255,255,0.5);
    position: relative;
    right: 30px;
    line-height: 42px;
    float: right;
  }
  .site-carousel img{
    height: 460px;
  }
  /*菜单隐藏的div*/
  .site-category-list .children-col-4 {
    width: 992px;
  }
  .site-category-list .children {
    display: block;
    position: absolute;
    left: 234px;
    top: 0;
    z-index: 24;
    height: 461px;
    border: 1px solid #e0e0e0;
    border-left: 0;
    background: #fff;
    -webkit-box-shadow: 0 8px 16px rgba(0,0,0,0.18);
    box-shadow: 0 8px 16px rgba(0,0,0,0.18);
  }
  .site-category-list .children-col-4 .children-list-col {
    width: 248px;
  }
  .site-category-list .children-list-col {
    float: left;
    width: 265px;
  }
  .site-category-list .children-list {
    height: 458px;
    margin: 0;
    padding: 2px 0;
    list-style-type: none;
  }
  .site-category-list .children-list li {
    position: relative;
    float: left;
    width: 265px;
    height: 76px;
  }
  .site-category-list .children-list .link {
    display: block;
    padding: 18px 20px;
    line-height: 40px;
    color: #333;
    -webkit-transition: color .2s;
    transition: color .2s;
  }
  .site-category-list .children-list .thumb {
    margin-right: 12px;
    vertical-align: middle;
  }
  .site-category-list .children-list .text {
    line-height: 40px;
  }
</style>
