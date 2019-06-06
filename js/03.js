const app = new Vue({
	el : '#app',
	data : { 
		titulo: 'Tasks',
		tarea: '',
		tareas : [ ]
	},
	methods : {

		agregar () { 
			if(this.tarea !== ''){
				this.tareas.push( { nombre : this.tarea, estado: false } ); 
				this.tarea = '';  
				this.localStorage();
			}
		},
		editar (index) {
			this.tareas[index].estado = true;
			this.localStorage();	
		},
		eliminar (index) {
			this.tareas.splice( index, 1 );
			this.localStorage();
		},
		localStorage () {
			localStorage.setItem('tasks-vue', JSON.stringify(this.tareas) ); 
		}

	},
	created : function() {
		let datosDB = JSON.parse(localStorage.getItem('tasks-vue'));
		if(datosDB === null){
			this.tareas = [];
		}else{
			this.tareas = datosDB;
		}
	}
})