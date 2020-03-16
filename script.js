var data=[
 {
   "rank": 1,
   "city": "新北市",
   "cata": "直轄市",
   "count": "4,020,572",
   "growth": 1876
 },
 {
   "rank": 2,
   "city": "臺中市",
   "cata": "直轄市",
   "count": "2,815,704",
   "growth": 443
 },
 {
   "rank": 3,
   "city": "高雄市",
   "cata": "直轄市",
   "count": "2,774,571",
   "growth": 1373
 },
 {
   "rank": 4,
   "city": "臺北市",
   "cata": "直轄市",
   "count": "2,642,877",
   "growth": -2164
 },
 {
   "rank": 5,
   "city": "桃園市",
   "cata": "直轄市",
   "count": "2,250,954",
   "growth": 1917
 },
 {
   "rank": 6,
   "city": "臺南市",
   "cata": "直轄市",
   "count": "1,880,216",
   "growth": -690
 },
 {
   "rank": 7,
   "city": "彰化縣",
   "cata": "縣",
   "count": "1,272,449",
   "growth": -353
 },
 {
   "rank": 8,
   "city": "屏東縣",
   "cata": "縣",
   "count": "818,493",
   "growth": -691
 },
 {
   "rank": 9,
   "city": "雲林縣",
   "cata": "縣",
   "count": "680,963",
   "growth": -343
 },
 {
   "rank": 10,
   "city": "新竹縣",
   "cata": "縣",
   "count": "564,296",
   "growth": 363
 },
 {
   "rank": 11,
   "city": "苗栗縣",
   "cata": "縣",
   "count": "545,433",
   "growth": -26
 },
 {
   "rank": 12,
   "city": "嘉義縣",
   "cata": "縣",
   "count": "502,718",
   "growth": -395
 },
 {
   "rank": 13,
   "city": "南投縣",
   "cata": "縣",
   "count": "493,984",
   "growth": -128
 },
 {
   "rank": 14,
   "city": "宜蘭縣",
   "cata": "縣",
   "count": "454,161",
   "growth": -17
 },
 {
   "rank": 15,
   "city": "新竹市",
   "cata": "市",
   "count": "449,113",
   "growth": 310
 },
 {
   "rank": 16,
   "city": "基隆市",
   "cata": "市",
   "count": "368,932",
   "growth": 39
 },
 {
   "rank": 17,
   "city": "花蓮縣",
   "cata": "縣",
   "count": "326,247",
   "growth": -184
 },
 {
   "rank": 18,
   "city": "嘉義市",
   "cata": "市",
   "count": "267,653",
   "growth": -37
 },
 {
   "rank": 19,
   "city": "臺東縣",
   "cata": "縣",
   "count": "216,633",
   "growth": -148
 },
 {
   "rank": 20,
   "city": "金門縣",
   "cata": "縣",
   "count": "140,253",
   "growth": 68
 },
 {
   "rank": 21,
   "city": "澎湖縣",
   "cata": "縣",
   "count": "105,147",
   "growth": -60
 },
 {
   "rank": 22,
   "city": "連江縣",
   "cata": "縣",
   "count": "13,080",
   "growth": -9
 }
]

data.forEach(d=>{
  d.count = +d.count.split(",").join("")
})

var svg = d3.select("svg")
svg.attr("width",1920).attr("height",540)

var scaleHeight = d3.scaleLinear()
.domain([0,4000000])
.range([0,250])

var scaleColor= d3.scaleLinear()
  .domain([0,4000000])
.range(["blue","#cc0000"])
var groups = svg.selectAll("g.city")
  .data(data)
  .enter()
  .append("g")
groups.append('text')
.text(d=>d.city)
.attr("y",525)
.attr("x",(d,i)=>i*100+10)

// groups.append("rect")
// .attr("x",(d,i)=>i*100+10)
// .attr("y",(d)=>-scaleHeight(d.count)+500)
// .attr("height",(d)=>scaleHeight(d.count))
// .attr("width",30)
// .attr("fill",(d)=>scaleColor(d.count))
groups.append("circle")
      .attr("cx",(d,i)=>i*100+35)
      .attr("cy",(d)=>400-scaleHeight(d.count)/2)
      .attr("r",0)
.attr("fill",(d)=>scaleColor(d.count))
.transition()
.duration(1000)
.delay((d,i)=>i*200)
.attr("r",(d)=>scaleHeight(d.count)/8)
groups.append("text")
      .text(d=>d.count)
      .attr("y",(d)=>450-scaleHeight(d.count))
      .attr("x",(d,i)=>i*100+10)
      .style("font-size","12px")

var line=d3.line()
.x((d,i)=>i*100)
.y((d,i)=>-d.count/10000+500)

svg.append("path")
.datum(data)
.attr("d",line)
.attr("fill","none")
.attr("stroke","black")