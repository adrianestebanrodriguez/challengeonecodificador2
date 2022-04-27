var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopiar = document.querySelector("#btn-copiar");
var textArea = document.querySelector("#areatexto");
var textRespuesta = document.querySelector("#arearespuesta");

function encriptarTexto (text) {
  respuesta = ""
  for(var i=0;i<text.length;i++){
    letter = text.charAt(i)
    code = text.charCodeAt(i)
    if((code<97 && code!=32) || (code>122 && code!=32)){
      respuesta = ""
      return respuesta
    }
    else{if(letter=="a"){
        respuesta = respuesta + "ai"
      }else if(letter=="e"){
        respuesta = respuesta + "enter"
      }else if(letter=="i"){
        respuesta = respuesta + "imes"
      }else if(letter=="o"){
        respuesta = respuesta + "ober"
      }else if(letter=="u"){
        respuesta = respuesta + "ufat"
      }else if(letter=="m"){
        respuesta = respuesta + "xztr"  
      }else{
        respuesta = respuesta + letter
      }
    }}
  return respuesta
}

function desencriptarTexto (text) {
  for(var i=0;i<text.length;i++){
    letter = text.charAt(i)
    code = text.charCodeAt(i)
    if((code<97 && code!=32) || (code>122 && code!=32)){
      respuesta = ""
      return respuesta
    }}

  text = text.replaceAll('ai', 'a');
  text = text.replaceAll('enter', 'e');
  text = text.replaceAll('imes', 'i');
  text = text.replaceAll('ober', 'o');
  text = text.replaceAll('ufat', 'u');
  text = text.replaceAll('xztr', 'm');
  return text
}

btnEncriptar.addEventListener("click", function(){
  textoEncriptado = encriptarTexto(textArea.value)
  if(textoEncriptado){
    if(textRespuesta.classList.length > 0){
      textRespuesta.classList.remove("Error")
    }
    textRespuesta.value = textoEncriptado
  }
  else{
    textRespuesta.classList.add("Error")
    textRespuesta.value = "El texto no debe contener caracteres especiales o tildes y debe ser escrito solo con minúsculas"
  }
})
btnDesencriptar.addEventListener("click", function(){
  textoDesencriptado = desencriptarTexto(textArea.value)
  if(textoDesencriptado){
    if(textRespuesta.classList.length > 0){
      textRespuesta.classList.remove("Error")
    }
    textRespuesta.value = textoDesencriptado
  }
  else{
    textRespuesta.classList.add("Error")
    textRespuesta.value = "El texto no debe contener caracteres especiales o tildes y debe ser escrito solo con minúsculas"
  }
})

btnCopiar.addEventListener("click", function(){
    textRespuesta.select()
    document.execCommand('copy')
    textRespuesta.setSelectionRange(0,0)
})