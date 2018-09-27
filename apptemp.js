var db=firebase.firestore();
 const div = document.querySelector('#printableArea');
 const divtable = document.querySelector('#divtable');
 const ul = document.querySelector('#container');
 const table = document.querySelector('#table');
var section,sem,year;
function renderchange(doc)
{
 
    let label = document.createElement('label');
    let input = document.createElement('input');
    let label2 = document.createElement('label');
    let input2 = document.createElement('input');
    let img = document.createElement('img');
    
    let label3 = document.createElement('label');
    let input3 = document.createElement('input');
    
    let label4 = document.createElement('label');
    let input4 = document.createElement('input');
    
    let label5 = document.createElement('label');
    let input5 = document.createElement('input');
    
    let label6 = document.createElement('label');
    let input6 = document.createElement('input');
 
    let label7 = document.createElement('label');
    let input7 = document.createElement('input');
    
    let label8 = document.createElement('label');
    let input8 = document.createElement('input');
    
    let label9 = document.createElement('label');
    let input9 = document.createElement('input');
    
    let label10 = document.createElement('label');
    let input10 = document.createElement('input');
    
    let label11 = document.createElement('label');
    let input11 = document.createElement('input');
    
    let label12 = document.createElement('label');
    let input12 = document.createElement('input');
    
    let label13 = document.createElement('label');
    let input13 = document.createElement('input');
    
    label.setAttribute('class',"label");
    label.textContent = "District No:";
    input.setAttribute('class',"int1");
    input.setAttribute('type',"text");
    input.setAttribute('value',doc.data().DistrictNo);
    
    label2.setAttribute('class',"label");
    label2.textContent = "Section:";
    input2.setAttribute('class',"int9");
    input2.setAttribute('type',"text");
    input2.setAttribute('value', doc.data().Section);
    
   
    input3.setAttribute('class',"int3");
    input3.setAttribute('type',"text");
    input3.setAttribute('value', doc.data().LastName);

    input4.setAttribute('class',"int3");
    input4.setAttribute('type',"text");
    input4.setAttribute('value', doc.data().FirstName);
    

    input5.setAttribute('class',"int1");
    input5.setAttribute('type',"text");
    input5.setAttribute('value', doc.data().MiddleInitial);
    
     label3.setAttribute('class',"labellast");
    label3.textContent = "Surname";
        
    label4.setAttribute('class',"labelfirst");
    label4.textContent = "First Name";
    
    label5.setAttribute('class',"label");
    label5.textContent = "MI";
    
    label6.setAttribute('class',"label");
    label6.textContent = "Student No:";
    
    input6.setAttribute('class',"int4");
    input6.setAttribute('type',"text");
    input6.setAttribute('value', doc.data().StudentNumber);
    
    label7.setAttribute('class',"label");
    label7.textContent = "Sex:";
    
    input7.setAttribute('class',"int8");
    input7.setAttribute('type',"text");
    input7.setAttribute('value', doc.data().Gender);
    
    label8.setAttribute('class',"label");
    label8.textContent = "School Year:";
    
    input8.setAttribute('class',"int10");
    input8.setAttribute('type',"text");
    input8.setAttribute('value', doc.data().SchoolYear);
    
    label9.setAttribute('class',"label");
    label9.textContent = "Last Enrollment:";
    
    input9.setAttribute('class',"int10");
    input9.setAttribute('type',"text");
    input9.setAttribute('value', doc.data().SchoolYear);
    
    label10.setAttribute('class',"label");
    label10.textContent = "Course:";
    
    input10.setAttribute('class',"int5");
    input10.setAttribute('type',"text");
    input10.setAttribute('value', doc.data().Program);
    
    label11.setAttribute('class',"label");
    label11.textContent = "Sem:";
    
    input11.setAttribute('class',"int8");
    input11.setAttribute('type',"text");
    input11.setAttribute('value', doc.data().Sem);
    
    label12.setAttribute('class',"label");
    label12.textContent = "Curriculum Year:";
    
    input12.setAttribute('class',"int2");
    input12.setAttribute('type',"text");
    input12.setAttribute('value', doc.data().Year);
    
    label13.setAttribute('class',"label");
    label13.textContent = "Last Enrollment Status";
    
    input13.setAttribute('class',"int7");
    input13.setAttribute('type',"text");
    input13.setAttribute('value', "GS");
        
    img.setAttribute('src', doc.data().Imagefile);
    img.setAttribute('width', "100");
    img.setAttribute('height', "100");
    img.setAttribute('class',"image");
    
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(label2);
    div.appendChild(input2);
    div.appendChild(img);
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));
    div.appendChild(input3);
    div.appendChild(input4);
    div.appendChild(input5);
    div.appendChild(document.createElement("br"));
    div.appendChild(label3);
    div.appendChild(label4);
    div.appendChild(label5);
    div.appendChild(document.createElement("br"));
    div.appendChild(label6);
    div.appendChild(input6);
    div.appendChild(label7);
    div.appendChild(input7);
    div.appendChild(document.createElement("br"));
    div.appendChild(label8);
    div.appendChild(input8);
    div.appendChild(label9);
    div.appendChild(input9);
    div.appendChild(document.createElement("br"));
    div.appendChild(label10);
    div.appendChild(input10);
    div.appendChild(document.createElement("br"));
    div.appendChild(label11);
    div.appendChild(input11);
    div.appendChild(label12);
    div.appendChild(input12);
    div.appendChild(label13);
    div.appendChild(input13);
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));
    
    db.collection("subjects").get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc2) {
            sem = doc.data().Sem;
            section= doc.data().Section;
            year= doc.data().Year;
        
            if(doc2.data().section === section && doc2.data().sem === sem
              && doc2.data().year === year)
                {
                    let tr= document.createElement('tr');
     
                    let  subjcode= document.createElement('td');
                    let subjname = document.createElement('td');
                    let subjunit = document.createElement('td');    
                    let subjtime = document.createElement('td');
                    let subjroom = document.createElement('td');
                    let subjday = document.createElement('td');
                    let subjgrade = document.createElement('td');
        
                    subjcode.setAttribute('class', "tda");
                    subjname.setAttribute('class', "tda");
                    subjunit.setAttribute('class', "tda");
                    subjtime.setAttribute('class', "tda");
                    subjroom.setAttribute('class', "tda");
                    subjday.setAttribute('class', "tda");
                    subjgrade.setAttribute('class', "tda");
                    
               
                    subjname.textContent = doc2.data().name;
                    subjunit.textContent = doc2.data().unit;
                    subjtime.textContent = doc2.data().time;
                    subjroom.textContent = doc2.data().room;
                    subjday.textContent = doc2.data().day;
                    subjcode.textContent = doc2.data().code;  
                    subjgrade.textContent = "";
                    
                    tr.appendChild(subjcode);
                    tr.appendChild(subjname);
                    tr.appendChild(subjunit);
                    tr.appendChild(subjday);
                    tr.appendChild(subjtime);
                    tr.appendChild(subjroom);
                    tr.appendChild(subjgrade);
                    table.appendChild(tr); 
                    div.appendChild(table); 
   
           
                }
        });
    }) ;

     

       div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));
 
    ul.appendChild(div);
}

 db.collection('studentForms').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.doc.data().Print === "YES")
            {
                   renderchange(change.doc);
            }
 
     
    });
});
