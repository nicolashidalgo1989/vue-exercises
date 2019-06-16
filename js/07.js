Vue.component('calculadora',{
	template: 
	`
		<div>

			<div class="container my-5">	
				
				<div class="row text-center justify-content-center">


					<div class="col-1">
					
						<button class="btn btn-primary" @click="disminuir(2)"> - </button>
				
					</div>

					<div class="col-3">

						<p class="h3"> {{ numero }} </p> 

					</div>
					
					<div class="col-1">

						<button class="btn btn-primary" @click="aumentar"> + </button>	
						
					</div>

				</div>

			</div>

			<resultado></resultado>
 
		</div>
	`,
	computed: {
		...Vuex.mapState(['numero'])
	},
	methods: {
		...Vuex.mapMutations(['aumentar', 'disminuir'])
	}
});

Vue.component('resultado',{
	template: 
	`
		<div>

			<div class="container">

				<div class="row justify-content-center text-center">

					<p class="h3">Resultado: {{ numero }}</p>

				</div>
			
			</div>

			<div class="container">

				<div class="row justify-content-center text-center">

					<button class="btn btn-success my-5" @click="obtenerCursos">Obtener Cursos</button>
					
				</div>
			
			</div>
			
			<div class="container">

				<div class="row justify-content-center text-center">
				
					<ul class="list-unstyled">
						<li v-for="curso of cursos">{{ curso.nombre }}</li>
					</ul>

				</div>
			
			</div>

		</div>
	`,
	computed: {
		...Vuex.mapState(['numero', 'cursos'])
	},
	methods: {
		...Vuex.mapActions(['obtenerCursos'])
	}
});

const store = new Vuex.Store({

	state: {
		numero: 10,
		cursos: []
	},

	mutations: {
		aumentar(state){
			state.numero++
		},
		disminuir(state, n){
			state.numero -= n
		},
		llenarCursos(state, cursosAccion){
			state.cursos = cursosAccion
		}
	},
	
	actions: {
		obtenerCursos: async function({ commit }) {
			const data = await fetch('js/datos.json');
			const cursos = await data.json();
			commit('llenarCursos', cursos);
		}
	}

});

new Vue({
	el: '#app',
	store : store
});