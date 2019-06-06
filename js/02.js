const app = new Vue({
	el : '#app',
	data : {
		colors: [],
		selectedColor: '',
		color: false
	},
	mounted() {

		let colors = ['bg-danger','bg-warning','bg-success','bg-primary'];
    	
    	this.colors = Object.assign({}, this.colors, colors);
    	this.selectedColor = this.colors[0];
	
	}
})