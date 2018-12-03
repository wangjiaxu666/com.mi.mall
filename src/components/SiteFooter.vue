<template>
    <div class="site-footer">
      <div class="container">
        <div class="footer-service">
          <ul class="list-service clearfix">
            <li><a><img src="../../static/maintain1.png" width="23" height="23"/><span>预约维修服务</span></a></li>
            <li><a><img src="../../static/7.png" width="23" height="23"/><span>7天无理由退货</span></a></li>
            <li><a><img src="../../static/15.png" width="23" height="23"/><span>15天免费换货</span></a></li>
            <li><a><img src="../../static/li-wu-xiang-red.png" width="23" height="23"/><span>满150元包邮</span></a></li>
            <li><a><img src="../../static/landmark.png" width="23" height="23"/><span>520余家售后网点</span></a></li>
          </ul>
        </div>
        <div class="footer-links clearfix">
          <dl class="col-links col-links-first">
            <dt>帮助中心</dt>
            <dd><a>账户管理</a></dd>
            <dd><a>购物指南</a></dd>
            <dd><a>订单操作</a></dd>
          </dl>
          <dl class="col-links col-links-first">
            <dt>服务支持</dt>
            <dd><a>售后政策</a></dd>
            <dd><a>自助服务</a></dd>
            <dd><a>相关下载</a></dd>
          </dl>
          <dl class="col-links col-links-first">
            <dt>线下门店</dt>
            <dd><a>小米之家</a></dd>
            <dd><a>服务网点</a></dd>
            <dd><a>授权体验店</a></dd>
          </dl>
          <dl class="col-links col-links-first">
            <dt>关于小米</dt>
            <dd><a>了解小米</a></dd>
            <dd><a>加入小米</a></dd>
            <dd><a>投资者关系</a></dd>
          </dl>
          <dl class="col-links col-links-first">
            <dt>关注我们</dt>
            <dd><a>新浪微博</a></dd>
            <dd><a>官方微信</a></dd>
            <dd><a>联系我们</a></dd>
          </dl>
          <dl class="col-links col-links-first">
            <dt>特色服务</dt>
            <dd><a>F 码通道</a></dd>
            <dd><a>礼物码</a></dd>
            <dd><a>防伪查询</a></dd>
          </dl>
          <div class="col-contact">
            <p class="phone">400-100-5678</p>
            <p> 周一至周日 8:00-18:00 <br>（仅收市话费）</p>
            <a class="btn btn-line-primary btn-small"><i class="fa fa-comment-dots"></i>联系客服</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "site-footer"
    }
</script>

<style scoped>
  .site-footer .footer-service {
    padding: 27px 0;
    border-bottom: 1px solid #e0e0e0;
  }
  .site-footer .list-service {
    list-style-type: none;
    padding: 25px 0;
  }
  .clearfix {
    padding-top: 35px;
    *zoom: 1;
  }
  .site-footer .list-service li {
    float: left;
    width: 19.8%;
    height: 25px;
    border-left: 1px solid #e0e0e0;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
  }
  .site-footer .list-service li:first-child {
    border-left: 0;
  }
  .site-footer .list-service a {
    color: #515151;
    -webkit-transition: color .2s;
    transition: color .2s;
  }
  .site-footer .list-service a span {
    position: relative;
    top: -5px;
  }
  .site-footer .list-service a img {
    margin-right: 3px;
  }
  .site-footer .footer-links {
    padding: 40px 0;
    height: 200px;
  }
  .site-footer .footer-links .col-links {
    /*position: relative;
    right: 0px;*/
    float: left;
    width: 160px;
    height: 112px;
    margin: 0;
  }
  .site-footer .footer-links .col-links dt {
    margin: -1px 0 26px;
    font-size: 14px;
    line-height: 1.25;
    color: #424242;
  }
  .site-footer .footer-links .col-links dd {
    margin: 10px 0 0;
    font-size: 12px;
  }
  .site-footer .footer-links .col-links a {
    color: #757575;
  }
  .site-footer .footer-links .col-links a:hover {
    color: #ff6700;
  }
  .site-footer .footer-links .col-contact {
    float: right;
    width: 251px;
    height: 112px;
    border-left: 1px solid #e0e0e0;
    text-align: center;
    color: #616161;
  }
  .site-footer .footer-links .col-contact .phone {
    margin: 0 0 5px;
    font-size: 22px;
    line-height: 1;
    color: #ff6700;
  }
  .site-footer .footer-links .col-contact p {
    margin: 0 0 16px;
    font-size: 12px;
  }
  .btn-line-primary {
    border-color: #ff6700;
    background: #fff;
    color: #ff6700;
  }
  .btn-small {
    display: inline-block;
    width: 118px;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
    border: 1px solid #ff6700;
  }
  .btn-small i{
    margin-right: 3px;
  }
  .btn-line-primary:hover {
    color: #fff;
    background-color: #f25807;
    border-color: #f25807;
  }
</style>
