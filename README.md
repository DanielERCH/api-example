# **Pasos para ejecutar las pruebas**
1° Tener instalado **NodeJS** y **NPM**

2° Ubicarse en la carpeta que guardará el proyecto y ejecutar los siguientes comandos:
 
	> git clone https://github.com/DanielERCH/api-example.git  
		
3° Ingresar al proyecto :

	> cd shop-example
	
4° Instalar las dependencias:
 
	> Ejecutar npm install

5° Para ejecutar la automatización:
	
	> npm start
	 
6° Generar los archivos para los reportes: 

	>npm run report

>Podrás ejecutar npm run delete:results para eliminar los reportes (archivos) creados anteriormente esto para evitar cualquier error.

7° Para visualizar los reportes: 

	>npm run mochawesome:report
>En la terminal te mostrará una ruta parecida a :
>**\MIRUTA\api-example\mochawesome-report\mochawesome.html**, copiar y pegarlo en la barra del navegador 

8° **FIN**
