<script>
	export let data = {};
</script>

{#each data.projects as project}
	<p>
		<span class="underline">{project.name}</span>
		{#if project.type?.includes('pc')}
			<span class="iconfont">&#xe608;</span>
		{/if}
		{#if project.type?.includes('mobile')}
			<span class="iconfont">&#xe616;</span>
		{/if}
		{#if project.type?.includes('cloud')}
			<span class="iconfont">&#xe6cf;</span>
		{/if}
	</p>
	{#if project.job}
		<p>
			<em>-职务</em>
			<span>{project.job}</span>
		</p>
	{/if}
	{#if project.manage}
		<p>
			<em>-管理</em>
			<span>{project.manage}</span>
		</p>
	{/if}
	{#if project.technology}
		<p>
			<em>-技术</em>
			<span>{project.technology}</span>
		</p>
	{/if}
	{#if project.business}
		<p>
			<em>-业务</em>
			<span>{project.business}</span>
		</p>
	{/if}
	{#if project.degree}
		<p>
			<em>-学位</em>
			<span>{project.degree}</span>
		</p>
	{/if}
	{#if project.course}
		<p>
			<em>-课程</em>
			<span>{project.course}</span>
		</p>
	{/if}
{/each}

<style>
	p {
		margin-block-start: 2px;
		margin-block-end: 2p;
	}
</style>
