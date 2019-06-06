//componentes
Vue.component('titulo',{
	template: `
	<div>
		<h1>Componente Padre</h1>
		<h2 class="my-5">{{ numero }}</h2>
		<hr>
		<hijo></hijo>
	</div>
	`,
	computed:{
		...Vuex.mapState(['numero'])
	}
});

Vue.component('hijo', {
	template: `
	<div>
		<h2>Componente Hijo</h2>
		<form class="form-inline my-5">	
			<div class="form-group d-flex justify-content-center aling-items-center">	
				<button v-if="numero > 0" class="btn-sm btn btn-primary" @click.prevent="disminuir(2)">-</button>
				<button v-else class="btn-sm btn btn-primary" disabled>-</button>
				<h5 class="mx-3 my-0"> {{ numero }} </h5>
				<button class="btn-sm btn btn-primary" @click.prevent="aumentar">+</button>
			</div>
		</form>
		<hr>
		<button class="btn-sm btn btn-success my-4" @click="obtenerCursos">Obtener cursos</button>
		<ul class="list-unstyled">
			<li v-for="curso of cursos">{{ curso.nombre }}</li>
	</ul>	
	</div>
	`,
	computed:{
		...Vuex.mapState(['numero', 'cursos']),
	},
	methods:{
		...Vuex.mapMutations(['disminuir', 'aumentar']),
		...Vuex.mapActions(['obtenerCursos'])
	}
});

//store vuex
const store = new Vuex.Store({

	state:{

		numero: 10,
		cursos: []

	},

	mutations:{

		disminuir(state, n){
			if(state.numero > 0){ 
				state.numero -= n; 
			}
		},

		aumentar(state){
			state.numero++;
		},

		llenarCursos(state, cursosAccion){
			state.cursos = cursosAccion;
		}

	},

	actions:{

		obtenerCursos: async function ( { commit } ){
			const data = await fetch('datos.json');
			const cursos = await data.json();
			commit('llenarCursos', cursos);
		}

	}
});

//instancia de vue
new Vue({
	el:'#app',
	store : store
});