module.exports.timeMiddleware = (req ,res, next) =>{




  const currentDay = new Date().getDay(); 
  const currentHour = new Date().getHours();
  
  if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour <= 17) {
   
    next(); 
  } else {
    next()
   // res.send('Sorry, the web application is only available during working hours.');
  }
}