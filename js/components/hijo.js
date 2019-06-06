Vue.component('hijo',{
	template:`
		<div class="p-5 bg-success">
			<h2 class="mb-4"> {{ titulo }} </h2>
			<h5> Prop: {{ numero }} </h5>	 
			<button @click="++numero">+</button>	
		</div>
	`,
	data(){
		return{
			titulo : 'Componente Hijo',
			nombre : 'Componente Padre'
		}
	},
	props: ['numero'],
	mounted(){
		this.$emit('nombreHijo', this.nombre)
	}
})