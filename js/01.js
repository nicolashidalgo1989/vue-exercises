const app = new Vue({
	el : '#app',
	data: {
		titulo : 'Stock', 
		stock : [
			{ nombre: 'Books', cantidad: 100},
			{ nombre: 'Vynils', cantidad: 0},
			{ nombre: 'VHS', cantidad: 5}
		],
		item : '',
		total : 0
	},
	methods : {
		agregar (){
			if(this.item !== '') {
				this.stock.push(
					{ nombre:this.item, cantidad:1 }
				);
			}
			this.item = '';
		},
		sumar (item) {
			if(item.cantidad < 100) {
				++item.cantidad;
			}
		},
		restar (item) {
			if(item.cantidad > 0) {
				--item.cantidad;
			}
		}
	},
	computed : {
		sumarStock () {
			this.total = 0;
			for(item of this.stock){
				this.total = this.total + item.cantidad;
			}
			return this.total;
		}
	}
})