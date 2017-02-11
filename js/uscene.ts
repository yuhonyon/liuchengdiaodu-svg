/**
 * 流程图 svg版
 * 余方杨
 * 975057282@qq.com
 * 2016.8.24
 */
/**
 * 绘图版
 */
class uscene {
	draw:Object;
	defaultPath: Object;
	defaultJson: Object;
	constructor() {
		/**
		 * [defaultPath 默认节点内容图标]
		 * @type {Object}
		 */
		this.defaultPath = {
			ok: 'M5,18l20.002,20.003l-5,5L0,23L5,18z M14.998,38.003L45,8l5,5L19.998,43.001L14.998,38.003z',
		}
		/**
		 * [defaultJson 默认画图json]
		 * @type {Object}
		 */
		this.defaultJson = {
			setting: {
				zoom: 1,
				svgWidth: 1000,
				svgHeight: 1000,
				draggable: true,
				editing: true,
				multiLine: false,
			},
			object: {
				left: 440,
				top: 140,
				id: null,
				container: {
					type: "circle",
					fill: "#a7acb8",
					'fill-opacity': null,
					stroke: null,
					'stroke-width': null,
					width: 30,
					height: 30,

				},
				content: {
					type: "path",
					source: 'ok',
					fill: "#fff",
					'fill-opacity': null,
					scaleX: .3,
					scaleY: .3,


				},
				title: {
					text: "节点名称",
					style: {
						fill: "#666",
						"text-anchor": "middle",
						size: 12
					}
				}

			},
			line: {
				array: null,
				sNode: "",
				eNode: "",
				id: "",
				type: "",
				arrow: true,
				animation: false,
				style: {
					stroke: '#999',
					'stroke-width': 1,
					'stroke-dasharray': null,
					fill: "none"
				},
				title: {
					text: "线条名称",
					style: {
						fill: "#999",
						"text-anchor": "middle",
						size: 12
					}
				}

			}

		}


		/**
		 * [setting 画布设置]
		 * @type {Object}
		 */
		this.setting = {
			zoom: 1,
			svgWidth: "100%",
			svgHeight: "100%",
			draggable: true,
			editing: true,
			multiLine: false
		};

	};


	/**
	 * [init 入口]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:02:50+0800
	 * @param    {[type]}                 id [dom id]
	 */
	init(id){
		this.draw = SVG(id).size('100%', '100%')
		this.spof();

	
		this.draw.origin = this;
		this.drawLine();
		this.drawBrokenLine();

	
		
	}




	/**
	 * [resize 绘图板尺寸重置&&缩放]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:03:36+0800
	 * @param    {[type]}                 svgWidth  [绘图板宽]
	 * @param    {[type]}                 svgHeight [绘图板高]
	 * @param    {[type]}                 zoom      [绘图板缩放比例]
	 */
	resize(svgWidth, svgHeight,zoom) {

		if (arguments.length==2){
	
			zoom = this.setting.zoom;
		} else if (arguments.length==1){
			zoom = svgWidth;
			svgWidth = this.setting.svgWidth;
			svgHeight = this.setting.svgHeight;
		}
		else if (arguments.length==0){
			zoom = this.setting.zoom;
			svgWidth = this.setting.svgWidth;
			svgHeight = this.setting.svgHeight;
		}

		SVG.zoom = zoom;
		$(this.draw.node).css({ "transform": "scale(" + zoom + "," + zoom + ")", "-webkit-transform": "scale(" + zoom + "," + zoom + ")", "-ms-transform": "scale(" + zoom + "," + zoom + ")", "-moz-transform": "scale(" + zoom + "," + zoom + ")" })
		this.draw.size(svgWidth, svgHeight);

		if (typeof svgWidth == 'number' || !/%/.test(svgWidth)){
			$(this.draw.node).parent().css('width',svgWidth*zoom);
		}else{
			$(this.draw.node).parent().css('width', $(this.draw.node).parent().parent().innerWidth() * zoom * parseInt(svgWidth) / 100);
		}

		if (typeof svgHeight == 'number' || !/%/.test(svgHeight)) {
			$(this.draw.node).parent().css('height', svgHeight * zoom);
		}else{
			$(this.draw.node).parent().css('height', $(this.draw.node).parent().parent().innerHeight() * zoom * parseInt(svgHeight) / 100);
		}
	}

	/**
	 * [clean 清空绘图板]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:04:52+0800
	 */
	clean(){
		$(this.draw._defs.node).html("").siblings().remove();
	}

	/**
	 * [creatMarker 创建标记]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:05:13+0800
	 * @param    {[type]}                 option [标记option]
	 */
	creatMarker(option){
		return new marker(this, option).marker;
	}

	/**
	 * [creatNode 创建节点]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:05:33+0800
	 * @param    {[type]}                 option [节点option]
	 */
	creatNode(option) {
		return new node(this,option)
	
	}

	/**
	 * [creatLine 创建直线]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:06:04+0800
	 * @param    {[type]}                 option [直线option]
	 */
	creatLine(option) {
		return new line(this, option);
	}


	/**
	 * [creatBrokenLine 创建折线]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:06:24+0800
	 * @param    {[type]}                 option [折线option]
	 */
	creatBrokenLine(option) {
		return new brokenLine(this, option);
	}
	

	/**
	 * [spof 校正像素偏移]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:06:55+0800
	 */
	spof(){
		this.draw.spof();
		SVG.on(window, 'resize', () => { this.draw.spof()});
	}



	get(id){
		return SVG.get(id);
	}



	select(selectors) {
		return SVG.select(selectors).members;
	}


	/**
	 * [setting 设置绘图板属性]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:07:48+0800
	 * @param    {[type]}                 option [绘图板option]
	 */
	resetting(option){
		
		var setting = option;

		if (setting.draggable!=undefined && setting.draggable != this.setting.draggable){
			$('g[id^="node"]').each(function() {
				this.instance.draggable(setting.draggable);
			})
		}

		


		this.setting = $.extend(true, {}, this.setting, setting);

		this.resize(this.setting.svgWidth, this.setting.svgHeight, this.setting.zoom);
	}



	/**
	 * [drawLine 鼠标画直线]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:08:17+0800
	 */
	drawLine() {
		
		var _this = this;
		var interim;
		var offset;
		var sNode;
		var eNode;

		/**
		 * [function 入口]
		 * @Author   yfy
		 * @DateTime 2016-08-22T16:08:47+0800
		 * @param    {[boolean]}                 state [绑定/解绑画直线]
		 */
		this.drawLine.init = function(state){
	
			state = typeof state === 'undefined' ? true : state;
			_this.resetting({ draggable: !state });
			if (state) {
				$(document).off("mousedown", "g[id^='node']", _this.drawLine.drawLineStart);
				$(document).on("mousedown", "g[id^='node']", _this.drawLine.drawLineStart);
			}
			else {
				$(document).off("mousedown", "g[id^='node']", _this.drawLine.drawLineStart);
			}
		}

		/**
		 * [function 鼠标绘画开始]
		 * @Author   yfy
		 * @DateTime 2016-08-22T16:10:16+0800
		 * @param    {[type]}                 e [description]
		 */
		this.drawLine.drawLineStart = function(e) {
	
			var startpoint = this.instance.container.tbox();
			sNode = this.instance;
			offset = $(_this.draw.node).offset();
			interim = _this.draw.polyline([[startpoint.cx, startpoint.cy],[startpoint.cx, startpoint.cy]])
				.attr(_this.defaultJson.line.style);
			interim.arrowMarker = _this.draw.marker(10, 10, function(add) {
				add.polyline([[0, 0], [0, 10], [8, 5]]).fill(_this.defaultJson.line.style.stroke)
			})
			interim.marker('end', interim.arrowMarker)
			interim.style("pointer-events", "none");
			$(document).on("mousemove", _this.drawLine.drawLineProcess);
			$(document).on("mouseup", _this.drawLine.drawLineEnd);
			$(document).off("mousedown", "g[id^='node']", _this.drawLine.drawLineStart);
		}


		/**
		 * [function 鼠标绘画中]
		 * @Author   yfy
		 * @DateTime 2016-08-22T16:10:36+0800
		 * @param    {[type]}                 e [description]
		 */
		this.drawLine.drawLineProcess = function(e) {
	
			interim._array.value[1][0] = (e.clientX - offset.left) * (1/_this.setting.zoom;)
			interim._array.value[1][1] = (e.clientY - offset.top) * (1/_this.setting.zoom;)
			interim.plot(interim._array.value)
		}


		/**
		 * [function 鼠标绘画结束]
		 * @Author   yfy
		 * @DateTime 2016-08-22T16:10:49+0800
		 * @param    {[type]}                 e [description]
		 */
		this.drawLine.drawLineEnd = function(e) {
			$(document).off("mousemove", _this.drawLine.drawLineProcess);
			$(document).off("mouseup", _this.drawLine.drawLineEnd);
			var target = $(e.target).closest("g[id^='node']");
			if (target[0] && target[0].instance.id != sNode.id) {
				eNode = target[0].instance;
				_this.drawLine.creatLine(sNode, eNode)
			}
			interim.arrowMarker.remove();
			interim.remove();
			$(document).on("mousedown", "g[id^='node']", _this.drawLine.drawLineStart);
		}


		/**
		 * [function 画直线,计算直线option]
		 * @Author   yfy
		 * @DateTime 2016-08-22T16:11:08+0800
		 * @param    {[type]}                 sNode [直线开始节点]
		 * @param    {[type]}                 eNode [直线结束节点]
		 */
		this.drawLine.creatLine = function(sNode, eNode) {
			var option = $.extend(true, {}, _this.defaultJson.line);
			sNodeTbox = sNode.container.tbox();
			eNodeTbox = eNode.container.tbox();

			

			var distance = _this.lineDistance(sNode.container.type, eNode.container.type, sNodeTbox, eNodeTbox);
			var array = _this.lineDistancePoint(distance.sDistance, distance.eDistance, sNodeTbox.cx, sNodeTbox.cy, eNodeTbox.cx, eNodeTbox.cy);

			option.sNode = sNode.id;
			option.eNode = eNode.id;
			option.type = "straightLine";
			option.id = "line_" + option.sNode + "_" + option.eNode;
			var sameLine = $('polyline[id^="line_' + option.sNode + '_' + option.eNode + '"]').length;
			if (sameLine){
				if (!_this.setting.multiLine){
					return false;
				}
				
				option.id += "_" + sameLine;
			}
			option.array = array;
			_this.creatLine(option)

		}

		


	}




	/**
	 * [drawBrokenLine 绘制折线]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:12:43+0800
	 */
	drawBrokenLine() {
		
		var _this = this;
		var interim;
		var offset;
		var sNode;
		var eNode;
		var array = [];

		/**
		 * [function 入口]
		 * @Author   yfy
		 * @DateTime 2016-08-22T16:12:56+0800
		 * @param    {[boolean]}                 state [绑定/解绑绘制]
		 */
		this.drawBrokenLine.init = function(state) {
			state = typeof state === 'undefined' ? true : state;
			_this.resetting({ draggable: !state });
			if (state) {
				$(document).off("mousedown", "g[id^='node']", _this.drawBrokenLine.drawLineStart);
				$(document).on("mousedown", "g[id^='node']", _this.drawBrokenLine.drawLineStart);
			}
			else {
				$(document).off("mousedown", "g[id^='node']", _this.drawBrokenLine.drawLineStart);
			}

		}

		/**
		 * [function 鼠标绘制开始]
		 * @Author   yfy
		 * @DateTime 2016-08-22T16:13:22+0800
		 * @param    {[type]}                 e [description]
		 */
		this.drawBrokenLine.drawLineStart = function(e) {
			$(document).off("mousedown", "g[id^='node']", _this.drawBrokenLine.drawLineStart);
			var startpoint = this.instance.container.tbox();
			sNode = this.instance;
			offset = $(_this.draw.node).offset();
			array = [[startpoint.cx, startpoint.cy], [startpoint.cx, startpoint.cy]];
			interim = _this.draw.polyline(array)
				.attr(_this.defaultJson.line.style);
			interim.arrowMarker = _this.draw.marker(10, 10, function(add) {
				add.polyline([[0, 0], [0, 10], [8, 5]]).fill(_this.defaultJson.line.style.stroke)
			})
			interim.marker('end', interim.arrowMarker)
			$(document).on("mousemove", _this.drawBrokenLine.drawLineProcess);
			$(document).on("mouseup", _this.drawBrokenLine.drawLineEnd);
		}


		/**
		 * [function 鼠标移动绘制中]
		 * @Author   yfy
		 * @DateTime 2016-08-22T16:13:37+0800
		 * @param    {[type]}                 e [description]
		 */
		this.drawBrokenLine.drawLineProcess = function(e) {
			var ex = (e.clientX - offset.left) * (1 / _this.setting.zoom);
			var ey = (e.clientY - offset.top) * (1 / _this.setting.zoom);
			if (Math.abs(ex - interim._array.value[array.length - 2][0]) > Math.abs(ey - interim._array.value[array.length - 2][1])){
				interim._array.value[array.length-1][0] = ex;
				interim._array.value[array.length - 1][1] = interim._array.value[array.length - 2][1];
			}else{
				interim._array.value[array.length - 1][0] = interim._array.value[array.length - 2][0]
				interim._array.value[array.length - 1][1] = ey;
			}


			interim.plot(interim._array.value)
		}


		/**
		 * [function 鼠标绘制结束]
		 * @Author   yfy
		 * @DateTime 2016-08-22T16:13:49+0800
		 * @param    {[type]}                 e [description]
		 */
		this.drawBrokenLine.drawLineEnd = function(e) {
		
			
			if(e.button==2){
				$(document).off("mousemove", _this.drawBrokenLine.drawLineProcess);
				$(document).off("mouseup", _this.drawBrokenLine.drawLineEnd);
				interim.arrowMarker.remove();
				interim.remove();
				$(document).on("mousedown", "g[id^='node']", _this.drawBrokenLine.drawLineStart);
				return false;

			}
			var target = $(e.target).closest("g[id^='node']");
			if (!target[0] || (interim._array.value[array.length - 1][0] != (e.clientX - offset.left) * (1 / _this.setting.zoom) && interim._array.value[array.length - 1][1] != (e.clientY - offset.top) * (1 / _this.setting.zoom))) {
				array.splice(-1, 0, [interim._array.value[array.length - 1][0], interim._array.value[array.length - 1][1]]);
			}
			else if (target[0] && target[0].instance.id != sNode.id) {

				$(document).off("mousemove", _this.drawBrokenLine.drawLineProcess);
				$(document).off("mouseup", _this.drawBrokenLine.drawLineEnd);
				eNode = target[0].instance;
				_this.drawBrokenLine.creatBrokenLine(sNode, eNode,array)
				interim.arrowMarker.remove();
				interim.remove();
				$(document).on("mousedown", "g[id^='node']", _this.drawBrokenLine.drawLineStart);
				

			} else {
				$(document).off("mousemove", _this.drawBrokenLine.drawLineProcess);
				$(document).off("mouseup", _this.drawBrokenLine.drawLineEnd);
				interim.arrowMarker.remove();
				interim.remove();
				$(document).on("mousedown", "g[id^='node']", _this.drawBrokenLine.drawLineStart);
			}

		}


		/**
		 * [function 绘制折线 new 折线]
		 * @Author   yfy
		 * @DateTime 2016-08-22T16:14:14+0800
		 * @param    {[type]}                 sNode [description]
		 * @param    {[type]}                 eNode [description]
		 */
		this.drawBrokenLine.creatBrokenLine = function(sNode, eNode,array) {


			var option = $.extend(true, {}, _this.defaultJson.line);
			option.sNode = sNode.id;
			option.eNode = eNode.id;
			option.type = "brokenLine";
			option.id = "line_" + option.sNode + "_" + option.eNode;
			var sameLine = $('polyline[id^="line_' + option.sNode + '_' + option.eNode + '"]').length;
			if (sameLine) {
				if (!_this.setting.multiLine) {
					return false;
				}
				option.id += "_" + sameLine;
			}
			option.array = array;
			_this.creatBrokenLine(option)
			var sNodeTbox = sNode.container.tbox();
			var eNodeTbox = eNode.container.tbox();
			var brokenLine = SVG.get("line_" + sNode.id + "_" + eNode.id);
			brokenLine.lineChange(sNodeTbox.cx, sNodeTbox.cy, sNode.id)
			brokenLine.lineChange(eNodeTbox.cx, eNodeTbox.cy, eNode.id)
		
		}

		

	}

	/**
	 * [getJson json格式导出绘图板图像]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:14:32+0800
	 */
	getJson(){
		var allJson = {
			setting:{},
			object:[],
			line:[],
		};
		allJson.setting=this.setting;
		$('g[id^="node"]').each(function() {
			var node = this.instance;
			var tbox = node.container.tbox();
			var nodeJson = {
				left: tbox.x,
				top: tbox.y,
				id: node.id,
				container: {
					type: node.container.type,
					fill: node.container.attr("fill"),
					'fill-opacity': node.container.attr("fill-opacity"),
                    stroke: node.container.attr("stroke"),
                    'stroke-width': node.container.attr("stroke-width"),
					width: tbox.w,
					height: tbox.h,

				},
				content: {
					type:node.content.type,
					source: node.content.attr("source"),
					fill: node.content.attr("fill"),
					'fill-opacity': node.content.attr("fill-opacity"),
					scaleX: new SVG.Matrix(node.content).extract().scaleX,
					scaleY: new SVG.Matrix(node.content).extract().scaleY,


				},
				title: {
					text: node.title.text(),
					style: {
						fill: node.title.attr("fill"),
						"text-anchor": node.title.attr("text-anchor"),
                        size: node.title.attr("size")
					}
				}

			}

			allJson.object.push(nodeJson);
		})

		$('polyline[id^="line_node"]').each(function() {
			var line = this.instance;
	

	
			var lineJson = {
				array: line._array.value,
				sNode: line.sNode,
				eNode: line.eNode,
				id: line.id,
				type:line.type,
				arrow: true,
                animation: false,
				style: {
					stroke: line.attr("stroke"),
					'stroke-width': line.attr("stroke-width"),
                    'stroke-dasharray': line.attr("stroke-dasharray"),
                
				},
				title: {
					text: line.title.text(),
					style: {
						fill: line.title.attr("fill"),
						"text-anchor": line.title.attr("text-anchor"),
                        size: line.title.attr("size")
					}
				}

			}

			allJson.line.push(lineJson);
		})

		return allJson;
	}


	/**
	 * [getSVG 导出svg]
	 * @Author   yfy
	 * @DateTime 2016-08-23T15:53:34+0800
	 */
	getSVG(){
		var svgXml = $(this.draw.node).parent().html();
		return svgXml;
	}


	/**
	 * [getImg 导出图片]
	 * @Author   yfy
	 * @DateTime 2016-08-23T15:53:45+0800
	 */
	getImg(){
		var svgXml = $(this.draw.node).parent().html();

		var image = new Image();
		image.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svgXml)));

		var canvas = document.createElement('canvas');  

	
		canvas.width = $(this.draw.node).width() * this.setting.zoom;
		canvas.height = $(this.draw.node).height() * this.setting.zoom;

		var context = canvas.getContext('2d');  
		context.drawImage(image, 0, 0);


	

		var data=canvas.toDataURL('image/png');
		canvas.remove();
		return data;
	}

	/**
	 * [drawJson 通过json绘制图像到绘图版]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:15:19+0800
	 * @param    {[type]}                 json     [图像json]
	
	 */
	drawJson(json){
		var _this = this;
		this.clean();
		this.resetting(json.setting)

		if (!json.line){
			json.line = [];
		}
		for (var i = 0; i < json.object.length;i++){
			(function(i){
				setTimeout(function(){
					_this.creatNode(json.object[i]);
				}, i * 1)
			})(i)
		}


		setTimeout(function(){
			for (var j = 0; j < json.line.length; j++) {
				(function(j) {
					setTimeout(function() {
			
						if (json.line[j].type == 'straightLine') {
							_this.creatLine(json.line[j]);
						} else {
							_this.creatBrokenLine(json.line[j]);
						}

					}, j * 1)
				})(j)
			}
		},i)



	}

	/**
 * [randId 随机取名]
 * @Author   yfy
 * @DateTime 2016-08-22T15:57:30+0800
 * @param    {string}                 str [前缀]
 * @return   {string}                     [description]
 */
randId(str: string): string {
	return str + parseInt(Math.random() * 10000000000);
}




/**
 * [lineDistancePoint 距离线段顶点distance 的点的坐标]
 * @Author   yfy
 * @DateTime 2016-08-22T15:58:04+0800
 * @param    {[type]}                 distance1 [距离顶点一距离]
 * @param    {[type]}                 distance2 [距离顶点二距离]
 * @param    {[type]}                 x1        [顶点一坐标]
 * @param    {[type]}                 y1        [顶点一坐标]
 * @param    {[type]}                 x2        [顶点二坐标]
 * @param    {[type]}                 y2        [顶点二坐标]
 */
lineDistancePoint(distance1, distance2, x1, y1, x2, y2) {

	var xs, xe, ye, ys;
	if (x1 == x2) {
		xs = x1;
		xe = x2;
		if (y2 > y1) {
			ye = y2 - distance2;
			ys = y1 + distance1;
		} else {
			ye = y2 + distance2;
			ys = y1 - distance1;
		}
		return [[xs, ys], [xe, ye]];
	}

	var k = (x2 == x1) ? 0 : (y2 - y1) / (x2 - x1);
	var math = Math.sqrt(1 / (Math.pow(k, 2) + 1));
	var minus = x2 > x1 ? 1 : -1;

	ys = parseInt(y1 + minus * k * math * distance1);
	xs = parseInt(x1 + minus * math * distance1);
	ye = parseInt(y2 - minus * k * math * distance2);
	xe = parseInt(x2 - minus * math * distance2);


	return [[xs, ys], [xe, ye]];
}






/**
 * [linearrowheadPoint 线段距离顶点distance的点做垂直线距离改点根号3/2距离的两点坐标]
 * @Author   yfy
 * @DateTime 2016-08-22T15:59:17+0800
 * @param    {[type]}                 distance [距离顶点距离]
 * @param    {[type]}                 x1       [顶点一坐标]
 * @param    {[type]}                 y1       [顶点一坐标]
 * @param    {[type]}                 x2       [顶点二坐标]
 * @param    {[type]}                 y2       [顶点二坐标]
 * @param    {[type]}                 k        [斜率]
 */
linearrowheadPoint(distance, x1, y1, x2, y2, k) {
	var xa1, xa2, ya1, ya2;

	var xe, ye;

	var math = Math.sqrt(Math.pow(distance, 2) / (Math.pow(k, 2) + 1));
	var minus = x2 > x1 ? 1 : -1;
	ye = parseInt(y2 - minus * k * math);
	xe = parseInt(x2 - minus * math);


	math = math / Math.sqrt(3);
	xa1 = xe - k * math;
	ya1 = ye + math;
	xa2 = xe + k * math;
	ya2 = ye - math;
	return {
		'xa1': xa1,
		'xa2': xa2,
		'ya1': ya1,
		'ya2': ya2
	}
}

/**
 * [rectcentertosidedistance 矩形中点angle角度到边的距离]
 * @Author   yfy
 * @DateTime 2016-08-22T16:00:01+0800
 * @param    {[type]}                 w     [矩形宽]
 * @param    {[type]}                 h     [矩形高]
 * @param    {[type]}                 angle [角度]
 */
rectcentertosidedistance(w, h, angle) {
	var divide = Math.atan(w / h) / (Math.PI / 180);
	var cosangle;
	var cosside;
	if (angle < divide) {
		cosangle = angle;
		cosside = h / 2;
	} else if (angle < 90) {
		cosangle = 90 - angle;
		cosside = w / 2;
	} else if (angle < 180 - divide) {
		cosangle = angle - 90;
		cosside = w / 2;
	}
	else if (angle < 180) {
		cosangle = 180 - angle;
		cosside = h / 2;
	}
	else if (angle < 180 + divide) {
		cosangle = angle - 180;
		cosside = h / 2;
	}
	else if (angle < 270) {
		cosangle = 270 - angle;
		cosside = w / 2;
	}
	else if (angle < 360 - divide) {
		cosangle = angle - 270;
		cosside = w / 2;
	} else {
		cosangle = 360 - angle;
		cosside = h / 2;
	}

	return parseInt(cosside / Math.cos(cosangle * (Math.PI / 180)));
}





/**
 * [rectcentertosideangle 两矩形连线角度]
 * @Author   yfy
 * @DateTime 2016-08-22T16:00:51+0800
 * @param    {[type]}                 x1 [顶点一坐标]
 * @param    {[type]}                 y1 [顶点一坐标]
 * @param    {[type]}                 x2 [顶点二坐标]
 * @param    {[type]}                 y2 [顶点二坐标]
 */
rectcentertosideangle(x1, y1, x2, y2) {
	var dx = x2 - x1;
	var dy = y2 - y1;
	var angle = dy != 0 ? Math.atan(Math.abs(dx / dy)) / (Math.PI / 180) : 90;


	if (dy == 0 && dx > 0) {
		angle = 270;
	}

	if (dx == 0) {
		if (dy > 0) {
			angle = 0;
		} else {
			angle = 180;
		}
	}

	if (dx > 0 && dy > 0) {
		angle = 360 - angle;
	} else if (dx < 0 && dy < 0) {
		angle = 180 - angle;
	}
	return angle;
}





/**
 * [lineDistance line sDistance  eDistance]
 * @Author   yfy
 * @DateTime 2016-08-22T16:01:26+0800
 * @param    {[type]}                 stype     [开始节点形状]
 * @param    {[type]}                 etype     [结束节点形状]
 * @param    {[type]}                 sNodetbox [节点tbox]
 * @param    {[type]}                 eNodetbox [节点tbox]
 */
lineDistance(stype, etype, sNodetbox, eNodetbox) {

	var sDistance, eDistance;

	if (stype == "circle") {
		sDistance = sNodetbox.w / 2;

	} else if (stype == "rect" || true) {
		var rectAngle = this.rectcentertosideangle(eNodetbox.cx, eNodetbox.cy, sNodetbox.cx, sNodetbox.cy);

		sDistance = this.rectcentertosidedistance(sNodetbox.w, sNodetbox.h, rectAngle);
	}

	if (etype == "circle") {
		eDistance = eNodetbox.w / 2;
	} else if (etype == "rect" || true) {
		var rectAngle = this.rectcentertosideangle(sNodetbox.cx, sNodetbox.cy, eNodetbox.cx, eNodetbox.cy);

		eDistance = this.rectcentertosidedistance(eNodetbox.w, eNodetbox.h, rectAngle);
	}


	return {
		sDistance: sDistance,
		eDistance: eDistance,
	}
}
}



/**
 * 节点
 */
class node{
	uscene: Object;
	container: Object;
	content: Object;
	group: Object;
	line: string[];
	option: Object;
	id: string;

	constructor(uscene, option) { 
		this.uscene = uscene;
		this.option = $.extend(true, {}, this.uscene.defaultJson.object ,option); 
		this.init();
		return this.group;
	};

	/**
	 * [init 入口]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:16:36+0800
	 */
	init(){
		this.id = this.option.id;
		this.creatContainer();
		this.creatContent();
		this.creatText();
		this.creatgroup();
		this.dragmove();

		
	}


	/**
	 * [creatContainer 创建节点容器]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:16:47+0800
	 */
	creatContainer() {
		if (this.option.container.type=='rect'){
			this.container = this.uscene.draw.rect(this.option.container.width, this.option.container.height);
		} else if (this.option.container.type == 'circle')
		{
			this.container = this.uscene.draw.circle(this.option.container.width);
		}

		this.container.attr(this.option.container)
		.attr({'id': this.id + "_container" })
		.move(this.option.left, this.option.top);
		this.container.option = this.option.container;
	}


	/**
	 * [creatContent 创建节点图标]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:17:04+0800
	 */
	creatContent(){
		if(this.option.content.type=='path'){
			this.content = this.uscene.draw.path(this.uscene.defaultPath[this.option.content.source] ? this.uscene.defaultPath[this.option.content.source] : this.option.content.source)
		}

		this.content.attr(this.option.content)
		.attr({ 'id': this.id + "_content" })
		var contenttbox = this.content.tbox();
		var containertbox = this.container.tbox();
		this.content.move(containertbox.cx - contenttbox.w / 2, containertbox.cy - contenttbox.h / 2).scale(this.option.content.scaleX, this.option.content.scaleY);
		this.content.option = this.option.content;
	}

	/**
	 * [creatText 创建节点name]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:17:22+0800
	 */
	creatText() {

		this.title = this.uscene.draw.text(this.option.title.text).move(this.option.left + this.option.container.width / 2, this.option.top + this.option.container.height + this.option.title.style.size / 2 + 2);
		this.title.attr(this.option.title.style)
			.font(this.option.title.style)
			.attr({ 'id': this.id + "_title" });
	}


	/**
	 * [creatgroup 合并节点部件]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:17:41+0800
	 */
	creatgroup() {
		this.group = this.uscene.draw.group();

	


		this.group.add(this.container);
        this.group.add(this.content);
        this.group.add(this.title);

        this.group.draggable(this.uscene.setting.draggable);
        this.group.container = this.container;
        this.group.content = this.content;

        this.group.title = this.title;
        this.group.attr({ 'id': this.id});
        this.group.id = this.id;
    
        this.group.addSign = this.addSign;
        this.group.removeSign = this.removeSign;
        this.group.changeContainer = this.changeContainer;
        this.group.changeContent = this.changeContent;
        this.group.remove = this.remove;

	}



	/**
	 * [remove 删除节点]
	 * @Author   yfy
	 * @DateTime 2016-08-24T17:20:10+0800
	 */
	remove(){
		$("polyline[id*='" + this.id + "']").each(function() {
			this.instance.remove();
		});
		return this.parent() && this.parent().removeElement(this), this;
	}


	/**
	 * [changeContent 替换节点图标]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:17:59+0800
	 * @param    {[type]}                 option [description]
	 */
	changeContent(option){

		var group = typeof this.group == 'Object' ? this.group : this;
		var uscene = group.doc().origin;
		option=$.extend(true,{},group.content.option,option)

		if(option.type="path"){
			var newContent = uscene.draw.path(uscene.defaultPath[option.source] ? uscene.defaultPath[option.source] : option.source);
		}

		newContent.attr(option)
			.attr({ id: group.content.attr("id") });
		newContent.option = option;
		group.content.replace(newContent);
		group.content = newContent;
		var containerPoint = this.container.bbox();
		var newtbox = newContent.bbox();
		group.content.move(containerPoint.cx - newtbox.w / 2, containerPoint.cy - newtbox.h / 2).scale(option.scaleX, option.scaleY);

	}


	/**
	 * [changeContainer 替换节点容器]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:18:14+0800
	 * @param    {[type]}                 option [description]
	 */
	changeContainer(option) {
		var group = typeof this.group == 'Object' ? this.group : this;
		var containerPoint = group.container.bbox();
		var uscene = group.doc().origin;

		option = $.extend(true, {}, group.container.option, option);
	
		var newContainer;
		if (option.type=='rect'){
			newContainer = uscene.draw.rect(option.width, option.height);
		} else if (option.type == 'circle')
		{
			newContainer = uscene.draw.circle(option.width);
		}
		newContainer.attr(option)
			.attr({ id: group.container.attr("id") }));
			
			newContainer.option = option;
			
			group.container.replace(newContainer);
			group.container = newContainer;
			group.container.move(containerPoint.x, containerPoint.y);
	
			return group;
	}


	/**
	 * [addSign 添加标记]
	 * @Author   yfy
	 * @DateTime 2016-08-23T15:54:05+0800
	 * @param    {[type]}                 option [description]
	 */
	addSign(option){
		var group = typeof this.group== 'Object' ? this.group : this;
		var uscene = group.doc().origin;
		var containerTbox = group.container.bbox();
		if (option.type = "path") {
			var sign = uscene.draw.path(option.source);
		}
		var signTbox = sign.tbox();
		
		
		sign.attr(option)
			.move(containerTbox.cx - signTbox.w / 2 + option.offsetX, containerTbox.cy - signTbox.h / 2 + option.offsetY).scale(option.scaleX, option.scaleY);
		group.add(sign);
		return sign;

	}


	/**
	 * [removeSign 删除标记]
	 * @Author   yfy
	 * @DateTime 2016-08-24T17:19:55+0800
	 * @param    {[type]}                 id [description]
	 */
	removeSign(id){
		var group = typeof this.group == 'Object' ? this.group : this;
		if(typeof id == "undefined"){
			for (var i = 3; i < group.node.childNodes.length; i++) {
				console.log(group.node.childNodes[i].instance)
				group.put(group.node.childNodes[i].instance)
				group.node.childNodes[i].instance.remove();
			}
		}else{
			var sign = SVG.get(id);
			group.put(sign);
			sign.remove();
		}

	}


	/**
	 * [dragmove 节点移动]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:18:30+0800
	 */
	dragmove(){

		

		this.group.on('dragstart.group',()=>{
			this.group.style('cursor', 'move');
			var nodeId = this.group.attr("id");
			this.line = $("polyline[id*='" + nodeId + "']");

			this.group.on('dragmove.group', (event)=>{
				var containerTbox = this.group.container.tbox();
                var cx = containerTbox.cx;
                var cy = containerTbox.cy;
				this.line.each(function() {
					
					this.instance.lineChange(cx, cy, nodeId);

				})
			});
            this.group.on('dragend.group', (event)=> {
                this.group.off('dragmove.group');
                this.group.off('dragend.group');
                this.group.style('cursor', null);
                var containerTbox = this.group.container.tbox();

                var cx = containerTbox.cx;
                var cy = containerTbox.cy;

                var drawHeight = $(this.uscene.draw.node).height();
				var drawWidth = $(this.uscene.draw.node).width();


                if (containerTbox.y2 > drawHeight) {
					this.uscene.resize(drawWidth, containerTbox.y2 + 50)
					this.uscene.setting.svgHeight = containerTbox.y2 + 50;
					this.uscene.setting.svgWidth = drawWidth;
                }
                if (containerTbox.x2 > drawWidth) {
					this.uscene.resize(containerTbox.x2 + 50, drawHeight);
					this.uscene.setting.svgHeight = drawHeight;
					this.uscene.setting.svgWidth = containerTbox.x2 + 50;
                }


				this.line.each(function(){
					
					this.instance.lineChange(cx, cy, nodeId);
					
				})

            })
		})

	}
}

/**
 * 标记
 */
class marker {
	
	marker: Object;
	constructor(draw, option) {
		this.draw = draw
		this.option = option;
		this.init();
	};
	init(){
		this.creatMarker();
	}
	creatMarker(){
		this.marker = this.draw.marker(10, 10, function(add) {
			add.polyline([[0,0],[0,10],[6,5],[0,0]]).fill('#f06').stroke({ width: 0 })

		})
	}
}






/**
 * 直线
 */
class line{
	uscene: Object;
	sNode: string;
	eNode: string;
	option: Object;
	line: Object;
	arrowMarker;
	title;
	constructor(uscene, option) { 
		this.uscene = uscene 
		this.sNode = option.sNode;
		this.eNode = option.eNode;
		this.option = option;
		this.init(); 
		return this.line;
	};
	/**
	 * [init 入口]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:27:54+0800
	 */
	init(){

		this.creatLine();
		this.creatArrow();
		this.creatText();
		this.animation(this.option.animation) 
	}

	/**
	 * [creatArrow 创建箭头]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:28:04+0800
	 */
	creatArrow() {
		this.arrowMarker = this.uscene.draw.marker(14, 10, (add) => {
			add.polyline([[0, 0], [0, 10], [8, 5]]).fill(this.option.style.stroke);
		})
		this.line.marker('end', this.arrowMarker)
	}



	/**
	 * [creatArray 生产线条数组 用于反向生产数据]
	 * @Author   yfy
	 * @DateTime 2016-08-24T17:48:47+0800
	 * @param    {[type]}                 sNode [description]
	 * @param    {[type]}                 eNode [description]
	 */
	creatArray(sNode, eNode) {
		sNode = SVG.get(sNode);
		eNode = SVG.get(eNode);
		sNodeTbox = sNode.container.tbox();
		eNodeTbox = eNode.container.tbox();
		var distance = this.uscene.lineDistance(sNode.container.type, eNode.container.type, sNodeTbox, eNodeTbox);
		var array = this.uscene.lineDistancePoint(distance.sDistance, distance.eDistance, sNodeTbox.cx, sNodeTbox.cy, eNodeTbox.cx, eNodeTbox.cy);
		return array;
	}


	/**
	 * [creatLine 创建直线]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:28:22+0800
	 */
	creatLine(){
		if (this.option.array==null){
			this.option.array = this.creatArray(this.sNode, this.eNode);
		}
        this.line = this.uscene.draw.polyline(this.option.array)
        .attr(this.option.style);


      

		this.line.id = this.option.id?this.option.id:"line_"+this.sNode+"_"+this.eNode;
		this.line.type = this.option.type;
		this.line.attr({
			'id': this.line.id,
			'fill':"none"
        })


        this.line.lineChange = this.lineChange;
        this.line.sNode = this.sNode;
        this.line.eNode = this.eNode;
        this.line.animation = this.animation;
        this.line.uscene = this.uscene;
       	this.line.remove = this.remove;
		this.line.option = this.option;
  

	}

	/**
	 * [remove 删除线]
	 * @Author   yfy
	 * @DateTime 2016-08-24T17:21:49+0800
	 */
	remove() { 
		SVG.get(this.id + "_title").remove();
		return this.parent() && this.parent().removeElement(this), this;
	}

	/**
	 * [animation 线条动画]
	 * @Author   yfy
	 * @DateTime 2016-08-24T17:23:45+0800
	 * @param    {[type]}                 state [description]
	 */
	animation(state) { 
		state = typeof state === 'undefined' ? true : state;
		var line = this.line ? this.line : this;
		if (state){
			if (line.attr("stroke-dasharray") == undefined || line.attr("stroke-dasharray") == null || line.attr("stroke-dasharray")=="1"){
				line.attr("stroke-dasharray", "5,5");
			}
			line.addClass('line_animation');
		}else{
			if (line.option['stroke-dasharray'] == undefined) {

				line.attr("stroke-dasharray", null);
			}else{
				line.attr("stroke-dasharray", line.option['stroke-dasharray']);
			}
			line.removeClass('line_animation');
		}

		
		
		
	}


	/**
	 * [creatText 创建文字]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:28:36+0800
	 */
	creatText(){
		var textPoint = this.line.bbox();
		this.title = this.uscene.draw.text(this.option.title.text).move(textPoint.cx, textPoint.cy)
		this.title.attr(this.option.title.style)
		.font(this.option.title.style)
		.attr({ 'id': this.line.id + "_title"});
		this.line.title = this.title;
	}



	/**
	 * [lineChange 直线坐标调动]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:28:45+0800
	 * @param    {[type]}                 cx     [调动位置]
	 * @param    {[type]}                 cy     [调动位置]
	 * @param    {[type]}                 nodeId [导致调动的节点id]
	 */
	lineChange(cx,cy,nodeId){
		var sNodeContainer = SVG.get(this.sNode).container;
		var eNodeContainer = SVG.get(this.eNode).container;
		var sNodetbox = sNodeContainer.tbox();
		var eNodetbox = eNodeContainer.tbox();


		var distance=this.uscene.lineDistance(sNodeContainer.type, eNodeContainer.type, sNodetbox, eNodetbox);


		var sDistance = distance.sDistance;
		var eDistance = distance.eDistance;

		if(nodeId==this.sNode){
			var array = this.uscene.lineDistancePoint(sDistance, eDistance, cx, cy, eNodetbox.cx, eNodetbox.cy);
			this.plot(array)
		}else{
			var array = this.uscene.lineDistancePoint(sDistance, eDistance, sNodetbox.cx, sNodetbox.cy, cx, cy);
			this.plot(array)
		}

		var textPoint = this.bbox();
		this.title.move(textPoint.cx, textPoint.cy)

	}
}



/**
 * 折线
 */
class brokenLine extends line {

	constructor(uscene, option) {

		this.uscene = uscene

		this.sNode = option.sNode;

		this.eNode = option.eNode;

		this.option = option;

		this.init();
	};




	/**
	 * [creatText 创建name]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:20:05+0800
	 */
	creatText() {
		var array = this.line._array.value;
		var textPoint = [];
		var length = array.length;
		if (length % 2 == 0) {
			textPoint = [array[length / 2][0] / 2 + array[length / 2 - 1][0] / 2, array[length / 2][1] / 2 + array[length / 2 - 1][1] / 2]
		} else {
			textPoint = array[parseInt(length / 2)];
		}

		this.title = this.uscene.draw.text(this.option.title.text).move(textPoint[0], textPoint[1])
		this.title.attr(this.option.title.style)
			.font(this.option.title.style)
			.attr({ 'id': this.line.id + "_title" });
		this.line.title = this.title;
	}



	/**
	 * [lineChange 折线坐标调动]
	 * @Author   yfy
	 * @DateTime 2016-08-22T16:20:27+0800
	 * @param    {[type]}                 cx     [调动坐标位置]
	 * @param    {[type]}                 cy     [调动坐标位置]
	 * @param    {[type]}                 nodeId [调动节点坐标]
	 */
	lineChange(cx, cy, nodeId) {
		var sNodeContainer = SVG.get(this.sNode).container;
		var eNodeContainer = SVG.get(this.eNode).container;
		var sNodetbox = sNodeContainer.tbox();
		var eNodetbox = eNodeContainer.tbox();


		if (nodeId == this.sNode) {    //调动开始节点导致的坐标变动

			var pointArray = $.extend(true, [], this._array.value);

			var length = pointArray.length;


			/*是否需要改变结束节点导致的坐标变动 需要则改动----------start*/
			var eNodeJud = false;


			if (pointArray[length - 2][1] > eNodetbox.cy && pointArray[length - 1][1] < eNodetbox.cy) {
				eNodetbox.cy = eNodetbox.cy + eNodetbox.h / 2;
				eNodeJud = true;
			} else if (pointArray[length - 2][1] < eNodetbox.cy && pointArray[length - 1][1] > eNodetbox.cy) {
				eNodetbox.cy = eNodetbox.cy - eNodetbox.h / 2;
				eNodeJud = true;
			} else if (pointArray[length - 2][0] > eNodetbox.cx && pointArray[length - 1][0] < eNodetbox.cx) {
				eNodetbox.cx = eNodetbox.cx + eNodetbox.w / 2;
				eNodeJud = true;
			}
			else if (pointArray[length - 2][0] < eNodetbox.cx && pointArray[length - 1][0] > eNodetbox.cx) {
				eNodetbox.cx = eNodetbox.cx - eNodetbox.w / 2;
				eNodeJud = true;
			}


			if (eNodeJud) {
				if ((pointArray[length - 1][0] - pointArray[0][0]) * (eNodetbox.cx - pointArray[0][0]) * (pointArray[length - 1][1] - pointArray[0][1]) * (eNodetbox.cy - pointArray[0][1]) == 0) {
					return false;
				}
				var scaleX = (eNodetbox.cx - pointArray[0][0]) / (pointArray[length - 1][0] - pointArray[0][0]);
				var scaleY = (eNodetbox.cy - pointArray[0][1]) / (pointArray[length - 1][1] - pointArray[0][1]);

				for (var i = 1; i < pointArray.length - 1; i++) {
					pointArray[i][0] = (pointArray[i][0] - pointArray[0][0]) * scaleX + pointArray[0][0];
					pointArray[i][1] = (pointArray[i][1] - pointArray[0][1]) * scaleY + pointArray[0][1];
				}

				pointArray[length - 1][0] = eNodetbox.cx;
				pointArray[length - 1][1] = eNodetbox.cy;


				this.plot(pointArray)
			}

			/*是否需要改变结束节点导致的坐标变动 需要则改动----------end*/








			/*开始节点导致的坐标变动-------------------start*/
			if (parseInt(pointArray[0][1]) == parseInt(pointArray[1][1])) {
				if (pointArray[1][0] > pointArray[0][0] - sNodetbox.w / 2) {
					cx += sNodetbox.w / 2;
				} else if (pointArray[1][0] < pointArray[0][0] + sNodetbox.w / 2) {
					cx -= sNodetbox.w / 2;
				}
			} else {
				if (pointArray[1][1] > pointArray[0][1]) {
					cy += sNodetbox.h / 2;
				} else if (pointArray[1][1] < pointArray[0][1] + sNodetbox.h / 2) {
					cy -= sNodetbox.h / 2;
				}
			}




			if ((pointArray[length - 1][0] - pointArray[0][0]) * (pointArray[length - 1][0] - cx) * (pointArray[length - 1][1] - pointArray[0][1]) * (pointArray[length - 1][1] - cy) == 0) {
				return false;
			}
			var scaleX = (pointArray[length - 1][0] - cx) / (pointArray[length - 1][0] - pointArray[0][0]);
			var scaleY = (pointArray[length - 1][1] - cy) / (pointArray[length - 1][1] - pointArray[0][1]);


			for (var i = 1; i < pointArray.length - 1; i++) {
				pointArray[i][0] = pointArray[length - 1][0] - (pointArray[length - 1][0] - pointArray[i][0]) * scaleX;
				pointArray[i][1] = pointArray[length - 1][1] - (pointArray[length - 1][1] - pointArray[i][1]) * scaleY;
			}

			pointArray[0][0] = cx;
			pointArray[0][1] = cy;


			this.plot(pointArray)
			/*开始节点导致的坐标变动-------------------end*/



		} else {   //调动结束节点导致的坐标变动
	
			var pointArray = $.extend(true, [], this._array.value);

			var length = pointArray.length;



			/*是否需要改变开始节点导致的坐标变动 需要则改动----------start*/
			var sNodeJud = false;


			if (pointArray[1][1] > sNodetbox.cy && pointArray[0][1] < sNodetbox.cy) {
				sNodetbox.cy = sNodetbox.cy + sNodetbox.h / 2;
				sNodeJud = true;
			} else if (pointArray[1][1] < sNodetbox.cy && pointArray[0][1] > sNodetbox.cy) {
				sNodetbox.cy = sNodetbox.cy - sNodetbox.h / 2;
				sNodeJud = true;
			} else if (pointArray[1][0] > sNodetbox.cx && pointArray[0][0] < sNodetbox.cx) {
				sNodetbox.cx = sNodetbox.cx + sNodetbox.w / 2;
				sNodeJud = true;
			}
			else if (pointArray[1][0] < sNodetbox.cx && pointArray[0][0] > sNodetbox.cx) {
				sNodetbox.cx = sNodetbox.cx - sNodetbox.w / 2;
				sNodeJud = true;
			}


			if (sNodeJud) {
				if ((pointArray[length - 1][0] - pointArray[0][0]) * (pointArray[length - 1][0] - sNodetbox.cx) * (pointArray[length - 1][1] - pointArray[0][1]) * (pointArray[length - 1][1] - sNodetbox.cy) == 0) {
					return false;
				}
				var scaleX = (pointArray[length - 1][0] - sNodetbox.cx) / (pointArray[length - 1][0] - pointArray[0][0]);
				var scaleY = (pointArray[length - 1][1] - sNodetbox.cy) / (pointArray[length - 1][1] - pointArray[0][1]);


				for (var i = 1; i < pointArray.length - 1; i++) {
					pointArray[i][0] = pointArray[length - 1][0] - (pointArray[length - 1][0] - pointArray[i][0]) * scaleX;
					pointArray[i][1] = pointArray[length - 1][1] - (pointArray[length - 1][1] - pointArray[i][1]) * scaleY;
				}

				pointArray[0][0] = sNodetbox.cx;
				pointArray[0][1] = sNodetbox.cy;

				this.plot(pointArray)
			}
			/*是否需要改变开始节点导致的坐标变动 需要则改动----------end*/



			/*开始节点导致的坐标变动-------------------start*/
			if (parseInt(pointArray[length - 2][1]) == parseInt(pointArray[length - 1][1])) {
				if (pointArray[length - 2][0] > pointArray[length - 1][0] - eNodetbox.w / 2) {
					cx += eNodetbox.w / 2;
				} else if (pointArray[length - 2][0] < pointArray[length - 1][0] + eNodetbox.w / 2) {
					cx -= eNodetbox.w / 2;
				}
			} else {
				if (pointArray[length - 2][1] > pointArray[length - 1][1] - eNodetbox.h / 2) {
					cy += eNodetbox.h / 2;
				} else if (pointArray[length - 2][1] < pointArray[length - 1][1] + eNodetbox.h / 2) {
					cy -= eNodetbox.h / 2;
				}
			}


			if ((pointArray[length - 1][0] - pointArray[0][0]) * (cx - pointArray[0][0]) * (pointArray[length - 1][1] - pointArray[0][1]) * (cy - pointArray[0][1]) == 0) {
				return false;
			}
			var scaleX = (cx - pointArray[0][0]) / (pointArray[length - 1][0] - pointArray[0][0]);
			var scaleY = (cy - pointArray[0][1]) / (pointArray[length - 1][1] - pointArray[0][1]);

			for (var i = 1; i < pointArray.length - 1; i++) {
				pointArray[i][0] = (pointArray[i][0] - pointArray[0][0]) * scaleX + pointArray[0][0];
				pointArray[i][1] = (pointArray[i][1] - pointArray[0][1]) * scaleY + pointArray[0][1];
			}



			pointArray[length - 1][0] = cx;
			pointArray[length - 1][1] = cy;


			this.plot(pointArray)

			/*开始节点导致的坐标变动-------------------end*/
		}
	



		/*文字位置坐标变动------------------start*/
		var textPoint = [];
		if (length % 2 == 0) {
			textPoint = [pointArray[length / 2][0] / 2 + pointArray[length / 2 - 1][0] / 2, pointArray[length / 2][1] / 2 + pointArray[length / 2 - 1][1] / 2]
		} else {
			textPoint = pointArray[parseInt(length / 2)];
		}
		this.title.move(textPoint[0], textPoint[1])

		/*文字位置坐标变动------------------end*/

	}
}