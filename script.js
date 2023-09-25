  
const Savollar = [
    {
        savol: "9X3",
        variant: [ alert(" WARNING!!!   Please click << Caps Lock >> button before select the option."), "A. 24", "B. 27", "C. 30", "D. 33"],
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

for (let i = 0; i < Savollar.length; i++) {
    const userJavobi = prompt(Savollar[i].savol + "\nVariant: " + Savollar[i].variant.join("\n"));

    if (userJavobi === Savollar[i].javobi) {
        togriJavoblar++;} 
        else if(userJavobi === quit || userJavobi === exit){
            break;
        }
        else if ( userJavobi=== next){
            continue;
        }

        else if(userJavobi === ""||userJavobi === null){
            alert("Siz variant belgilamadingiz");
        }
}
 

alert("Siz " + Savollar.length  + " ta savoldan " +  togriJavoblar+ " ta to'gri bajardingiz.");

 if ( togriJavoblar >= Savollar.length-3) {
    alert("Maybe!  Siz byudjetga kirdingiz");
}
else if( togriJavoblar === Savollar.length-5 || togriJavoblar < Savollar.length-3){
    alert(" Congratulations! Siz to'lov kontrakt asosida o'qishga qabul qilindingiz.");
}
else{
    alert("Sorry!  talabalikka tavsiya etilmadingiz");
}


