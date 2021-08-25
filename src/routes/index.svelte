<script>
	import Timeline from '../components/timeline.svelte';
	import data from './data.json';
	let { works, educations } = data;
	let green = '#2ecc71';
	let blue = '#3498d8';
	let image1 = '/飞红包的人.png';
	let image2 = '/开心的人.png';
	let resumeImg = '简历.png';
</script>

<div class="print:hidden" style="height: 60px" />
<div
	class="fixed w-full print:hidden opacity-100 align-bottom z-10"
	style="margin-top: -60px; height: 60px; background: #3498d8; padding: 10px 10px"
>
	<img class="inline-block align-top" style="height: 36px" src={resumeImg} alt="" />
	<span
		class="text-white inline-block align-middle"
		style="width: 100px;font-size: 28px;line-height: 36px;">简历</span
	>
	<a
		href="#work"
		class="inline-block text-center text-yellow-200 bg-blue-700 rounded align-bottom"
		style="width: 80px; font-size: 16px">工作经历</a
	>
	<a
		href="#education"
		class="inline-block text-center text-yellow-200 bg-blue-700 rounded align-bottom"
		style="width: 80px; font-size: 16px">教育经历</a
	>
</div>
<a
	class="text-white fixed bg-yellow-600 print:hidden iconfont text-center align-middle"
	style="width: 50px; height: 50px; right: 10px; top: 80%; font-size: 24px; line-height: 50px; border-radius: 25px"
	href="javascript:window.print();">&#xe65a;</a
>
<div class="w-full flex flex-row justify-center container z-0">
	<div class="flex-1 flex flex-col print:hidden sm:hidden xs:hidden">
		<img class="block w-2/3" style="max-width: 360px" src={image1} alt="" />
	</div>
	<div class="bg-white md:w-768 lg:w-768 xl:w-768 2xl:w-768 " style="padding: 10px 20px;">
		<div class="flex flex-row justify-between">
			<h1 class="text-center" style="font-size: 24px">邹晨️</h1>
			<article style="margin-left: 20px">
				<section>
					<span class="iconfont">&#xeb42;</span>
					<span class="description">
						<span>前端</span>
						<span>架构</span>
						<span>产品</span>
					</span>
				</section>
				<section>
					<span class="iconfont">&#xe660;</span>
					<span>18880441792</span>
				</section>
				<section>
					<span class="iconfont">&#xe69d;</span>
					<span>669629818@qq.com</span>
				</section>
			</article>
		</div>
		<article>
			<div id="work" />
			<Timeline bind:items={works} --color={blue} />
			<div id="education" />
			<Timeline bind:items={educations} --color={green} />
		</article>
	</div>
	<div class="flex-1 flex flex-col justify-end items-end print:hidden sm:hidden xs:hidden">
		<img class="block w-2/3" src={image2} alt="" />
	</div>
</div>
<div class="w-full print:hidden" style="height: 120px; background: #2ecc71" />

<style>
	.container {
		max-width: unset;
		background-image: linear-gradient(to bottom, #3498d8, #2ecc71);
	}
</style>
