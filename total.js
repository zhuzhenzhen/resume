// GoTop回到页面开始地方

var getDiv=document.getElementById('returntop');
var showheight=350;//滚动条拉到什么高度时，显示返回图标
getDiv.onclick=function(){
    window.scrollTo(0,0);
}

window.onscroll=function(){
    if(document.documentElement.scrollTop>=showheight){
        getDiv.style.display="block";
    }else if(document.body.scrollTop>=showheight){
        getDiv.style.display="block";
    }else{
        getDiv.style.display="none";
    }
}
function getWinSize(){
    var winHeight=window.innerHeight,winWidth=window.innerWidth;
    if(document.documentElement.clientHeight){
        winHeight=document.documentElement.clientHeight;
        winWidth=document.documentElement.clientWidth;
    }else{
        winHeight=document.body.clientHeight;
        winWidth=document.body.clientWidth;
    }
    var height=winHeight*0.4;
    var width=(winWidth-990)/2+1010;
    getDiv.style.top=height+"px";
    getDiv.style.left=width+"px";
}
getWinSize();


//flink改变颜色
                      
var colorarray= new Array('#9cf','#f9c','#9fc','#c9f','#cf9','#fc9','#acfc5d','#5bdae2','#f79a55','#f676c7','#b876f6','#f676be','#f6a076');
var flink=[
            {link:'http://www.百度.com/',title:'百度搜索',text:'百度搜索'},
            {link:'http://www.cnblogs.com/',title:'博客园',text:'博客园'},
            {link:'#',title:'小强博客',text:'小强博客'},
            {link:'#',title:'Joy chao',text:'Joy chao'},
            {link:'http://owncloudtech.sinaapp.com/',title:'云计算专家网',text:'云计算专家网'},
            {link:'#',title:'明静博客',text:'明静博客'}
        ];
    //用打乱数组排序的函数
function randomsort(a, b) {
    //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
    return Math.random()>0.5 ? -1 : 1;
}

flink.sort(randomsort);
var colorlenth=colorarray.length;
var fstr='';
var randcolor='';

$(flink).each(function(i) {
    randcolor=colorarray[parseInt((Math.random()*colorlenth))];
    fstr+='<div class="flinks" style="background:'+randcolor+'">' +'<a href="'+flink[i].link+'" title="'+flink[i].title+'" target="_blank">' +flink[i].text +'</a>' +'</div>';
});

$('#flinks').append(fstr);

 //照片墙效果
    var curIndex=0;
    var arr=new Array();
    arr[0]="img/a.jpg";
    arr[1]="img/b.jpg";
    arr[2]="img/c.jpg";
    arr[3]="img/d.jpg";
    arr[4]="img/e.jpg";
    setInterval(changeImg,3000);
    function changeImg(){
        var obj=document.getElementById("scroll");
        if (curIndex==arr.length-1) 
        {
            curIndex=0;
        }
        else
        {
            curIndex+=1;
        }
       obj.style.backgroundImage="url("+arr[curIndex]+")";
    };
    $(function(){
        $("#top img").mouseover(function(){
            $(".top").stop().animate({bottom:"0"},700);
        }).mouseout(function(){
            $(".top").stop().animate({bottom:"-70"},700);
        })
    })


