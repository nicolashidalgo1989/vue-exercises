Vue.component('padre',{
	template:`
		<div class="bg-dark p-5 text-white">
			<h1 class="mb-3"> {{ nombrePadre }} </h1>
			<p class="mb-4">{{ numeroPadre }}</p>
			<button class="btn btn-primary" @click="++numeroPadre">+</button>
			<hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo> 
		</div>
	`,
	data(){
		return{ 
			numeroPadre : 10,
			nombrePadre : ''
		}
	}
})