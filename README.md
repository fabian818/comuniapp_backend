# Comuniapp

La app que te informará y responderá tus dudas sobre los sucesos dentro de la universidad "San Luis Gonzaga"

## Web Services

## USUARIO

+ facebook -> /api/users/facebook.json?token=

## PUBLICACIONES

+ index -> http://comuniapp.herokuapp.com/api/publications/index.json /* muestra todas las publicaciones */
+ show -> http://comuniapp.herokuapp.com/api/publications/show.json?publication_id= /* muestra una publicacion en especifico */
+ create -> http://comuniapp.herokuapp.com/api/publications/create.json?title=''&body=''&image_url=''&has_image=false/true /* crea una publicacion */
+ update -> http://comuniapp.herokuapp.com/api/publications/update.json?publication_id=&title=''&body=''&image_url=''&has_image=false/true /* modifica la publicacion buscada por su id*/
+ destroy -> http://comuniapp.herokuapp.com/api/publications/destroy.json?publication_id= /* elimina una publicacion buscada */

## PREGUNTAS

+ index -> http://comuniapp.herokuapp.com/api/questions/index.json /* muestra todas las preguntas */
+ show -> http://comuniapp.herokuapp.com/api/questions/show.json?question_id= /* muestra una pregunta en especifico */
+ create -> http://comuniapp.herokuapp.com/api/questions/create.json?title=''&body=''&answer='' /* crea una pregunta */
+ update -> http://comuniapp.herokuapp.com/api/questions/update.json?question_id=&title=''&answer=''/* modifica la pregunta buscada por su id*/
+ destroy -> http://comuniapp.herokuapp.com/api/questions/destroy.json?question_id= /* elimina una pregunta buscada */


good luck hoes! c: