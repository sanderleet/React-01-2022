

function Overview() {


    function addArray() {

        if (localStorage.getItem("expenses")) {
            return JSON.parse(localStorage.getItem("expenses"))
        } else {
            const expenses = [
                {name: "piim", price: 1, category: "food"}, 
                {name: "jogurt", price: 3, category: "food"},        
                {name: "leib", price: 3, category: "food"},
                {name: "mobiiltelefon", price: 400, category: "technology"}];
        

            localStorage.setItem("expenses", JSON.stringify(expenses));
            return expenses;
        }
    }



    function deleteExpense(expense) {
        console.log("kustutan:")
        console.log(expense)
        let expenses = JSON.parse(localStorage.getItem("expenses"));
        const index = expenses.findIndex(element => element.name === expense.name)
        console.log(index)
        expenses.splice(index, 1);
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }


    return (<div> Overview

        {addArray().map(element =>  
        <div key={element.name} >       
            <div >{element.name}{/* : {element.price}$ {element.category} */} </div>     
            <button onClick={() => deleteExpense(element)}>x</button>               
        </div>)}

 
    </div>)}
    
   

export default Overview;