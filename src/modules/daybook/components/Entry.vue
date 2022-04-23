<template>
<div
	class="entry-container mb-3 pointer p-2"
	@click="$router.push({name:'entry', params:{id:10}})"
>
	<div class="entry-title d-flex">
		<span class="text-success fs-5 fw-bold">15</span>
		<span class="mx-1 fs-5">Julio</span>
		<span class="mx-2 fw-light">2022, jueves</span>
	</div>
	<div class="entry-description">
		Ipsum exercitation adipisicing nisi aliquip consectetur in quis laborum aliquip voluptate fugiat. Occaecat eu elit eu qui occaecat incididunt exercitation dolor qui. Nulla sunt ullamco officia culpa officia laborum ea aliqua reprehenderit minim in fugiat. Et mollit adipisicing velit eiusmod reprehenderit deserunt cillum id nostrud mollit nostrud do. Id do consequat eu elit ipsum ad nulla in est laborum tempor. Reprehenderit eiusmod consectetur consectetur excepteur qui aute amet anim ad consequat fugiat. Veniam officia mollit laborum ut dolor cupidatat cupidatat.
	</div>

</div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
	border-bottom: 1px solid #2c3e50;
	transition: 0.2s all ease-in;
	&:hover{
		background-color: lighten($color: grey, $amount: 45);
		transition: 0.2s all ease-in;
	}
	.entry-description{
		font-size: 12px;
	}
}




</style>