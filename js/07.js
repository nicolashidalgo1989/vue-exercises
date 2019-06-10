Vue.component('titulo',{
	template: 
	`
		<div>
			<h1>numero {{ numero }}</h1>
			<hijo></hijo>
		</div>
	`,
	computed: {
		numero(){
			return store.state.numero;
		}
	}
});

Vue.component('hijo',{
	template: 
	`
		<div>
			<button class="btn btn-primary" @click="$store.commit('aumentar')"> + </button>	
			<h1>numero {{ $store.state.numero }}</h1>
		</div>
	`
});

const store = new Vuex.Store({

	state: {
		numero: 10
	},
	mutations: {
		aumentar(state){
			state.numero++;
		}
	}

});

new Vue({
	el: '#app',
	store : store
});