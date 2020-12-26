const puppeteer = require('puppeteer');
const host='http://bbs.shuiguobang.com';
function qiandao(){
	//'&inajax=1&ajaxtarget=JD_sign'
    r1= s.get(host+'/plugin.php?id=k_misign:sign&amp;operation=qiandao&amp;formhash=f2c8eb72&amp;format=empty&inajax=1&ajaxtarget=JD_sign')
    if (r1.ok)
        console.log("签到成功");
    else
        console.log("签到失败");
}
function getqdPH(){
	// # res=s.get(host+'/k_misign-sign.html')
	// # if res.ok:
	// # 	soup = BeautifulSoup(res.content,"html.parser")
	// pass
}
function qiandaoPage(){
    r1= s.get(host+'/k_misign-sign.html')
    if r1.ok:
        console.log("连接签到页成功")
    else:
        console.log("连接签到页失败")
}
function link(){
	r = s.get(host)
	console.log(dir(r))
	console.log(r.ok)
	if r.ok:
	    console.log("连接成功")
	    r1= s.post(host+'/member.php?mod=logging&action=login&loginsubmit=yes&infloat=yes&lssubmit=yes'
	        , data = {'username':'mahongquan',"password":'mhq730208'})
	    if r1.ok:
	        console.log("登录成功")
	        qiandaoPage()
	    else:
	        console.log("登录失败")
	else:
	    console.log("连接失败")
}
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(host);
  await page.screenshot({path: 'example.png'});
  await browser.close();
})();