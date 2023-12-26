let visaIs = null

const promise = new Promise(function(resolve, reject){
   setTimeout(()=>{
      const getPasport = prompt('У вас є дійсний закордонний паспорт? (Так/Ні)')
      if(getPasport.toLowerCase().split(' ').join('') === 'так'){
         const visaToCanada = {
            getPasport: true,
         }
         resolve(visaToCanada) 
      }else {
         reject('Увас не дійсний закордонний паспорт. Вам відмовленно.') 
      }
   },2000)
})
.then((visaToCanada)=>{
   return new Promise(function(resolve, reject){
      setTimeout(()=>{
         const getCopyPage = prompt('У вас є cкан-копії всіх сторінок закордонного паспорта? (Так/Ні)')
         if(getCopyPage.toLowerCase().split(' ').join('') === 'так'){
            const visaToCanadaWithCopy = {
               ...visaToCanada,
               getCopyPage: true,
            }
            resolve(visaToCanadaWithCopy) 
            console.log(visaToCanada);
         }else {
            reject('У вас немає cкан-копії всіх сторінок закордонного паспорта. Вам відмовленно.')
         }
      },2000)
   })
})
.then((visaToCanada)=>{
   return new Promise(function(resolve, reject){
      setTimeout(()=>{
         const getUkrainePasport = prompt('У вас є український паспорт з усіма заповненими сторінками? (Так/Ні)')
         if(getUkrainePasport.toLowerCase().split(' ').join('') === 'так'){
            const visaToCanadaWithUkrain = {
               ...visaToCanada,
               getUkrainePasport: true,
            }
            resolve(visaToCanadaWithUkrain) 
            console.log(visaToCanada);
         }else {
            reject('У вас немає українського паспорту з усіма заповненими сторінками. Вам відмовленно.')
         }
      },2000)
   })
})
.then((visaToCanada)=>{
   return new Promise(function(resolve, reject){
      setTimeout(()=>{
         const getDocumentMarriage = prompt('У вас є свідоцтво про шлюб чи розлучення? (Так/Ні)')
         if(getDocumentMarriage.toLowerCase().split(' ').join('') === 'так'){
            const visaToCanadaWithDocumentMarriage = {
               ...visaToCanada,
               getDocumentMarriage: true,
            }
            resolve(visaToCanadaWithDocumentMarriage) 
            console.log(visaToCanada);
         }else {
            reject('У вас немає свідоцтва про шлюб чи розлучення. Вам відмовленно.')
         }
      },2000)
   })
})
.then((visaToCanada)=>{
   return new Promise(function(resolve, reject){
      setTimeout(()=>{
         const getDocumentBurn = prompt('У вас є свідоцтва про народження дітей при наявності? (Так/Ні)')
         if(getDocumentBurn.toLowerCase().split(' ').join('') === 'так'){
            const visaToCanadaWithDocumentBurn = {
               ...visaToCanada,
               getDocumentBurn: true,
            }
            resolve(visaToCanadaWithDocumentBurn) 
            console.log(visaToCanada);
         }else {
            reject('У вас немає свідоцтва про народження дітей при наявності. Вам відмовленно.')
         }
      },2000)
   })
})
.then((visaToCanada)=>{
   return new Promise(function(resolve, reject){
      setTimeout(()=>{
         const getBankBill = prompt('У вас є виписка з банківського рахунку за останні пів року? (Так/Ні)')
         if(getBankBill.toLowerCase().split(' ').join('') === 'так'){
            const visaToCanadaWithBankBill = {
               ...visaToCanada,
               getBankBill: true,
            }
            resolve(visaToCanadaWithBankBill) 
            console.log(visaToCanada);
         }else {
            reject('У вас немає виписки з банківського рахунку за останні пів року. Вам відмовленно.')
         }
      },2000)
   })
})
.then((visaToCanada)=>{
   return new Promise(function(resolve, reject){
      setTimeout(()=>{
         const visaToCanadaIsTrue = {
            ...visaToCanada,
            getVisa: true,
         }
         resolve(visaToCanadaIsTrue) 
         console.log(visaToCanada);
         return visaIs = visaToCanadaIsTrue
      },2000)
   })
})
.catch((error)=>{
   alert(error)
})
.finally((visaToCanada)=>{
   const status = visaIs !== null ? visaIs.getVisa : null
   alert(`Регістрація закінчена. ${status !== null ? 'Ви получили візу.' : 'Вам відмовленно.'}`);
})