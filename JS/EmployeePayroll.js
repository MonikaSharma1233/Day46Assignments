class EmployeePayrollData{
    get id() { return this._id;}
    set id(id){this._id=id;}

    get name(){ return this._name;}
    set name(name){
        let nameRegex=regExp('^A-Z{1}[a-zA-Z\\s]{2,}$')
        if(nameRegex.test(name))
        this._name=name;
        else throw 'Name is Incorrect!';
    }

    get profilePic() {return this._profilePic;}
    set profilePic(profilePic){
        this._profilePic=profilePic;
    }

    get gender(){ return this._gender; }
    set gender(gender){
        this._gender=gender
    }

    get department() {
        return this._department;
    }
    set department(department){
        this._department=department;
    }

    get salary() {return this._salary;}
    set salary(salary){
        this._salary=salary;
    }
    get note() { return this._note;}
    set note(note) {
        this._note=note;
    }

    get startDate() { return this._startDate;}
    set startDate(startDate){
        this._startDate=startDate;
    }

    toString() {
        const options={year:'numeric',month:'long',day:'numeric'};
        const empDate=!this.startDate ? "undefined" : 
        this.startDate.toLocaleDateString("en-US", options);
        return "id="+ this.id+", name='" + this.name + ", gender='" + this.gender +
                ", profilePic='"+", department=" + this.department +", salary=" + this.salary+ ", startDate=" + empDate + ", note=" +this.note;
    }
}

    window.addEventListener('DOMContentLoaded',(event) =>
    {
        const name=document.querySelector('#name');
        const textError =document.queryselector('.text-error');
        name.addEventListener('input',function()
        {
            if(name.Value.length ==0)
            {
                textError.textContent="";
                return;
            }
            try
            {
                (new EmployeePayrollData()).name=name.value;
                textError.textContent="";
            }
            catch(e)
            {
                textError.textContent=e;
            }
        });
    
     
        const salary=document.querySelector('#salary');
        const output=document.querySelector('.salary-output');
        output.textContent=salary.value;
        salary.addEventListener('input',function() 
        {
            output.textContent=salary.value;

        });
    });

    const save=() => {
        try{
            let employeePayrollData=createEmployeePayroll();
        }catch(e){
            return;
        }
    }
    const creatreEmployeePayroll=()=>{
        let employeePayrollData= new EmployeePayrollData();
        try{
            employeePayrollData.name=getInputValueByID("#name");
        }catch(e){
            setTextValue('.text-error',e);
            throw e;
        }
        employeePayrollData.profilePic=getSelectedValues('[name=prfile]').pop();
        employeePayrollData.gender=getSelectedValues('[name=gender]').pop();
        employeePayrollData.department=getSelectedValues('[name=department]');
        employeePayrollData.salary=getInputValueById('#salary');
        employeePayrollData.note=getInputValueById('#notes');
        let date=getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
        employeePayrollData.date=Date.parse(date);
        alert(employeePayrollData.toString());
        return employeePayrollData;
    }
    const getSelectedValues=(propertyValue) => {
        let allItems= document.querySelectorAll(propertyValue);
        let selItem=[];
        allItems.forEach(item => {
            if(item.checked) selItems.push(item.value);
        });
        return selItems;
    }
