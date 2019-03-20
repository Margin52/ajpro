$(function(){
	header_a_E_hover();
	header_a_cang_hover();
	header_a_phone_hover();
	add();
	addtit1();
	addtit2();
	addtit3();
	addtit4();
	navtext();
	// 数据库
	databaseku();
	go();
});
//header部分鼠标滑过E宠下拉菜单显示
function header_a_E_hover(){
	var chong;
	$(".header_a_E").mouseenter(function(){
		$(".header_a-E_chong_f").css({
			"display":"block"
		});
	});
	$(".header_a_E").mouseleave(function(){
		chong = setInterval(function(){
			$(".header_a-E_chong_f").css({
				"display":"none"
			});
			clearInterval(chong);
		},300)
	});
	$(".header_a-E_chong_f").mouseenter(function(){
		clearInterval(chong);
		$(".header_a-E_chong_f").css({
			"display":"block"
		});
	});
	$(".header_a-E_chong_f").mouseleave(function(){
		$(".header_a-E_chong_f").css({
			"display":"none"
		});
	});

}

function header_a_cang_hover(){
	var chong;
	$(".header_a_cang").mouseenter(function(){
		$(".header_a_cang_f").css({
			"display":"block"
		});
	});
	$(".header_a_cang").mouseleave(function(){
		chong = setInterval(function(){
			$(".header_a_cang_f").css({
				"display":"none"
			});
			clearInterval(chong);
		},300)
	});
	$(".header_a_cang_f").mouseenter(function(){
		clearInterval(chong);
		$(".header_a_cang_f").css({
			"display":"block"
		});
	});
	$(".header_a_cang_f").mouseleave(function(){
		$(".header_a_cang_f").css({
			"display":"none"
		});
	});
}
function header_a_phone_hover(){
	var chong;
	$(".header_a_phone").mouseenter(function(){
		$(".header_a_phone_f").css({
			"display":"block"
		});
	});
	$(".header_a_phone").mouseleave(function(){
		chong = setInterval(function(){
			$(".header_a_phone_f").css({
				"display":"none"
			});
			clearInterval(chong);
		},300)
	});
	$(".header_a_phone_f").mouseenter(function(){
		clearInterval(chong);
		$(".header_a_phone_f").css({
			"display":"block"
		});
	});
	$(".header_a_phone_f").mouseleave(function(){
		$(".header_a_phone_f").css({
			"display":"none"
		});
	});
}
//地址模块
function add(){
	var chong;
	$(".header_a_city").mouseenter(function(){
		$(".header_a_area").css({
			"display":"block"
		});
	});
	$(".header_a_city").mouseleave(function(){
		chong = setInterval(function(){
			$(".header_a_area").css({
				"display":"none"
			});
			clearInterval(chong);
		},300)
	});
	$(".header_a_area").mouseenter(function(){
		clearInterval(chong);
		$(".header_a_area").css({
			"display":"block"
		});
	});
	$(".header_a_area").mouseleave(function(){
		$(".header_a_area").css({
			"display":"none"
		});
	});
}
function addtit1(){
	$(".header_a_area_tit1").click(function(){
		$(".header_a_area_box1").css({
			"display":"block"
		});
		$(".header_a_area_box2").css({
			"display":"none"
		});
	});
}
function addtit2(){
	$(".header_a_area_tit3").click(function(){
		$(".header_a_area_box2").css({
			"display":"block"
		});
		$(".header_a_area_box1").css({
			"display":"none"
		});
	});
}
function addtit3(){
	$(".header_tianjing").click(function(){
		$(".header_a_area_box2").css({
			"display":"block"
		})
		$(".header_beijing_box").css({
			"display":"none"
		});
		$(".header_tianjin_box").css({
			"display":"block"
		});
		$(".header_a_area_box1").css({
			"display":"none"
		});
	});
}
function addtit4(){
	$(".header_beijing").click(function(){
		$(".header_a_area_box2").css({
			"display":"block"
		})
		$(".header_beijing_box").css({
			"display":"block"
		});
		$(".header_tianjin_box").css({
			"display":"none"
		});
		$(".header_a_area_box1").css({
			"display":"none"
		});
	});
}
// nav
// 搜索框鼠标进入文本提示消失
function navtext(){
	$("#nav_a_input").blur(function(){
		$("#nav_a_input")[0].value="伯纳天纯";
	});
	$("#nav_a_input").focus(function(){
		$("#nav_a_input")[0].value="";
	});
}

// 数据库
function databaseku(){
	let xml = new XMLHttpRequest();
		xml.open("get","../goodsAndShoppingCart/getGoodsList.php",true);
		xml.onreadystatechange = function(){
			if(xml.readyState == 4 && xml.status == 200){
				$(".list_one_img_box img")[0].src = JSON.parse(xml.responseText)[0].goodsImg;
				$(".list_one_p2_span1")[0].innerHTML= JSON.parse(xml.responseText)[0].beiyong1;
				$(".list_one_p2_span2")[0].innerHTML= JSON.parse(xml.responseText)[0].beiyong2;
				$(".list_one_phoone img")[0].src = JSON.parse(xml.responseText)[0].beiyong7;
				$(".list_one_tit")[0].innerHTML= JSON.parse(xml.responseText)[0].beiyong8;

				$(".list_one_img_box img")[1].src = JSON.parse(xml.responseText)[1].goodsImg;
				$(".list_one_p2_span1")[1].innerHTML= JSON.parse(xml.responseText)[1].beiyong1;
				$(".list_one_p2_span2")[1].innerHTML= JSON.parse(xml.responseText)[1].beiyong2;
				$(".list_one_phoone img")[1].src = JSON.parse(xml.responseText)[1].beiyong7;
				$(".list_one_tit")[1].innerHTML= JSON.parse(xml.responseText)[1].beiyong8;

				$(".list_one_img_box img")[2].src = JSON.parse(xml.responseText)[2].goodsImg;
				$(".list_one_p2_span1")[2].innerHTML= JSON.parse(xml.responseText)[2].beiyong1;
				$(".list_one_p2_span2")[2].innerHTML= JSON.parse(xml.responseText)[2].beiyong2;
				$(".list_one_photwo img")[2].src = JSON.parse(xml.responseText)[2].beiyong6;
				$(".list_one_phoone img")[2].src = JSON.parse(xml.responseText)[2].beiyong7;
				$(".list_one_tit")[2].innerHTML= JSON.parse(xml.responseText)[2].beiyong8;

				$(".list_one_img_box img")[3].src = JSON.parse(xml.responseText)[3].goodsImg;
				$(".list_one_p2_span1")[3].innerHTML= JSON.parse(xml.responseText)[3].beiyong1;
				$(".list_one_p2_span2")[3].innerHTML= JSON.parse(xml.responseText)[3].beiyong2;
				$(".list_one_phoone img")[3].src = JSON.parse(xml.responseText)[3].beiyong7;
				$(".list_one_tit")[3].innerHTML= JSON.parse(xml.responseText)[3].beiyong8;

				$(".list_one_img_box img")[4].src = JSON.parse(xml.responseText)[1].goodsImg;
				$(".list_one_p2_span1")[4].innerHTML= JSON.parse(xml.responseText)[1].beiyong1;
				$(".list_one_p2_span2")[4].innerHTML= JSON.parse(xml.responseText)[1].beiyong2;
				$(".list_one_photwo img")[4].src = JSON.parse(xml.responseText)[1].beiyong6;
				$(".list_one_phoone img")[4].src = JSON.parse(xml.responseText)[1].beiyong7;
				$(".list_one_tit")[4].innerHTML= JSON.parse(xml.responseText)[1].beiyong8;

				$(".list_one_img_box img")[5].src = JSON.parse(xml.responseText)[2].goodsImg;
				$(".list_one_p2_span1")[5].innerHTML= JSON.parse(xml.responseText)[2].beiyong1;
				$(".list_one_p2_span2")[5].innerHTML= JSON.parse(xml.responseText)[2].beiyong2;
				$(".list_one_phoone img")[5].src = JSON.parse(xml.responseText)[2].beiyong7;
				$(".list_one_tit")[5].innerHTML= JSON.parse(xml.responseText)[2].beiyong8;

				$(".list_one_img_box img")[6].src = JSON.parse(xml.responseText)[3].goodsImg;
				$(".list_one_p2_span1")[6].innerHTML= JSON.parse(xml.responseText)[3].beiyong1;
				$(".list_one_p2_span2")[6].innerHTML= JSON.parse(xml.responseText)[3].beiyong2;
				$(".list_one_photwo img")[6].src = JSON.parse(xml.responseText)[3].beiyong6;
				$(".list_one_phoone img")[6].src = JSON.parse(xml.responseText)[3].beiyong7;
				$(".list_one_tit")[6].innerHTML= JSON.parse(xml.responseText)[3].beiyong8;

				$(".list_one_img_box img")[7].src = JSON.parse(xml.responseText)[1].goodsImg;
				$(".list_one_p2_span1")[7].innerHTML= JSON.parse(xml.responseText)[1].beiyong1;
				$(".list_one_p2_span2")[7].innerHTML= JSON.parse(xml.responseText)[1].beiyong2;
				$(".list_one_photwo img")[7].src = JSON.parse(xml.responseText)[1].beiyong6;
				$(".list_one_phoone img")[7].src = JSON.parse(xml.responseText)[1].beiyong7;
				$(".list_one_tit")[7].innerHTML= JSON.parse(xml.responseText)[1].beiyong8;

				$(".list_one_img_box img")[8].src = JSON.parse(xml.responseText)[2].goodsImg;
				$(".list_one_p2_span1")[8].innerHTML= JSON.parse(xml.responseText)[2].beiyong1;
				$(".list_one_p2_span2")[8].innerHTML= JSON.parse(xml.responseText)[2].beiyong2;
				$(".list_one_phoone img")[8].src = JSON.parse(xml.responseText)[2].beiyong7;
				$(".list_one_tit")[8].innerHTML= JSON.parse(xml.responseText)[2].beiyong8;

				$(".list_one_img_box img")[9].src = JSON.parse(xml.responseText)[0].goodsImg;
				$(".list_one_p2_span1")[9].innerHTML= JSON.parse(xml.responseText)[0].beiyong1;
				$(".list_one_p2_span2")[9].innerHTML= JSON.parse(xml.responseText)[0].beiyong2;
				$(".list_one_photwo img")[9].src = JSON.parse(xml.responseText)[0].beiyong6;
				$(".list_one_phoone img")[9].src = JSON.parse(xml.responseText)[0].beiyong7;
				$(".list_one_tit")[9].innerHTML= JSON.parse(xml.responseText)[0].beiyong8;

				$(".list_one_img_box img")[10].src = JSON.parse(xml.responseText)[3].goodsImg;
				$(".list_one_p2_span1")[10].innerHTML= JSON.parse(xml.responseText)[3].beiyong1;
				$(".list_one_p2_span2")[10].innerHTML= JSON.parse(xml.responseText)[3].beiyong2;
				$(".list_one_photwo img")[10].src = JSON.parse(xml.responseText)[3].beiyong6;
				$(".list_one_phoone img")[10].src = JSON.parse(xml.responseText)[3].beiyong7;
				$(".list_one_tit")[10].innerHTML= JSON.parse(xml.responseText)[3].beiyong8;

				$(".list_one_img_box img")[11].src = JSON.parse(xml.responseText)[3].goodsImg;
				$(".list_one_p2_span1")[11].innerHTML= JSON.parse(xml.responseText)[3].beiyong1;
				$(".list_one_p2_span2")[11].innerHTML= JSON.parse(xml.responseText)[3].beiyong2;
				$(".list_one_photwo img")[11].src = JSON.parse(xml.responseText)[3].beiyong6;
				$(".list_one_phoone img")[11].src = JSON.parse(xml.responseText)[3].beiyong7;
				$(".list_one_tit")[11].innerHTML= JSON.parse(xml.responseText)[3].beiyong8;

				$(".list_one_img_box img")[12].src = JSON.parse(xml.responseText)[2].goodsImg;
				$(".list_one_p2_span1")[12].innerHTML= JSON.parse(xml.responseText)[2].beiyong1;
				$(".list_one_p2_span2")[12].innerHTML= JSON.parse(xml.responseText)[2].beiyong2;
				$(".list_one_phoone img")[12].src = JSON.parse(xml.responseText)[2].beiyong7;
				$(".list_one_tit")[12].innerHTML= JSON.parse(xml.responseText)[2].beiyong8;

				$(".list_one_img_box img")[13].src = JSON.parse(xml.responseText)[0].goodsImg;
				$(".list_one_p2_span1")[13].innerHTML= JSON.parse(xml.responseText)[0].beiyong1;
				$(".list_one_p2_span2")[13].innerHTML= JSON.parse(xml.responseText)[0].beiyong2;
				$(".list_one_phoone img")[13].src = JSON.parse(xml.responseText)[0].beiyong7;
				$(".list_one_tit")[13].innerHTML= JSON.parse(xml.responseText)[0].beiyong8;

				$(".list_one_img_box img")[14].src = JSON.parse(xml.responseText)[1].goodsImg;
				$(".list_one_p2_span1")[14].innerHTML= JSON.parse(xml.responseText)[1].beiyong1;
				$(".list_one_p2_span2")[14].innerHTML= JSON.parse(xml.responseText)[1].beiyong2;
				$(".list_one_photwo img")[14].src = JSON.parse(xml.responseText)[1].beiyong6;
				$(".list_one_phoone img")[14].src = JSON.parse(xml.responseText)[1].beiyong7;
				$(".list_one_tit")[14].innerHTML= JSON.parse(xml.responseText)[1].beiyong8;

				$(".list_one_img_box img")[15].src = JSON.parse(xml.responseText)[1].goodsImg;
				$(".list_one_p2_span1")[15].innerHTML= JSON.parse(xml.responseText)[1].beiyong1;
				$(".list_one_p2_span2")[15].innerHTML= JSON.parse(xml.responseText)[1].beiyong2;
				$(".list_one_phoone img")[15].src = JSON.parse(xml.responseText)[1].beiyong7;
				$(".list_one_tit")[15].innerHTML= JSON.parse(xml.responseText)[1].beiyong8;
			}
		}
		xml.send();
}

//尾部效果
function yidong(fu,zi,change1,speed1,change2,speed2){
	fu.mouseenter(function(){
		zi.animate(change1,speed1);
	});
	fu.mouseleave(function(){
		zi.animate(change2,speed2);
	});
}
function go(){
	yidong($(".ope_a_span1"),$(".ope_a_span1"),{
 		bottom:"10px"
 	},200,{
 		bottom:"0px"
 	},200);
 	yidong($(".ope_a_span2"),$(".ope_a_span2"),{
 		bottom:"10px"
 	},200,{
 		bottom:"0px"
    },200);
 	yidong($(".ope_a_span3"),$(".ope_a_span3"),{
 		bottom:"10px"
 	},200,{
 		bottom:"0px"
 	},200);
 	yidong($(".ope_a_span4"),$(".ope_a_span4"),{
 		bottom:"10px"
 	},200,{
 		bottom:"0px"
 	},200);
 	yidong($(".ope_a_span5"),$(".ope_a_span5"),{
 		bottom:"10px"
 	},200,{
 		bottom:"0px"
 	},200);
 	yidong($(".ope_a_span6"),$(".ope_a_span6"),{
 		bottom:"10px"
 	},200,{
 		bottom:"0px"
    },200);
}