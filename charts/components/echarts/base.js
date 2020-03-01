//因为在做webpack配置的时候，把三方库作为公共包了，这里引入会导致三方库被再次打包到组件里，不要import引入
import echarts from 'echarts';
//监听页面放大缩小
window.addEventListener('resize', onResize);

let resizeTimeout;
let $chart = echarts.init(document.getElementById('chart'));

function onResize() {
	clearTimeout(resizeTimeout);
	console.log('resize');
	console.log(document.body.clientWidth);
	resizeTimeout = setTimeout(() => {
		$chart.resize();
	}, 500);
}

export const onMessage = receiveMessage => {
	window.addEventListener('message', receiveMessage);
};
export function createChart(option) {
	$chart.setOption(option, true);
}