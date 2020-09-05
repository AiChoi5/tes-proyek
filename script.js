const newList = document.querySelector('.newlist');
newList.addEventListener('click', function (){
    let listProject = document.querySelector('.list-project');
    const comp = Math.random();
    if(comp < 0.2){
        listProject.innerHTML += cinta1;
    } else if( 0.2 < comp < 0.4 ){
        listProject.innerHTML += cinta2;
    } else if( 0.4 < comp < 0.6 ){
        listProject.innerHTML += cinta3;
    } else if ( 0.6 < comp < 0.8 ){
        listProject.innerHTML += cinta4;
    }else {
        listProject.innerHTML += cinta5;
    }

    // listProject.innerHTML += cinta1;
})

let cinta1 = `
    <div class="list">
        <label class="checklist">
            <p>Cari cinta baru</p>
            <input type="checkbox" class="check" value="">
            <span class="checkmark"></span>
        </label>
        <p class="status">In Review</p>
    </div>
`;
  
let cinta2 = `
    <div class="list">
        <label class="checklist">
            <p>Hati-hati terhadap gebetan</p>
            <input type="checkbox" class="check" value="">
            <span class="checkmark"></span>
        </label>
        <p class="status">In Progress</p>
    </div>
`;

let cinta3 = `
    <div class="list">
        <label class="checklist">
            <p>Jangan pacaran, ntar kena PHP</p>
            <input type="checkbox" class="check" value="">
            <span class="checkmark"></span>
        </label>
        <p class="status">Approved</p>
    </div>
`;

let cinta4 = `
    <div class="list">
        <label class="checklist">
            <p>Deketin si doi</p>
            <input type="checkbox" class="check" value="">
            <span class="checkmark"></span>
        </label>
        <p class="status">Waiting</p>
    </div>
`;

let cinta5 = `
    <div class="list">
        <label class="checklist">
            <p>Lupakan sang mantan</p>
            <input type="checkbox" class="check" value="">
            <span class="checkmark"></span>
        </label>
        <p class="status">Approved</p>
    </div>
`;
