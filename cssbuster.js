function changeImg(imgNumber)	{
    var myImages = ["/web/fanart/1.jpg", "/web/fanart/2.jpg", "/web/fanart/3.jpg", "/web/fanart/4.jpg", "/web/fanart/5.jpg", "/web/fanart/6.jpg", "/web/fanart/7.jpg", "/web/fanart/8.jpg", "/web/fanart/9.jpg", "/web/fanart/10.jpg", "/web/fanart/11.jpg", "/web/fanart/12.jpg", "/web/fanart/13.jpg", "/web/fanart/14.jpg", "/web/fanart/15.jpg", "/web/fanart/16.jpg", "/web/fanart/17.jpg", "/web/fanart/18.jpg", "/web/fanart/19.jpg", "/web/fanart/20.jpg", "/web/fanart/21.jpg", "/web/fanart/22.jpg", "/web/fanart/23.jpg", "/web/fanart/24.jpg", "/web/fanart/25.jpg", "/web/fanart/26.jpg", "/web/fanart/27.jpg", "/web/fanart/28.jpg", "/web/fanart/29.jpg", "/web/fanart/30.jpg"]; 
    var imgShown = document.body.style.backgroundImage;
    var newImgNumber =Math.floor(Math.random()*myImages.length);
    var sheet = window.document.styleSheets[0];
    sheet.insertRule('#loginPage { background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('+myImages[newImgNumber]+') !important; background-size: cover !important; }', sheet.cssRules.length)
}
window.onload=changeImg;
setInterval(function() {
changeImg('+newImgNumber+')
}, 10000);
