const app = new Vue({
	el : '#app',
	data : {  
		mensaje : 'hola',
		contador : 20
	},
	computed : {
		invertido(){
			return this.mensaje.split('').reverse().join('');
		},
		progreso(){
			return{
				'bg-info': this.contador <= 20,
				'bg-success': this.contador > 20,
				'bg-warning': this.contador > 50,
				'bg-danger': this.contador > 80
			}
		}
	}
})