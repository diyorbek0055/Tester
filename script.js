 alert(" ATTENTION !!! <<< exit yoki quit >>>deb yozilsa test yakunlanadi,  bilmagan savolingiz bo'lsa <<< next >>>  orqali savolni o'tkazib yuborishingiz mumkin")
let sertifikat = prompt(
    "Sizda chet tilini bilish sertifikari bormi?" +
      "\n" +
      "Javob berish HA yoki YO'Q buyrug'ini kiriting! "
  );
  let IELTS = 0;
  let sertifikat1 = sertifikat.toUpperCase();
  if (sertifikat1 == "HA") {
    IELTS = 1.3;
  } else {
    IELTS = 1;
  }
  
 
    
     


const Savollar = [
   
    {
        savol:  "9X3",
        variant: [ "A. 24", "B. 27", "C. 30", "D. 33"],
        javobi: "B"
    },
    {
        savol: "8X7?",
        variant: [ "A. 56", "B. 49", "C. 42", "D. 35"],
        javobi: "A"
    },
    {
        savol: "6X5?",

        variant: [ "A. 30", "B. 49", "C. 42", "D. 35"],
        javobi: "A"
    },
    {
        savol: "7X7",
        variant: [ "A. 56", "B. 49", "C. 42", "D. 35"],
        javobi: "B"
    },
    {
        savol: "7X5?",
        variant: [ "A. 56", "B. 49", "C. 42", "D. 35"],
        javobi: "D"
    },
    {
        savol: "4X8",
        variant: [ "A. 56", "B. 49", "C. 42", "D. 32"],
        javobi: "D"
    },
    {
        savol: "3X8?",
        variant: [ "A. 56", "B. 49", "C. 24", "D. 35"],
        javobi: "C"
    },
    {
        savol: "8X2",
        variant: [ "A. 16", "B. 49", "C. 42", "D. 35"],
        javobi: "A"
    },
    {
        savol: "5X9?",
        variant: [ "A. 45", "B. 49", "C. 42", "D. 35"],
        javobi: "A"
    },
    {
        savol: "4X3?",
        variant: [ "A. 56", "B.12", "C. 42", "D. 35"],
        javobi: "B"
    }
    
];

let togriJavoblar = 0;
const startTime = new Date();
let userJavobi1 = " "
let i = 0;
for (let i = 0; i < Savollar.length; i++) {
    if ((null === userJavobi1)) break;
    userJavobi1 = prompt(Savollar[i].savol + "\nVariantlar: \n" + Savollar[i].variant.join("\n"), " ");
    let userJavobi = (null !== userJavobi1) ? (userJavobi1.toUpperCase()[0]) : " ";
    if (!(null === userJavobi1)) {
        while (1) {
            userJavobi = userJavobi1.toUpperCase()[0]
            if (userJavobi == Savollar[i].javobi) {
                togriJavoblar++;
                break;
            } else if ((userJavobi.charCodeAt() >= 65 && userJavobi.charCodeAt() <= 68)) {
               
                break;
            } else {
                userJavobi1 = prompt("Varyant belgilashda xato !!! \n Qayta urinib koring:__" + Savollar[i].savol + "\nVariantlar: \n" + Savollar[i].variant.join("\n"), );
              }
                if ((userJavobi1 === "null")) {
                  userJavobi1 = prompt("Variant belgilashda xato !!! \n Qayta urinib koring:__" + Savollar[i].savol + "\nVariantlar: \n" + Savollar[i].variant.join("\n"), );
                
            }
        }
    }
    else {
        alert("Savol javobdan Otganingiz uchun rahmat !!!")
        break;
    }

        // const userJavobi = prompt(Savollar[i].savol + "\nVariant: " + Savollar[i].variant.join("\n"));
      

   if(null === userJavobi) break
     alert("Javob qabul qilinsinmi?");

 
     

    //  function randArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //           const j = Math.floor(Math.random() * (i + 1));
    //           [array[i], array[j]] = [array[j], array[i]];
    //         }
    //         return array;
        
    //       }



  
    // if (
    //     userJavobi[0] == "A" ||
    //     userJavobi[0] == "B" ||
    //     userJavobi[0] == "C" ||
    //     userJavobi[0] == "D"
    //   ) {
    //     if (userJavobi[0] == Savollar[i].javobi) {
    //       togriJavoblar++;
    //     }
    //     i++;
    
    //     continue;
    //   }
    //   if (

    //     userJavobi[0] == "a" ||
    //     userJavobi[0] == "b" ||
    //     userJavobi[0] == "c" ||
    //     userJavobi[0] == "d"
    //   ) {
    //     if (userJavobi[0].toUpperCase() == Savollar[i].javobi) {
    //       togriJavoblar++;
    //     }
    //     i++;
    
    //     continue;
    //   }
    //   if (
    //     userJavobi[0] != "a" ||
    //     userJavobi[0] != "b" ||
    //     userJavobi[0] != "c" ||
    //     userJavobi[0] != "d"
    //   ) {
    //     userJavobi = prompt(
    //       "Varyant belgilashda xato !!! \n Qayta urinib koring:__" + Savollar[i].savol + "\nVariantlar: \n" + Savollar[i].variant.join("\n"), );
    //       if ((null === userJavobi)) break;
    //   }
          if(userJavobi === "quit" || userJavobi === "exit") {
         break;
      }
    if ( userJavobi === "next"){ 
        continue;
     }
 
    // if (userJavobi === Savollar[i].javobi) {
    //     togriJavoblar++;} 

        
        // else if(userJavobi === ""||userJavobi === null){
        //     alert("Siz variant belgilamadingiz");
        // }
}

const endTime = new Date(); 
const sarflanganVaqt = endTime - startTime;


//// alert("Siz " + Savollar.length  + " ta savoldan " +  togriJavoblar+ " ta to'gri bajardingiz.");
 alert( "Siz " + Savollar.length  + " ta savoldan " +  togriJavoblar+ " ta to'gri bajardingiz." +
      "\n" +
      "IELTS uchun berilgan indeks: " +
      IELTS +
      "\n" +
      " Siz to'plagan umumiy ball: " +
      
      togriJavoblar * 5 * IELTS +
      " Sizning savolga sarflagan vaqtinggiz " + Math.floor(sarflanganVaqt / 1000) + " sekund");
      // if(sarflanganVaqt > 60){
      //   alert("Sizning savolga sarflagan vaqtinggiz " + Math.floor(sarflanganVaqt / 60) + " minut");
      // };

//  if ( togriJavoblar >= Savollar.length-3) {
//     alert("Maybe!  Siz byudjetga kirdingiz");
// }
// else if( togriJavoblar === Savollar.length-5 || togriJavoblar < Savollar.length-3){
//     alert(" Congratulations! Siz to'lov kontrakt asosida o'qishga qabul qilindingiz.");
// }
// else{
//     alert("Sorry!  talabalikka tavsiya etilmadingiz");
// }

console.log("Siz " + Savollar.length  + " ta savoldan " +  togriJavoblar+ " ta to'gri bajardingiz.");

///////////////


// let sertifikat = prompt(
//     "Sizda chet tilini bilish sertifikari bormi?" +
//       "\n" +
//       "Javob berish HA yoki YO'Q buyrug'ini kiriting! "
//   );
//   let IELTS = 0;
//   let sertifikat1 = sertifikat.toUpperCase();
//   if (sertifikat1 == "HA") {
//     IELTS = 1.3;
//   } else {
//     IELTS = 1;
//   }
  
//   let Savollar = {
//     savollar: [
//       {
//         savol: "Quyidagilarning qaysi biri yuqoriroq yuridik kuchga ega?",
//         variantlar: [
//           "A. Qonun",
//           "B. Vazirlar Mahkamsi qarori",
//           "C. Konstitsiya",
//           "D. Prezident farmoni",
//         ],
//         togriJavob: "C",
//       },
//       {
//         savol: "Pulning qaysi vazifasi narxning shakllanishi bilan bog’liq?",
//         variantlar: [
//           "A. Qiymat o'lchoni",
//           "B. Jamg'arma vositasi",
//           "C. To'lov vositasi",
//           "D. Muomala vositasi",
//         ],
//         togriJavob: "A",
//       },
//     ],
//   };
//   let togriJavoblar = 0;
//   const startTime = new Date();
//   for (let i = 0; i < test.savollar.length; ) {
//     const userJavobi = prompt(
//       test.savollar[i].savol + "\n" + test.savollar[i].variantlar.join("\n")
//     );
//     alert("Javobni tasdiqlaysizmi?");
  
//     if (
//       FoydalanuvchiJavobi[0] == "A" ||
//       FoydalanuvchiJavobi[0] == "B" ||
//       FoydalanuvchiJavobi[0] == "C" ||
//       FoydalanuvchiJavobi[0] == "D"
//     ) {
//       if (FoydalanuvchiJavobi[0] == test.savollar[i].togriJavob) {
//         togriJavoblar++;
//       }
//       i++;
  
//       continue;
//     }
//     if (
//       FoydalanuvchiJavobi[0] == "a" ||
//       FoydalanuvchiJavobi[0] == "b" ||
//       FoydalanuvchiJavobi[0] == "c" ||
//       FoydalanuvchiJavobi[0] == "d"
//     ) {
//       if (FoydalanuvchiJavobi[0].toUpperCase() == test.savollar[i].togriJavob) {
//         togriJavoblar++;
//       }
//       i++;
  
//       continue;
//     }
//     if (
//       FoydalanuvchiJavobi[0] != "a" ||
//       FoydalanuvchiJavobi[0] != "b" ||
//       FoydalanuvchiJavobi[0] != "c" ||
//       FoydalanuvchiJavobi[0] != "d"
//     ) {
//       alert("Mavjud bo'lmagan variantni tanladingiz");
//     }
//   }
  
//   const endTime = new Date();
//   const sarflanganVaqt = endTime - startTime;
//   alert(
//     "Siz " +
//       togriJavoblar +
//       " ta savolga to‘g‘ri javob berdingiz." +
//       "\n" +
//       "Siz testdan to'plagan ball: " +
//       togriJavoblar * 5 +
//       " BALL" +
//       "\n" +
//       "IELTS uchun berilgan indeks: " +
//       IELTS +
//       "\n" +
//       " Siz to'plagan umumiy ball: " +
//       togriJavoblar * 5 * IELTS +
//       " BALL" +
//       "\n" +
//       "Testga sarflangan vaqtingiz:  " +
//       sarflanganVaqt +
//       " ms"
//   );