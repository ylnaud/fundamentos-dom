function ElementosDom() {
  console.log("dev");

  console.log("********* Elementos del Dom ***********");

  console.log(window);
  console.log(document);
  console.log(document.head);
  console.log(document.body);
  console.log(document.documentElement);
  console.log(document.doctype);
  console.log(document.characterSet);
  console.log(document.title);
  console.log(document.links);
  console.log(document.images);
  console.log(document.forms);
  console.log(document.styleSheets);
  console.log(document.scripts);
  setTimeout(()=>{
    console.log(document.getSelection().toString());

  },5000)




  


  


}
export default ElementosDom;
