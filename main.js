function getfile(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function()
  {
    if(xhr.readyState === 4 && xhr.status =="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
getfile("data.json",function(text){
  var data =JSON.parse(text);
  console.log(data);
  details(data.basics);
  career(data.careerobjective);
})
var child=document.querySelector(".childone")
function details(det)
{
var img=document.createElement("img");
img.src=det.image;
child.appendChild(img);
var name= document.createElement("h3");
name.textContent =det.name;
child.appendChild(name);
var phoneno=document.createElement("h3");
phoneno.textContent=det.phoneno;
child.appendChild(phoneno);
var mail=document.createElement("a");
mail.href= "mailto:hemaparvathaneni@gmail.com";
mail.textContent=det.email;
child.appendChild(mail);
var text =document.createElement("h3");
text.textContent="address";
child.appendChild(text);
var hr=document.createElement("hr");
child.appendChild(hr);
var address=document.createElement("h3");
address.textContent=det.address;
child.appendChild(address);


}
var child1=document.querySelector(".childtwo")
function career(careerinfo){
  var text1 =document.createElement("h2");
  text1.textContent="career Objective";
  child1.appendChild(text1);
  var hr=document.createElement("hr");
  child1.appendChild(hr);
  var info=document.createElement("p");
  info.textContent=careerinfo.info;
  child1.appendChild(info);


}
