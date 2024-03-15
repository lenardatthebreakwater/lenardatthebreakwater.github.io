d3.csv('/school-activity/Chapter3Data.csv', (dataset) => {
	console.log(typeof(dataset))
})

/*
d3.select('body')
	.selectAll('p')
	.data(nums)
	.enter()
	.append('p')
	.text((d) => d)
*/
