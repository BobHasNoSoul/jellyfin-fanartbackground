function changeImg(imgNumber)	{
    var myImages = ["/web/jellyfin-fanartbackground-main/1.jpg", "/web/jellyfin-fanartbackground-main/2.jpg", "/web/jellyfin-fanartbackground-main/3.jpg", "/web/jellyfin-fanartbackground-main/4.jpg", "/web/jellyfin-fanartbackground-main/5.jpg", "/web/jellyfin-fanartbackground-main/6.jpg", "/web/jellyfin-fanartbackground-main/7.jpg", "/web/jellyfin-fanartbackground-main/8.jpg", "/web/jellyfin-fanartbackground-main/9.jpg", "/web/jellyfin-fanartbackground-main/10.jpg", "/web/jellyfin-fanartbackground-main/11.jpg", "/web/jellyfin-fanartbackground-main/12.jpg", "/web/jellyfin-fanartbackground-main/13.jpg", "/web/jellyfin-fanartbackground-main/14.jpg", "/web/jellyfin-fanartbackground-main/15.jpg", "/web/jellyfin-fanartbackground-main/16.jpg", "/web/jellyfin-fanartbackground-main/17.jpg", "/web/jellyfin-fanartbackground-main/18.jpg", "/web/jellyfin-fanartbackground-main/19.jpg", "/web/jellyfin-fanartbackground-main/20.jpg", "/web/jellyfin-fanartbackground-main/21.jpg", "/web/jellyfin-fanartbackground-main/22.jpg", "/web/jellyfin-fanartbackground-main/23.jpg", "/web/jellyfin-fanartbackground-main/24.jpg", "/web/jellyfin-fanartbackground-main/25.jpg", "/web/jellyfin-fanartbackground-main/26.jpg", "/web/jellyfin-fanartbackground-main/27.jpg", "/web/jellyfin-fanartbackground-main/28.jpg", "/web/jellyfin-fanartbackground-main/29.jpg", "/web/jellyfin-fanartbackground-main/30.jpg"]; 
    var imgShown = document.body.style.backgroundImage;
    var newImgNumber =Math.floor(Math.random()*myImages.length);
    var sheet = window.document.styleSheets[0];
    sheet.insertRule('#loginPage { background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('+myImages[newImgNumber]+') !important; background-size: cover !important; }', sheet.cssRules.length)
}
window.onload=changeImg;
setInterval(function() {
changeImg('+newImgNumber+')
}, 10000);
