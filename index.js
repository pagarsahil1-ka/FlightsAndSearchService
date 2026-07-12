const express = require("express");
const setupAndStartServer = async()=>{ 
	const app=express();
	const PORT = 3000;

	app.listen(PORT,()=>{
		console.log('server started at ${PORT}')

	})





}
setupAndStartServer();
