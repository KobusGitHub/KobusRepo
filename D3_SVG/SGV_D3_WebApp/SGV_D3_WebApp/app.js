
function onLoad(svg, error)
{
    $('rect').click(function () {
        alert("Hallo rectangle")
    })
}



var data = [
    { name: "Name1", value: 5 },
    { name: "Name2", value: 10 },
    { name: "Name3", value: 15 },
    { name: "Name4", value: 20 }
];

var width = 300;
var height = 300;
var barWidht = width / data.length;

var chart = d3.select(".chart")
.attr("width", width)
.attr("height", height);

var y = d3.scale.linear();
y.range([height, 0]);
y.domain([0, d3.max(data, function(d) { return d.value; })]);

var x = d3.scale.linear();
x.range([0, width]);


var bar = chart.selectAll("g")
    .data(data)
    .enter().append("g")
    .attr("transform", function(d, i) { return "translate(" + i * barWidht + ", 0)"; });


var myRect = bar.append("rect");
myRect.attr("y", function (d) { return y(d.value) });
myRect.attr("height", function (d) { return height - y(d.value) - 20; });
myRect.attr("width", barWidht - 5);




function blockClick(b) {
    console.log(b);
    var message = "BlockText:" + b.BlockText;
    alert(message);
    
}



var heatmapData = [
{ BlockText: "B1", XIndex: 0, YIndex: 0 },
{ BlockText: "B2", XIndex: 1, YIndex: 0 },
{ BlockText: "B3", XIndex: 2, YIndex: 0 },
{ BlockText: "B4", XIndex: 0, YIndex: 1 },
{ BlockText: "B5", XIndex: 1, YIndex: 1 },
{ BlockText: "B6", XIndex: 2, YIndex: 1 },
{ BlockText: "B7", XIndex: 0, YIndex: 2 },
{ BlockText: "B8", XIndex: 1, YIndex: 2 },
{ BlockText: "B9", XIndex: 2, YIndex: 2 },
];


var heatmapContainer = d3.select(".heatmap")
    .attr("width", 300)
    .attr("height", 300);

var blocksGroup = heatmapContainer.selectAll("g")
    .data(heatmapData)
    .enter()
    .append("g")

blocksGroup.append("rect")
    .attr("x", function (d) {
        return d.XIndex * 100 + 5;
    })
    .attr("y", function (d) {
        return d.YIndex * 100 + 5;
    })
    .attr("height", 90)
    .attr("width", 90)
    .attr("fill-opacity", 0.3)
    .style("fill", "green")
    .on("click", blockClick)

blocksGroup.append("text")
    .attr("x", function (d) {
        return d.XIndex * 100 + 5;
    })
    .attr("y", function (d) {
        return d.YIndex * 100 + 5;
    })
    .attr("dy", "50")
    .attr("dx", "40")
    .style("color", "green")
    .on("click", blockClick)
    .text(function (d) { return d.BlockText; });
   
    



var circleData = [
{ circleText: "C1", XIndex: 0, YIndex: 0 },
{ circleText: "C2", XIndex: 1, YIndex: 0 },
{ circleText: "C2", XIndex: 2, YIndex: 0 },
{ circleText: "C3", XIndex: 0, YIndex: 1 },
{ circleText: "C4", XIndex: 1, YIndex: 1 },
{ circleText: "C4", XIndex: 2, YIndex: 1 },
{ circleText: "C3", XIndex: 0, YIndex: 2 },
{ circleText: "C4", XIndex: 1, YIndex: 2 },
{ circleText: "C4", XIndex: 2, YIndex: 2 },
];


function changeColor(c)
{
    d3.selectAll("circle").transition().duration(5000).style("fill", "red");
    d3.selectAll("circle").transition().duration(5000).delay(5000).style("fill", "white");
    d3.selectAll("circle").transition().duration(5000).delay(10000).style("fill", "purple");
}

var circleContainer = d3.select(".myCircle")
    .attr("width", 300)
    .attr("height", 300);
    

var circles = circleContainer.selectAll("circle ")
    .data(circleData)
    .enter()
    .append("circle")

var circleAttributes = circles
    .attr("cx", function (d) {
        return d.XIndex * 100 + 50;
    })
    .attr("cy", function (d) {
        return d.YIndex * 100 + 50;
    })
    .attr("r", 45)
    .attr("width", 90)
    .style("fill", "black")
    .on("click", changeColor);

