Vue.component('contador',{
	template: `
	<div>
		 <div class="progress my-4">
			<div class="progress-bar" role="progressbar" :aria-valuenow="contador" aria-valuemin="0" aria-valuemax="100" 
			:style="{ 'width' : contador + '%' }"
			:class="progreso"
			>{{ contador }}</div>
		</div>

 		<div class="d-flex align-items-center my-3">
 			<button class="btn btn-primary" @click="if(contador > 0 )--contador">-</button>
 			<p class="mx-3 h4"> {{ contador }} </p>
 			<button class="btn btn-primary" @click="if(contador < 100 )++contador">+</button>
 		</div>
 	</div>	
	`,
	data(){
		return{ 
			contador : 20
		}
	}
})