import React from "react"
import "./NewExpense.css"
import ExpenseForm  from "./ExpenseForm"
const NewExpense=()=>{
   const saveExpenseDataHandler=(enterExpenseData)=>{

   }
return(
   <div className="new-expense">
<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
   </div> 
)
}
export default NewExpense