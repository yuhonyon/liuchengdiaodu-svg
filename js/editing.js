//创建画板
var graph = new uscene();
graph.init("draw")


//修改默认图标
graph.defaultPath = {
    tagEnd: "M5,18l20.002,20.003l-5,5L0,23L5,18z M14.998,38.003L45,8l5,5L19.998,43.001L14.998,38.003z",
    tagRerun: "M0.627,37.406c9.81,5.414,24.769,6.385,24.27-14.942H12.813l18.279-18.28l18.28,18.28H37.549C38.213,49.883,15.071,50.768,0.627,37.406L0.627,37.406z",
    tagException: "M31.48,6.172c0-3.179-2.741-5.755-6.12-5.755c-3.375,0-6.118,2.576-6.118,5.755v21.586c0,3.181,2.742,5.757,6.118,5.757c3.379,0,6.12-2.576,6.12-5.757V6.172z M25.36,37.83c-3.375,0-6.118,2.574-6.118,5.755c0,3.178,2.742,5.754,6.118,5.754c3.379,0,6.12-2.576,6.12-5.754C31.48,40.406,28.739,37.83,25.36,37.83z",
    tagRunning: "M29.229,0L44.93,5.023L31.914,17.447l9.258,5.754L10.844,49.833l8.187-21.652l-8.723-5.434L29.229,0",
    tagNormal: "M44.758,19.208H44c-0.381-1.208-0.882-2.363-1.479-3.456l0.601-0.6c2.147-2.148,2.147-5.63,0-7.78l-0.163-0.162c-2.149-2.149-5.632-2.149-7.779,0l-0.669,0.67c-1.101-0.578-2.264-1.057-3.478-1.416V5.5c0-3.038-2.463-5.5-5.5-5.5h-0.231C22.263,0,19.8,2.462,19.8,5.5v1.034c-1.162,0.36-2.274,0.828-3.331,1.39l-0.713-0.712c-2.146-2.149-5.629-2.149-7.778,0L7.814,7.373c-2.146,2.149-2.146,5.631,0,7.78l0.689,0.689c-0.576,1.066-1.057,2.191-1.427,3.366h-1c-3.038,0-5.5,2.462-5.5,5.5v0.229c0,3.039,2.462,5.502,5.5,5.502h0.876c0.361,1.242,0.849,2.431,1.438,3.557l-0.666,0.664c-2.148,2.148-2.148,5.633,0,7.782l0.162,0.163c2.148,2.148,5.631,2.148,7.779,0l0.597-0.598c1.118,0.612,2.299,1.122,3.537,1.505v0.811c0,3.039,2.463,5.5,5.501,5.5h0.232c3.036,0,5.499-2.461,5.499-5.5v-0.742c1.291-0.381,2.521-0.9,3.685-1.527l0.552,0.552c2.144,2.147,5.631,2.147,7.776,0l0.164-0.164c2.148-2.149,2.148-5.633,0-7.781l-0.574-0.575c0.612-1.152,1.117-2.37,1.488-3.646h0.634c3.037,0,5.5-2.464,5.5-5.502v-0.231C50.257,21.67,47.795,19.208,44.758,19.208z M25.549,33.622c-4.756,0-8.61-3.854-8.61-8.608c0-4.756,3.854-8.61,8.61-8.61c4.754,0,8.608,3.854,8.608,8.61C34.157,29.769,30.303,33.622,25.549,33.622z",
    tagLock: "M20.86,31.042c0-2.285,1.854-4.138,4.139-4.138c2.286,0,4.14,1.853,4.14,4.138c0,2.016-1.038,3.696-2.941,4.067l2.941,8.35H20.86l2.749-8.35C21.704,34.738,20.86,33.058,20.86,31.042z M14.652,18.625v-4.139c0-5.715,4.633-10.348,10.347-10.348c5.717,0,10.349,4.632,10.349,10.348v4.139H14.652z M39.487,18.625v-3.77C39.487,6.665,33.403,0,24.999,0c-8.402,0-14.486,6.665-14.486,14.856v3.77c-3.43,0-6.208,2.779-6.208,6.208v18.625c0,3.428,2.779,6.208,6.208,6.208h28.975c3.43,0,6.208-2.78,6.208-6.208V24.833C45.695,21.405,42.917,18.625,39.487,18.625z",
    tagChoose: "M41.07,16.071c1.786,0,8.93,7.143,8.93,8.929s-7.144,8.928-8.93,8.928c-1.784,0-1.784-1.786-1.784-1.786V17.856C39.286,17.856,39.286,16.071,41.07,16.071L41.07,16.071z M39.284,23.214v3.57h-12.5v12.502h-3.571V26.784H10.714v-3.57h12.499v-12.5h3.571v12.5H39.284L39.284,23.214z M33.928,8.929c0,1.785-1.786,1.785-1.786,1.785H17.856c0,0-1.785,0-1.785-1.785C16.071,7.143,23.214,0,25,0C26.784,0,33.928,7.143,33.928,8.929L33.928,8.929L33.928,8.929z M32.142,39.286c0,0,1.786,0,1.786,1.784c0,1.786-7.144,8.929-8.928,8.929c-1.786,0-8.929-7.143-8.929-8.929c0-1.784,1.786-1.784,1.786-1.784H32.142L32.142,39.286z M10.714,26.784v5.357c0,0,0,1.786-1.785,1.786C7.143,33.928,0,26.784,0,25c0-1.786,7.143-8.929,8.929-8.929s1.785,1.785,1.785,1.785V26.784L10.714,26.784z",
    tagPause: "M3.352,2.276C3.352,1.018,4.347,0,5.631,0h11.346c1.259,0,2.278,0.997,2.278,2.276v45.426c0,1.259-0.995,2.276-2.278,2.276H5.631c-1.259,0-2.279-0.998-2.279-2.276V2.276z M30.614,2.276C30.614,1.018,31.608,0,32.894,0h11.346c1.259,0,2.278,0.997,2.278,2.276v45.426c0,1.259-0.996,2.276-2.278,2.276H32.894c-1.259,0-2.279-0.998-2.279-2.276V2.276z",
    tagImport: "M25,1l7.583,15.364l16.956,2.464L37.27,30.787l2.896,16.887L25,39.701L9.834,47.674l2.896-16.887L0.461,18.828l16.956-2.464L25,1z M25,1",
    tagManual: "M16.659,22.243l0.083,0.085l0.139,0.177l0.147,0.161l0.303,0.343l0.311,0.316l0.333,0.308l0.332,0.287l0.354,0.278l0.364,0.269l0.362,0.251l0.383,0.236l0.386,0.219l0.407,0.198l0.4,0.193l0.415,0.178l0.412,0.154l0.429,0.14l0.43,0.118l-0.097,0.117l-0.089,0.103l-0.083,0.112l-0.086,0.123l-0.067,0.121l-0.075,0.125l-0.067,0.124l-0.059,0.134l-0.043,0.123l-0.044,0.143l-0.046,0.131l-0.027,0.15l-0.024,0.134l-0.029,0.145l-0.008,0.147l-0.008,0.147l0.008,0.169l0.014,0.163l0.031,0.16l0.03,0.155l0.034,0.156l0.049,0.161l0.059,0.149l0.059,0.145l0.081,0.143l0.072,0.139l0.082,0.135l0.097,0.13l0.098,0.126l0.102,0.127l0.117,0.117l0.113,0.103l-1.739,13.033l4.236,4.099l4.109-4.099L27.71,30.511l0.124-0.11l0.104-0.12l0.109-0.125l0.097-0.117l0.088-0.139l0.092-0.126l0.08-0.147l0.066-0.14l0.06-0.146l0.063-0.148l0.047-0.154l0.037-0.156l0.029-0.155l0.022-0.168l0.015-0.155v-0.169v-0.147l-0.007-0.131l-0.014-0.134L28.7,27.687l-0.031-0.134l-0.028-0.123l-0.035-0.124l-0.054-0.126l-0.054-0.118l-0.048-0.125l-0.059-0.112l-0.059-0.118l-0.084-0.107l-0.066-0.117l-0.082-0.107l-0.073-0.103l0.414-0.102l0.421-0.117l0.412-0.135l0.416-0.147l0.398-0.169l0.399-0.171l0.383-0.198l0.387-0.215l0.37-0.219l0.361-0.244l0.361-0.249l0.34-0.268l0.341-0.278l0.315-0.295l0.311-0.3l0.313-0.319l0.08-0.083l0.087,0.075l0.579,0.445l0.555,0.455l0.548,0.472l0.278,0.235l0.259,0.241l0.26,0.252l0.258,0.251l0.26,0.252l0.249,0.249l0.246,0.249l0.244,0.269l0.243,0.263l0.236,0.268l0.231,0.273l0.228,0.273l0.222,0.278l0.219,0.286l0.215,0.282l0.217,0.286l0.215,0.292l0.2,0.298l0.2,0.295l0.197,0.302l0.193,0.311l0.183,0.301l0.187,0.327l0.177,0.315l0.178,0.316l0.171,0.324l0.171,0.324l0.153,0.341l0.164,0.337l0.147,0.341l0.154,0.338l0.143,0.361l0.139,0.348l0.134,0.351l0.132,0.37l0.117,0.361l0.127,0.368l0.112,0.377l0.117,0.375l0.102,0.395l0.098,0.381l0.104,0.397l0.088,0.39l0.091,0.401l0.078,0.402l0.082,0.411l0.064,0.417l0.075,0.42l0.061,0.418l0.053,0.437l0.048,0.426l0.049,0.445l0.034,0.442l0.046,0.442l0.026,0.454l0.023,0.456l0.022,0.458l0.008,0.474v0.075l-0.06,0.032l-0.541,0.312l-0.546,0.305l-0.546,0.283l-0.556,0.282l-0.56,0.274l-0.563,0.265l-0.567,0.251l-0.569,0.242l-0.573,0.235l-0.573,0.23l-0.578,0.203l-0.584,0.209l-0.589,0.199l-0.593,0.177l-0.592,0.184l-0.59,0.163l-0.601,0.156l-0.604,0.145l-0.601,0.141l-0.598,0.128l-0.605,0.117l-0.613,0.11l-0.616,0.094l-0.605,0.08l-0.611,0.083l-0.621,0.066l-0.613,0.052l-0.621,0.046l-0.62,0.034l-0.62,0.037l-0.623,0.015h-0.619h-0.667l-0.664-0.022l-0.667-0.037l-0.656-0.035l-0.659-0.051l-0.656-0.06l-0.657-0.074l-0.65-0.097l-0.659-0.096l-0.651-0.11l-0.643-0.125l-0.647-0.132l-0.644-0.14l-0.643-0.163l-0.638-0.162l-0.627-0.175l-0.635-0.193l-0.629-0.194l-0.622-0.214l-0.622-0.22l-0.61-0.235l-0.616-0.244l-0.606-0.257l-0.61-0.266l-0.6-0.278l-0.59-0.289L8.41,45.219L7.82,44.908l-0.584-0.316l-0.575-0.327l-0.571-0.343l-0.567-0.354l0,0l-0.067-0.112l0.025-0.472l0.026-0.472l0.032-0.471l0.042-0.45l0.038-0.456l0.051-0.458l0.059-0.437l0.059-0.44l0.067-0.432l0.067-0.431l0.08-0.429l0.083-0.413l0.081-0.416l0.102-0.411l0.091-0.403l0.102-0.397l0.113-0.399l0.109-0.383L6.8,35.295l0.118-0.375l0.134-0.386l0.126-0.365l0.14-0.363l0.139-0.369l0.149-0.354l0.148-0.342l0.153-0.354l0.158-0.349L8.233,31.7l0.171-0.332l0.172-0.333l0.174-0.326l0.186-0.321l0.187-0.317l0.19-0.311l0.19-0.315l0.203-0.311l0.199-0.295l0.214-0.3l0.214-0.29l0.214-0.294l0.214-0.284l0.228-0.284l0.228-0.273l0.23-0.273l0.238-0.273l0.244-0.265l0.241-0.266l0.239-0.257l0.259-0.258l0.252-0.251l0.257-0.253l0.267-0.241l0.263-0.243l0.268-0.239l0.273-0.236l0.281-0.226l0.274-0.23l0.287-0.219l0.297-0.22l0.287-0.225l0.289-0.219l0.6-0.413L16.659,22.243L16.659,22.243L16.659,22.243L16.659,22.243z M24.994,0h0.295H25.6l0.294,0.016l0.295,0.016l0.291,0.029l0.293,0.027l0.29,0.045l0.278,0.054l0.289,0.048l0.281,0.062l0.276,0.067l0.278,0.081l0.273,0.075l0.268,0.086l0.273,0.096l0.258,0.102l0.265,0.113l0.26,0.113l0.257,0.11l0.253,0.131l0.243,0.125l0.254,0.139l0.235,0.143l0.234,0.155l0.238,0.155l0.221,0.153l0.229,0.163l0.223,0.171l0.223,0.177l0.214,0.178l0.199,0.182l0.209,0.193l0.197,0.193l0.198,0.207l0.187,0.19l0.184,0.214l0.186,0.214l0.168,0.214l0.173,0.214l0.17,0.23l0.152,0.228l0.157,0.233l0.142,0.241l0.146,0.241l0.133,0.241l0.143,0.251l0.116,0.252l0.127,0.247l0.112,0.257l0.108,0.263l0.096,0.268l0.092,0.268l0.096,0.27l0.08,0.273l0.072,0.273l0.067,0.282l0.066,0.278l0.05,0.29l0.046,0.287l0.036,0.287l0.038,0.289l0.022,0.29l0.021,0.295l0.014,0.295l0.009,0.302l-0.009,0.346l-0.021,0.362l-0.03,0.348l-0.029,0.34l-0.042,0.346l-0.061,0.341l-0.068,0.338l-0.08,0.327l-0.081,0.337l-0.097,0.327l-0.101,0.316l-0.114,0.317l-0.123,0.311l-0.134,0.311l-0.142,0.311l-0.14,0.295l-0.164,0.294l-0.162,0.29l-0.169,0.278l-0.186,0.281l-0.186,0.271l-0.197,0.268l-0.201,0.265l-0.214,0.253L33.942,19.3l-0.23,0.247l-0.228,0.236l-0.244,0.219l-0.244,0.23l-0.252,0.214l-0.249,0.215l-0.269,0.198l-0.36,0.265l-0.384,0.251l-0.392,0.229l-0.394,0.222l-0.415,0.207l-0.418,0.19l-0.203,0.089l-0.22,0.08l-0.214,0.092l-0.221,0.074l-0.224,0.064l-0.215,0.067l-0.221,0.072l-0.229,0.054l-0.226,0.059l-0.23,0.043l-0.23,0.045l-0.23,0.051l-0.228,0.029l-0.238,0.038l-0.236,0.024l-0.241,0.021l-0.237,0.013l-0.244,0.017l-0.243,0.008h-0.244h-0.273l-0.281-0.016l-0.282-0.017l-0.273-0.021l-0.273-0.03l-0.265-0.029l-0.273-0.043l-0.266-0.053l-0.267-0.054l-0.266-0.056l-0.26-0.066l-0.257-0.075l-0.252-0.081l-0.258-0.08l-0.246-0.081l-0.241-0.104l-0.252-0.094l-0.244-0.112l-0.238-0.112l-0.236-0.107l-0.236-0.128l-0.229-0.118l-0.221-0.14l-0.23-0.134l-0.219-0.139l-0.215-0.148l-0.222-0.148l-0.207-0.161l-0.201-0.155l-0.207-0.171l-0.198-0.161L17.5,20.15l-0.214-0.195l-0.206-0.208l-0.209-0.21l-0.207-0.219l-0.185-0.22l-0.192-0.23l-0.183-0.236l-0.176-0.236l-0.172-0.236l-0.171-0.251l-0.156-0.252l-0.155-0.251l-0.146-0.258l-0.141-0.265l-0.134-0.265l-0.126-0.273l-0.118-0.273l-0.118-0.281l-0.102-0.281l-0.096-0.279l-0.096-0.29l-0.081-0.294l-0.075-0.294l-0.08-0.303l-0.059-0.294l-0.054-0.303l-0.043-0.303l-0.038-0.307l-0.038-0.312l-0.021-0.318l-0.008-0.319l-0.008-0.309l0.008-0.302l0.008-0.295l0.021-0.295l0.032-0.29l0.027-0.294l0.046-0.29l0.045-0.279l0.05-0.294l0.057-0.285l0.074-0.271l0.075-0.281l0.08-0.274l0.097-0.262l0.089-0.273l0.099-0.263l0.107-0.263l0.112-0.257l0.126-0.247l0.118-0.257l0.143-0.247l0.13-0.241l0.147-0.241l0.14-0.241l0.155-0.233l0.155-0.228l0.172-0.23l0.169-0.214l0.169-0.22l0.187-0.214l0.183-0.208L16.9,3.588l0.201-0.19l0.198-0.198L17.5,3.006l0.207-0.176l0.214-0.188l0.222-0.177l0.223-0.161l0.23-0.163l0.219-0.153l0.237-0.166l0.235-0.145l0.247-0.143l0.241-0.139l0.247-0.125l0.258-0.131l0.251-0.11l0.258-0.113l0.268-0.112l0.256-0.102l0.274-0.096l0.268-0.086l0.273-0.075l0.278-0.081l0.273-0.067l0.281-0.061l0.29-0.057l0.28-0.045l0.288-0.046l0.297-0.026L24.4,0.033l0.296-0.016L24.994,0L24.994,0L24.994,0L24.994,0z M24.994,0",
}


//修改默认json
graph.defaultJson = {
    setting: {
        zoom: 1,
        svgWidth: "100%",
        svgHeight: "100%",
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
            stroke: '#000',
            'stroke-width': 1,
            'stroke-dasharray': null,
            fill: "none"
        },
        title: {
            text: "线条名称",
            style: {
                fill: "#333",
                "text-anchor": "middle",
                size: 12
            }
        }

    }

}



//新增节点
function newNodeFn(option) {
    option = $.extend(true, {}, graph.defaultJson.object, option);
    a = graph.creatNode(option);

}






//tool
$("#tool_pointer").click(function() {
    graph.drawBrokenLine.init(false);
    graph.drawLine.init(false);
    graph.resetting({ draggable: true })
})

$("#tool_straightLine").click(function() {
    graph.drawBrokenLine.init(false);
    graph.drawLine.init(true);
})



$("#tool_brokenLine").click(function() {
    graph.drawLine.init(false);
    graph.drawBrokenLine.init(true);
})


$("#tool_zoomIn").click(function() {
    var zoom = graph.setting.zoom;
    if (zoom >= .1) {
        zoom -= .1;
    }
    graph.resetting({ zoom: zoom })
})
$("#tool_zoomOut").click(function() {
    var zoom = graph.setting.zoom;
    zoom += .1;
    graph.resetting({ zoom: zoom })
})

$("#tool_zoom").click(function() {
    graph.resetting({ zoom: 1 })
})


$("#tool_grid").click(function() {
    if ($(graph.draw.node).css('backgroundImage') == "none") {
        $(graph.draw.node).css('background', 'url(images/grid.png) 0 0 repeat');
    } else {
        $(graph.draw.node).css('background', 'none');
    }

})






//head

$("#saveJson").click(function() {
    $('.popSave>div').html("<textarea></textarea>")
    $(".popSave>div>textarea").val(JSON.stringify(graph.getJson())).parents(".popSave").show();
})

$("#saveSVG").click(function() {
    $('.popSave>div').html("<textarea></textarea>")
    $(".popSave>div>textarea").val(graph.getSVG()).parents(".popSave").show();
})

$("#saveImg").click(function() {
    $('.popSave>div').html("<img src='' alt=''/>")
    $(".popSave>div>img").attr('src', graph.getImg()).parents(".popSave").show();
})


$("#drawSet").click(function() {
    $(".popSet").show();
    $("#set_svgWidth").val(graph.setting.svgWidth)
    $("#set_svgHeight").val(graph.setting.svgHeight)
    $("#set_zoom").val(graph.setting.zoom)
})

//设置
$("#set_svgWidth").change(function(){
    graph.resetting({"svgWidth":$(this).val()})
})
$("#set_svgHeight").change(function(){
    graph.resetting({"svgHeight":$(this).val()})
})
$("#set_zoom").change(function(){
    graph.resetting({"zoom":$(this).val()})
})

//导入
$("#loadJSON").change(function(e) {


    var files = e.target.files;
    $(".header_body p").html(files[0].name)
    var reader = new FileReader();
    reader.readAsText(files[0], "UTF-8");
    reader.onload = function(evt) {
        var fileString = evt.target.result;
        graph.drawJson(JSON.parse(fileString))

    }
});





//右键菜单
document.oncontextmenu = function(e) {
    if ($(e.target).closest('svg')[0]) {
        return false;
    }
}

$(document).on("mouseup", graph.draw.node, rightMenuFn)

var copyData, targetData;

function rightMenuFn(e) {
    if (e.button == 2) {
        $(".rightMenu").show().css({
            left: e.clientX + 10,
            top: e.clientY + 10
        });

        if (typeof copyData != "undefined") {
            $("#rightMenu_paste_btn").parent().show();
        }
        if ($(e.target).closest("g[id^='node']")[0]) {
            $('#rightMenu_remove_btn,#rightMenu_copy_btn,#rightMenu_top_btn,#rightMenu_bottom_btn').parent().show();
            targetData = $(e.target).closest("g[id^='node']")[0].instance;
        } else if ($(e.target).closest("polyline[id^='line']")[0]) {
            $('#rightMenu_remove_btn,#rightMenu_top_btn,#rightMenu_bottom_btn').parent().show();
            targetData = $(e.target).closest("polyline[id^='line']")[0].instance;
        }
         else {
            $(".rightMenu,.rightMenu li").hide();
        }
    } else {
        $(".rightMenu").hide();
    }
}

$(document).on("click", "#rightMenu_remove_btn", function() {
    targetData.remove();

});
$(document).on("click", "#rightMenu_top_btn", function() {
    targetData.front()
});
$(document).on("click", "#rightMenu_bottom_btn", function() {
    targetData.back()
});
$(document).on("click", "#rightMenu_paste_btn", function() {

});
$(document).on("click", "#rightMenu_copy_btn", function() {

});





(function() {
    //拖拽新增节点
    var dragData;
    var offset = $(graph.draw.node).offset();

    function _dragstart(e) {
        var $dragLi = $(this);

        dragData = {
            left: 0,
            top: 0,
            id: graph.randId("node"),
            content: {
                type: $dragLi.attr("data-type"),
                source: $dragLi.attr("data-path")
            },
            title: {
                text: $dragLi.attr("data-name"),
            }
        }


        $("#dragImg").css({

            top: e.layerY,
            left: e.layerX
        });
        $("#dragImg img").attr("src", $dragLi.attr("data-src"));
        $(document).on("mousemove", _dragover);
        $(document).one("mouseup", _dragUp);
    };

    function _drop(e) {
        $(document).off("mousemove", _dragover);
        $("#dragImg").hide();
        e = e.originalEvent;
        dragData.left = (e.clientX - offset.left) * (1 / graph.setting.zoom) - 12;
        dragData.top = (e.clientY - offset.top) * (1 / graph.setting.zoom) - 12;


        var drawHeight = $(graph.draw.node).height()
        var drawWidth = $(graph.draw.node).width()
        if (dragData.left > drawWidth) {
            graph.resetting({ svgWidth: dragData.left + 50, svgHeight: drawHeight });
            graph.setting.svgHeight = drawHeight;
            graph.setting.svgWidth = dragData.left + 50;
        }
        if (dragData.top > drawHeight) {
            graph.resetting({ svgWidth: drawWidth, svgHeight: dragData.top + 50 })
            graph.setting.svgHeight = dragData.top + 50;
            graph.setting.svgWidth = drawWidth;
        }
        newNodeFn(dragData);
    }

    function _dragover(e) {
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        $("#dragImg").css({
            display: "block",
            top: e.clientY,
            left: e.clientX
        });
    }
    $(".shape li,.picture li,.text li").on("mousedown", _dragstart);

    function _dragUp(e) {
        $("#dragImg").hide();
        $(document).off("mousemove", _dragover);
        if ($(document.elementFromPoint(e.clientX, e.clientY)).closest(".editor")[0]) {
            _drop(e);
        }
    }
    //兼容ie9-ie10
    $("#dragImg").on("mouseup", function(e) {
        if ($(".editor").offset().left < e.clientX && $(".editor").offset().left + $(".editor").width() > e.clientX && $(".editor").offset().top < e.clientY && $(".editor").offset().top + $(".editor").height() > e.clientY) {
            _drop(e);
        }
    });
})()










//例子


/*
//更换节点背景
$("#tool_test").click(function(){
    var option={
         type: "rect",
    }
   var example= graph.select("g[id^='node']")[0];
   example.changeContainer(option);
})*/




/*//更换节点图标
$("#tool_test").click(function(){
    var option={
         type: "path",
         source: 'running',
    }
   var example= graph.select("g[id^='node']")[0];
   example.changeContent(option);
})
*/


/*//添加标记
$("#tool_test").click(function(){
    var option={
            type:'path',
            source:"M29.229,0L44.93,5.023L31.914,17.447l9.258,5.754L10.844,49.833l8.187-21.652l-8.723-5.434L29.229,0",
            offsetX:5,
            offsetY:-5,
            scaleX:.3,
            scaleY:.3
    }
   var example= graph.select("g[id^='node']")[0];
   example.addSign(option);

   //删除标记
    setTimeout(function(){
        example.removeSign();
    },1000)
})*/



/*//开启/关闭线条动画
$("#tool_test").click(function(){

   var example= graph.select("polyline[id^='line']")[0];
   example.animation(true);

   //关闭
   setTimeout(function(){
        example.animation(false);
    },3000)
    
})*/



//开启/关闭线条动画
$("#tool_test").click(function(){

   var example= graph.select("polyline[id^='line']")[0];
   example.animation(true);

   //关闭
   setTimeout(function(){
        example.animation(false);
    },30000)
    
})
