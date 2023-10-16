// let questions = [
//     {
//         question:["yerning suniy yo'ldoshi"],
//         variant: ["a. Quyosh", "b. Oy", "c. Yupiter",],
//         truthAnswer: ["a"]
//     },

//     {
//         question:["yerning suniy yo'ldoshi"],
//         variant: ["a. Quyosh", "b. Oy", "c. Yupiter",],
//         truthAnswer: ["a"]
//     },
       
//     {
//         question:["yerning suniy yo'ldoshi"],
//         variant: ["a. Quyosh", "b. Oy", "c. Yupiter",],
//         truthAnswer: ["a"]
//     }
   
// ]

// let correctAnswer = 0;
// let fullAnswer 
//    for( i = 0, i >= questions.length; i++; ){
//         const userAnswer = prompt( 
//         1+")"+ questions[i].question +  "\nVariant:" + questions[i].variant.join("\n"))
//         if (userAnswer==questions[i].truthAnswer){
//         correctAnswer++;
//         if (userAnswer === questions[i].truthAnswer){
//             alert(questions[i].truthAnswer) 

         
            

//         }
//     }

//    }

//    alert("Siz " + questions.length  + " ta savoldan " +  correctAnswer + " ta to'gri bajardingiz.");

   // Function to shuffle an array using Fisher-Yates algorithm




//    alert(" ATTENTION !!! <<< exit yoki quit >>>deb yozilsa test yakunlanadi,  bilmagan savolingiz bo'lsa <<< next >>>  orqali savolni o'tkazib yuborishingiz mumkin");
//    const Savollar = [
      
//        {
//            savol:  "9X3",
//            variant: [ "A. 24", "B. 27", "C. 30", "D. 33"],
//            javobi: "B"
//        },
//        {
//            savol: "8X7?",
//            variant: [ "A. 56", "B. 49", "C. 42", "D. 35"],
//            javobi: "A"
//        },
//        {
//            savol: "6X5?",
//            variant: [ "A. 30", "B. 49", "C. 42", "D. 35"],
//            javobi: "A"
//        },
//        {
//            savol: "7X7",
//            variant: [ "A. 56", "B. 49", "C. 42", "D. 35"],
//            javobi: "B"
//        },
//        {
//            savol: "7X5?",
//            variant: [ "A. 56", "B. 49", "C. 42", "D. 35"],
//            javobi: "D"
//        }
//     //    {
//     //        savol: "4X8",
//     //        variant: [ "A. 56", "B. 49", "C. 42", "D. 32"],
//     //        javobi: "D"
//     //    },
//     //    {
//     //        savol: "3X8?",
//     //        variant: [ "A. 56", "B. 49", "C. 24", "D. 35"],
//     //        javobi: "C"
//     //    },
//     //    {
//     //        savol: "8X2",
//     //        variant: [ "A. 16", "B. 49", "C. 42", "D. 35"],
//     //        javobi: "A"
//     //    },
//     //    {
//     //        savol: "5X9?",
//     //        variant: [ "A. 45", "B. 49", "C. 42", "D. 35"],
//     //        javobi: "A"
//     //    },
//     //    {
//     //        savol: "4X3?",
//     //        variant: [ "A. 56", "B.12", "C. 42", "D. 35"],
//     //        javobi: "B"
//     //    }
       
//    ];
// function randArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;

//   }
  
//   const randEDSavollar = randArray(Savollar);
  
//   const startTime = new Date(); 
//   const maxTimeInSeconds = 17; 
//   const togriJavoblar = 0;
  
//   for (let i = 0; i < randEDSavollar.length; i++) {
//     if ((new Date() - startTime) / 1000 >= maxTimeInSeconds) {
//       break; 
//     }
  

//          const userJavobi = prompt(Savollar[i].savol + "\nVariant: " + Savollar[i].variant.join("\n"));

//     if(userJavobi == questions[i].javobi) {
//         togriJavoblar++ ;
//     }
//   }
  
//   const endTime = new Date();
//   const totalTimeInSeconds = (endTime - startTime) / 1000;

//   alert("Siz " + Savollar.length  + " ta savoldan " +  togriJavoblar + " ta to'gri bajardingiz.");

//   alert("Time spent: " + totalTimeInSeconds + " seconds");
  


let questions = [
    {
        question: "Yumurtqa adabiy tilda nima bo`ladi",
        variants: ["tuxumbarak", "shashlik", "jarkob", "shakar"],
        correctAnswer: "tuxumbarak"
    },

    {
        question: "Kartoshkadan taom tilda nima bo`ladi",
        variants: ["padjarka", "kabob", "qovurma", "lays"],
        correctAnswer: "padjarka"
    },

    {
        question: "Dengiz nimasidandur ovqat nima bo`ladi",
        variants: ["baliq", "akula", "ilon", "toshbaqa"],
        correctAnswer: "baliq"
    },
]


let counter = 0;

function toVariant (arr) {
for (let i = 0; i < arr.length; i++) {
    arr[i] = String.fromCharCode(65 + i) + ") " + arr [i];
}
    return arr;

}

for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(
        1 +
        ") " +
        questions[i].question +
        "\n" + toVariant(questions[i].variants).join("\n")
);
if (userAnswer.variants == toVariant[i]) {
    counter++;    

    }
}

alert("Siz: " + counter + " ta savolga to`g`ri javob berdingiz");










///////////////////////// Varintga abc ni kiritish//////////////////////////////

//   function toVariant(arr){
//     for (let i = 0; i < arr.length; i++){
//         arr[i] = String.fromCharCode(65 + i) + ")"  + arr[i]
//     }
//     return arr;
//   }