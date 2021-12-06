//console.log('correcto')


/*-------------------------- Seccion desarrollaba por el modelo Ajax  --------------------------*/


/*-------------------------- boton automatico para traer los datos  --------------------------*/


document.querySelector('#boton1').addEventListener('click', traerDatos());

/*-------------------------- funcion de traer datos desde los url  --------------------------*/


function traerDatos() {

  /*-------------------------- funcion de traer datos desde los url  --------------------------*/

  const xhttp = new XMLHttpRequest();
  const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
  const url2 = 'https://jsonplaceholder.typicode.com/posts/2/comments';
  const url3 = 'https://jsonplaceholder.typicode.com/posts/3/comments';
  const url4 = 'https://jsonplaceholder.typicode.com/posts/4/comments';
  const url5 = 'https://jsonplaceholder.typicode.com/posts/5/comments';


  xhttp.open('GET', url,url2,url3,url4,url5,true);

  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(this.responseText);
      let datos = JSON.parse(this.responseText);
      // console.log(datos);

      let res = document.querySelector('#res');
      res.innerHTML = '';

/*-------------------------- visualzacion de datos en el index.html --------------------------*/


      for (let item of datos) {
        //  console.log(item);

        /*-------------------------- Estilo por columna con los datos  --------------------------*/

        res.innerHTML += `
                <tr>
                  <ul>
                    
                  
                  <a style="color: #19c219;"> <li class="li1"> ${item.email} </a>
                  <a style="color: #555454;"> ID: ${item.id} </a>
                  <a style="color: #555454;"> - ${item.name} </a>
                  <a style="color: #555454;"> - PostId: ${item.postId} </a>
                  </li>
                  
                  </ul>
                </tr>
                

                <ul>
                
                 
                 <td style="color: #000000;">
                 <li class="li2">${item.body}</li>
                
                
                  <a style="color: #3ec309;">
                    <br><b>Continue this thread -></b></br>
                    </a>
                 </td>
                 </ul>
                 
              </tr>
              `
      }
    }
  }

}

