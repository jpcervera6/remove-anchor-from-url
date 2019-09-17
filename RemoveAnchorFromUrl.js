function removeUrlAnchor(url){
    if(url.includes('#')){
      let newUrl = url.substring(0,url.indexOf('#'));
      console.log(newUrl);
    } else{
      console.log(url);
    }
  }
  
  removeUrlAnchor();
  