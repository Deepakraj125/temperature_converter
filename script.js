const calculate = () =>{
    const temp =document.getElementById('temp').value;
    // console.log(temp);
    const temp_unit = document.getElementById('temp_unit');
    const temp_name = temp_unit.options[temp_unit.selectedIndex].value;
    console.log(temp_name);

    const celToFah = (temp) =>{
        let f = ((temp)*(9/5))+32;
        return f;
    } 
    const celToKel = (temp) =>{
        let k = (273.15+1*(temp));
        return k;
    }
    const fahToCel = (temp) =>{
        let c = (5/9)*(temp-32);
        return c;
    }

    const fahToKel = (temp) =>{
        let k =((temp-32)*(5/9))+273.15;
        return k;
    }
    
    const kelToCel = (temp) =>{
        let c = temp-273.15;
        return c;
    }
    
    const kelToFah = (temp) =>{
        let f = ((temp-273.15)*(9/5))+32;
        return f;
    }

    let result1;
    let result2;


    if(temp_name == 'cel'){
        result1 = celToFah(temp);
        
        document.getElementById('result_holder1').innerHTML = `${result1}°F`;
        result2 = celToKel(temp);
        document.getElementById('result_holder2').innerHTML = `${result2}K`;
        
    }
    else if(temp_name == 'fah'){
        result1 = fahToCel(temp);
        document.getElementById('result_holder1').innerHTML = `${result1}°C`;
        result2 = fahToKel(temp);
        document.getElementById('result_holder2').innerHTML = `${result2}K`;
    }
    else{
        result1 = kelToFah(temp);
        document.getElementById('result_holder1').innerHTML = `${result1}°F`;
        result2 = kelToCel(temp);
        document.getElementById('result_holder2').innerHTML = `${result2}°C`;
    }

}