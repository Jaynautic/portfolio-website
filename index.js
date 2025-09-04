// Variables
let sketchList = [

];

let sidebarContent = document.getElementById('sidebar-content');

// Events
sidebarContent.addEventListener("click", function (e) {
    console.log(e.target.id)
    filter(e.target.id);
})


// Functions
function filter(filterType) {
    var sketches = document.getElementsByClassName('sketch');
    var notes = document.getElementsByClassName('note');
    var blogs = document.getElementsByClassName('blog');
    var projects = document.getElementsByClassName('project');

    switch(filterType) {
        case 'all-button':
            toggleVisibilityOn(sketches);
            toggleVisibilityOn(notes);
            toggleVisibilityOn(blogs);
            toggleVisibilityOn(projects);
            break;
        case 'sketches-button':
            toggleVisibilityOn(sketches);
            toggleVisibilityOff(notes);
            toggleVisibilityOff(blogs);
            toggleVisibilityOff(projects);
            break;
        case 'notes-button':
            toggleVisibilityOff(sketches);
            toggleVisibilityOn(notes);
            toggleVisibilityOff(blogs);
            toggleVisibilityOff(projects);
            break;
        case 'blogs-button':
            toggleVisibilityOff(sketches);
            toggleVisibilityOff(notes);
            toggleVisibilityOn(blogs);
            toggleVisibilityOff(projects);
            break;
        case 'projects-button':
            toggleVisibilityOff(sketches);
            toggleVisibilityOff(notes);
            toggleVisibilityOff(blogs);
            toggleVisibilityOn(projects);
            break;
        default:
        // code block
    }
};

function toggleVisibilityOff(classType) {
    for(i = 0; i < classType.length; i++) {
            classType[i].style.display = 'none';
        }
};

function toggleVisibilityOn(classType) {
    for(i = 0; i < classType.length; i++) {
            classType[i].style.display = 'flex';
        }
};