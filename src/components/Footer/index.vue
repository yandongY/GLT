<template>
    <div class="footer">
        <div class="company-info">
            <img src="public/img/logo.png" alt="CoinHot">
            <span> 2019 GrandLinkToken All Rights Reserved. </span>
        </div>
        <div class="links">
            <a href="/about/">关于我们</a>
            <a href="https://help.coinhot.io/hc/zh-cn/articles/115004744413-发布广告的费率是多少-">费率说明</a>
            <a href="https://help.coinhot.io/hc/zh-cn/categories/115000472874-常见问题">常见问题</a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
    display: flex;
    margin-top: 101px;
    height: 101px;
    clear: both;
    background: #606060;
    color: #808c9b;
}
.footer .company-info {
    width: 50%;
    height: 101px;
}
.company-info img {
    margin-left: 42px;
    margin-top: 23px;
    height: 36px;
}
.company-info span {
    display: inline-block;
    width: 100%;
    color: #d7d7d7;
    font-size: 13px;
    margin-left: 42px;
    margin-top: 11px;
}
.footer .links {
    width: 50%;
    height: 16px;
    margin-top: 42px;
    text-align: right;
    padding-right: 42px;
}
.footer .links>a {
    color: #d7d7d7;
    font-size: 14px;
    height: 14px;
    line-height: 14px;
    margin: 0 14px;
}
.language-select {
    display: inline-block;
    margin-left: 12px;
}
.btn-group, .btn-group-vertical {
    position: relative;
    display: inline-block;
    vertical-align: middle;
}
</style>
