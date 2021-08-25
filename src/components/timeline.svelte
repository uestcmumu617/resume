<script>
	import Card from './card.svelte';
	export let items = [];
</script>

<div class="shaft">
	{#each items as item}
		<div class="segment w-full">
			<div>
				<h6>
					<span class="inline-block" style="width: 100px;">
						{#if item.companyName}
							{item.companyName}
						{/if}
						{#if item.outsourcing}
							<sup style="font-size: 12px">外包</sup>
						{/if}
					</span>
					{#if item.city}
						<sub
							><span class="iconfont text-red-600">&#xe615;</span>
							<span class="text-gray-400">{item.city}</span>
						</sub>
					{/if}
				</h6>
			</div>
			<article style="margin-left: 65px">
				<Card bind:data={item} />
			</article>
			<time class="text-right">{item.duration}</time>
		</div>
	{/each}
</div>

<style>
	@media all {
		time {
			font-size: 16px;
			font-weight: bold;
			text-align: left;
			padding-left: 10px;
		}
		.shaft {
			display: flex;
			flex-flow: row wrap;
			border-left: 5px solid var(--color, #2ecc71);
		}
		.segment {
			display: flex;
			position: relative;
			flex-flow: column;
			align-items: stretch;
		}
		.segment div {
			margin-left: 65px;
			display: flex;
			flex-flow: row;
			justify-content: space-between;
			align-items: center;
		}
		.segment div h6 {
			margin-right: 10px;
			font-size: 16px;
		}
		.segment div div {
			flex: 1;
			height: 5px;
			-webkit-print-color-adjust: exact;
			background: var(--color, #2ecc71);
		}
	}
</style>
